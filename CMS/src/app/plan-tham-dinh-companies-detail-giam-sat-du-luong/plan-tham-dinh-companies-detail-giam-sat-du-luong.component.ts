import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';
import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';
import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';

import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';


import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { DanhMucLayMauChiTieuDetailComponent } from '../danh-muc-lay-mau-chi-tieu-detail/danh-muc-lay-mau-chi-tieu-detail.component';
import { DanhMucLayMauDetailComponent } from '../danh-muc-lay-mau-detail/danh-muc-lay-mau-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-detail-giam-sat-du-luong',
  templateUrl: './plan-tham-dinh-companies-detail-giam-sat-du-luong.component.html',
  styleUrls: ['./plan-tham-dinh-companies-detail-giam-sat-du-luong.component.css']
})
export class PlanThamDinhCompaniesDetailGiamSatDuLuongComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompaniesDetailGiamSatDuLuongComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucLayMauService: DanhMucLayMauService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.DanhMucLayMauSearch();
    this.DanhMucLayMauChiTieuSearch();
    this.DanhMucATTPXepLoaiSearch();
    this.PlanThamDinhDanhMucLayMauSearch();
  }
  PlanThamDinhDanhMucLayMauSearch() {
    // this.PlanThamDinhCompaniesService.IsShowLoading = true;
    // this.PlanThamDinhDanhMucLayMauService.BaseParameter.SearchString = this.PlanThamDinhCompaniesService.FormData.Code;
    // this.PlanThamDinhDanhMucLayMauService.GetBySearchStringToListAsync().subscribe(
    //   res => {
    //     this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
    //     for (let i = 0; i < this.PlanThamDinhDanhMucLayMauService.List.length; i++) {
    //       if (this.PlanThamDinhDanhMucLayMauService.List[i].ID) {
    //         let ListDistrictData = this.PlanThamDinhDanhMucLayMauService.ListDistrictData.filter(item => item.DistrictDataID == this.PlanThamDinhDanhMucLayMauService.List[i].DistrictDataID);
    //         if (ListDistrictData.length == 0) {
    //           this.PlanThamDinhDanhMucLayMauService.ListDistrictData.push(this.PlanThamDinhDanhMucLayMauService.List[i]);
    //         }
    //         let ListDanhMucLayMau = this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMau.filter(item => item.DanhMucLayMauID == this.PlanThamDinhDanhMucLayMauService.List[i].DanhMucLayMauID);
    //         if (ListDanhMucLayMau.length == 0) {
    //           this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMau.push(this.PlanThamDinhDanhMucLayMauService.List[i]);
    //         }
    //         let ListDanhMucLayMauChiTieu = this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMauChiTieu.filter(item => item.DanhMucLayMauChiTieuID == this.PlanThamDinhDanhMucLayMauService.List[i].DanhMucLayMauChiTieuID);
    //         if (ListDanhMucLayMauChiTieu.length == 0) {
    //           this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMauChiTieu.push(this.PlanThamDinhDanhMucLayMauService.List[i]);
    //         }
    //       }
    //     }

    //     this.PlanThamDinhCompaniesService.IsShowLoading = false;
    //   },
    //   err => {
    //     this.PlanThamDinhCompaniesService.IsShowLoading = false;
    //   }
    // );
  }

  PlanThamDinhCompaniesSave() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauRefreshSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListRefreshAsync();
  }
  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauChiTieuRefreshSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListRefreshAsync();
  }
  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListAsync();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.Active = true;
    this.CompanyInfoService.ComponentGetByActiveToListAsync();
  }
  CompanyInfoSearchRefresh() {
    this.CompanyInfoService.ComponentGetAllToListRefreshAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }
  CompanyLakeSearch() {
    this.CompanyLakeService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.CompanyInfoID;
    this.CompanyLakeService.ComponentGetByParentIDToListAsync();
  }
  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
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
          this.CompanyInfoSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  DanhMucLayMauAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DanhMucLayMauService.BaseParameter.ID = ID;
    this.DanhMucLayMauService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauService.FormData = res as DanhMucLayMau;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauRefreshSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  DanhMucLayMauChiTieuAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DanhMucLayMauChiTieuService.BaseParameter.ID = ID;
    this.DanhMucLayMauChiTieuService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauChiTieuService.FormData = res as DanhMucLayMauChiTieu;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauChiTieuDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauChiTieuRefreshSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }

}
