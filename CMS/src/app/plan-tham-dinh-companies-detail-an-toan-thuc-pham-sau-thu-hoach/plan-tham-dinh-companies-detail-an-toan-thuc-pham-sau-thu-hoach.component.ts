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


import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { PlanThamDinhDistrictDataService } from 'src/app/shared/PlanThamDinhDistrictData.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { DanhMucLayMauChiTieuDetailComponent } from '../danh-muc-lay-mau-chi-tieu-detail/danh-muc-lay-mau-chi-tieu-detail.component';
import { DanhMucLayMauDetailComponent } from '../danh-muc-lay-mau-detail/danh-muc-lay-mau-detail.component';
@Component({
  selector: 'app-plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach',
  templateUrl: './plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach.component.html',
  styleUrls: ['./plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach.component.css']
})
export class PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucLayMauService: DanhMucLayMauService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhDistrictDataService: PlanThamDinhDistrictDataService,

  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.DanhMucLayMauSearch();
    this.DanhMucLayMauChiTieuSearch();
    this.DanhMucATTPXepLoaiSearch();

    this.PlanThamDinhDistrictDataSearch();
  }

  DateNgayGhiNhan(value) {
    this.PlanThamDinhCompaniesService.FormData.NgayGhiNhan = new Date(value);
  }
  PlanThamDinhDistrictDataSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhDistrictDataService.BaseParameter.SearchString = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhDistrictDataService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataService.List = (res as PlanThamDinhDistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        if (this.PlanThamDinhDistrictDataService.List) {
          if (this.PlanThamDinhDistrictDataService.List.length > 0) {
            this.PlanThamDinhCompaniesService.FormData.DistrictDataID = this.PlanThamDinhDistrictDataService.List[0].DistrictDataID;
            this.CompanyInfoSearch();
          }
        }
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
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
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.CompanyInfoService.List = [];
    this.CompanyInfoService.ListFilter = [];
    this.CompanyInfoService.BaseParameter.DistrictDataID = this.PlanThamDinhCompaniesService.FormData.DistrictDataID;
    this.CompanyInfoService.BaseParameter.Active = true;
    this.CompanyInfoService.GetByDistrictDataID_ActiveToListAsync().subscribe(
      res => {
        this.CompanyInfoService.List = (res as PlanThamDinhDistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));

        this.CompanyInfoService.ListFilter = this.CompanyInfoService.List;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoSearchRefresh() {
    this.CompanyInfoService.ComponentGetAllToListRefreshAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
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
