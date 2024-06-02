import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { ATTPInfoService } from 'src/app/shared/ATTPInfo.service';


import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { ThanhVienDetail001Component } from '../thanh-vien-detail001/thanh-vien-detail001.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';


@Component({
  selector: 'app-plan-tham-dinh-detail',
  templateUrl: './plan-tham-dinh-detail.component.html',
  styleUrls: ['./plan-tham-dinh-detail.component.css']
})
export class PlanThamDinhDetailComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  @ViewChild('PlanThamDinhThanhVienSort') PlanThamDinhThanhVienSort: MatSort;
  @ViewChild('PlanThamDinhThanhVienPaginator') PlanThamDinhThanhVienPaginator: MatPaginator;

  @ViewChild('ATTPInfoSort') ATTPInfoSort: MatSort;
  @ViewChild('ATTPInfoPaginator') ATTPInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,


    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public ATTPInfoService: ATTPInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,

  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.DanhMucATTPLoaiHoSoSearch();
    this.CompanyInfoSearch();
    this.ThanhVienSearch();
    this.DanhMucChucDanhSearch();
    this.PlanThamDinhCompaniesSearch();
    this.PlanThamDinhThanhVienSearch();
    this.ATTPInfoSearch();
  }

  DatePlanThamDinhCompaniesNgayGhiNhan(element: PlanThamDinhCompanies, value) {
    element.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.Active = true;
    this.CompanyInfoService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.CompanyInfoService.BaseParameter.DistrictDataID = environment.InitializationNumber;
    this.CompanyInfoService.BaseParameter.WardDataID = environment.InitializationNumber;
    this.CompanyInfoService.BaseParameter.SearchString = environment.InitializationString;
    this.CompanyInfoService.BaseParameter.ID = environment.InitializationNumber;
    this.CompanyInfoService.ComponentGet100ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter100(searchString);
  }

  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.ComponentGetAllToListAsync();
  }
  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.ComponentGetAllToListAsync();
  }

  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }

  ATTPInfoSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ATTPInfoService.BaseParameter.DanhMucATTPTinhTrangID = 1;
    this.ATTPInfoService.BaseParameter.Active = true;
    this.ATTPInfoService.GetByDanhMucATTPTinhTrangID_ActiveToListAsync().subscribe(
      res => {
        this.ATTPInfoService.List = (res as ATTPInfo[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        for (let i = 0; i < this.ATTPInfoService.List.length; i++) {
          this.ATTPInfoService.List[i].Active = false;
        }
        this.ATTPInfoService.DataSource = new MatTableDataSource(this.ATTPInfoService.List);
        this.ATTPInfoService.DataSource.sort = this.ATTPInfoSort;
        this.ATTPInfoService.DataSource.paginator = this.ATTPInfoPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  ATTPInfoActiveChange(element: ATTPInfo) {
    if (element.Active == true) {
      this.PlanThamDinhService.IsShowLoading = true;
      this.PlanThamDinhCompaniesService.FormData.ID = environment.InitializationNumber;
      this.PlanThamDinhCompaniesService.FormData.ParentID = this.PlanThamDinhService.FormData.ID;
      this.PlanThamDinhCompaniesService.FormData.Code = this.PlanThamDinhService.FormData.Code;
      this.PlanThamDinhCompaniesService.FormData.CompanyInfoID = element.ParentID;
      this.PlanThamDinhCompaniesService.FormData.ATTPInfoID = element.ID;
      this.PlanThamDinhCompaniesService.FormData.DanhMucATTPLoaiHoSoID = element.DanhMucATTPLoaiHoSoID;
      this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
        res => {
          this.PlanThamDinhCompaniesSearch();
          this.NotificationService.warn(environment.SaveSuccess);
          this.ThanhVienService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.SaveNotSuccess);
          this.ThanhVienService.IsShowLoading = false;
        }
      );
    }
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.List);
        this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesSave(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.FormData = element;
    this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesDelete(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompaniesService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhThanhVienSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienService.List = (res as PlanThamDinhThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhThanhVienService.DataSource = new MatTableDataSource(this.PlanThamDinhThanhVienService.List);
        this.PlanThamDinhThanhVienService.DataSource.sort = this.PlanThamDinhThanhVienSort;
        this.PlanThamDinhThanhVienService.DataSource.paginator = this.PlanThamDinhThanhVienPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienSave(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.FormData = element;
    this.PlanThamDinhThanhVienService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienDelete(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.ID = element.ID;
    this.PlanThamDinhThanhVienService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDThamDinhATTP;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.ID = ID;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.FormData.ParentID = environment.DanhMucThanhVienIDKhachMoi;
        this.ThanhVienService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.ThanhVienService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ThanhVienSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoService.FormData.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
        this.CompanyInfoService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.CompanyInfoService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }

}
