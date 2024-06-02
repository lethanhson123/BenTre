import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MailService } from 'src/app/shared/Mail.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { PlanThamDinhDistrictDataService } from 'src/app/shared/PlanThamDinhDistrictData.service';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';
import { PlanThamDinhDetailGiamSatDuLuong001Component } from '../plan-tham-dinh-detail-giam-sat-du-luong001/plan-tham-dinh-detail-giam-sat-du-luong001.component';
import { PlanThamDinhDetailNhuyenTheHaiManhVo001Component } from '../plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001/plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component';

@Component({
  selector: 'app-plan-tham-dinh-nhuyen-the-hai-manh-vo',
  templateUrl: './plan-tham-dinh-nhuyen-the-hai-manh-vo.component.html',
  styleUrls: ['./plan-tham-dinh-nhuyen-the-hai-manh-vo.component.css']
})
export class PlanThamDinhNhuyenTheHaiManhVoComponent implements OnInit {

  @ViewChild('PlanThamDinhSort') PlanThamDinhSort: MatSort;
  @ViewChild('PlanThamDinhPaginator') PlanThamDinhPaginator: MatPaginator;



  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public MailService: MailService,

    public CompanyInfoService: CompanyInfoService,
    public ThanhVienService: ThanhVienService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhDistrictDataService: PlanThamDinhDistrictDataService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,


  ) { }

  ngOnInit(): void {
   this.PlanThamDinhSearch();
  }
  PlanThamDinhCopy(element: PlanThamDinh) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData = element;
    this.PlanThamDinhService.CopyAsync().subscribe(
      res => {
        this.PlanThamDinhSearch();
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhSearch() {
    if (this.PlanThamDinhService.BaseParameter.SearchString.length > 0) {
      this.PlanThamDinhService.BaseParameter.SearchString = this.PlanThamDinhService.BaseParameter.SearchString.trim();
      this.PlanThamDinhService.DataSource.filter = this.PlanThamDinhService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.PlanThamDinhService.IsShowLoading = true;
      this.PlanThamDinhService.BaseParameter.ParentID = environment.PlanTypeIDNhuyenTheHaiManhVo;
      this.PlanThamDinhService.BaseParameter.Active = true;
      this.PlanThamDinhService.GetByParentID_Nam_ActiveToListAsync().subscribe(
        res => {
          this.PlanThamDinhService.List = (res as PlanThamDinh[]).sort((a, b) => (a.NgayBatDau < b.NgayBatDau ? 1 : -1));
          if (this.PlanThamDinhService.List) {
            if (this.PlanThamDinhService.List.length > 0) {
              for (let i = 0; i < this.PlanThamDinhService.List.length; i++) {
                this.PlanThamDinhDanhMucLayMauSearch(i);
              }
            }
          }
          this.PlanThamDinhService.DataSource = new MatTableDataSource(this.PlanThamDinhService.List);
          this.PlanThamDinhService.DataSource.sort = this.PlanThamDinhSort;
          this.PlanThamDinhService.DataSource.paginator = this.PlanThamDinhPaginator;
          this.PlanThamDinhService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }
  }
  PlanThamDinhDanhMucLayMauSearch(i: number) {
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhDanhMucLayMau = this.PlanThamDinhDanhMucLayMauService.List;
      },
      err => {
      }
    );
  }
  PlanThamDinhThanhVienSearch(i: number) {
    this.PlanThamDinhThanhVienService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhThanhVienService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienService.List = (res as PlanThamDinhThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhThanhVien = this.PlanThamDinhThanhVienService.List;
      },
      err => {
      }
    );
  }
  PlanThamDinhCompaniesSearch(i: number) {
    this.PlanThamDinhCompaniesService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhCompaniesService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhCompanies = this.PlanThamDinhCompaniesService.List;
      },
      err => {
      }
    );
  }
  PlanThamDinhDistrictDataSearch(i: number) {
    this.PlanThamDinhDistrictDataService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhDistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataService.List = (res as PlanThamDinhDistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhDistrictData = this.PlanThamDinhDistrictDataService.List;
      },
      err => {
      }
    );
  }
  PlanThamDinhDelete(element: PlanThamDinh) {
    if (confirm(environment.DeleteConfirm)) {
      this.PlanThamDinhService.IsShowLoading = true;
      element.Active = false;
      this.PlanThamDinhService.FormData = element;
      this.PlanThamDinhService.SaveAsync().subscribe(
        res => {
          this.NotificationService.warn(environment.DeleteSuccess);
          this.PlanThamDinhSearch();
          this.PlanThamDinhService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.DeleteNotSuccess);
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }
  }

  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
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
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDNhuyenTheHaiManhVo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhDetailNhuyenTheHaiManhVo001Component, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
}