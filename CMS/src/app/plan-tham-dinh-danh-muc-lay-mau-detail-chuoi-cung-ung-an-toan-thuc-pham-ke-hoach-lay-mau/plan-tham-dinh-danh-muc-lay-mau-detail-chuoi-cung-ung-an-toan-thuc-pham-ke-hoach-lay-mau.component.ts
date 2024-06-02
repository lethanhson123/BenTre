import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau',
  templateUrl: './plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component.html',
  styleUrls: ['./plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component.css']
})
export class PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,


    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.CompanyLakeSearch();
  }
  DateNgayGhiNhan(value) {
    this.PlanThamDinhDanhMucLayMauService.FormData.NgayGhiNhan = new Date(value);
  }
  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.Active = true;
    this.CompanyInfoService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.CompanyInfoService.BaseParameter.DistrictDataID = this.PlanThamDinhDanhMucLayMauService.FormData.DistrictDataID;    
    this.CompanyInfoService.BaseParameter.WardDataID = environment.InitializationNumber;
    this.CompanyInfoService.BaseParameter.SearchString = environment.InitializationString;
    this.CompanyInfoService.BaseParameter.ID = this.PlanThamDinhDanhMucLayMauService.FormData.CompanyInfoID;
    this.CompanyInfoService.ComponentGet100ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter100(searchString);
  }
  CompanyLakeSearch() {
    this.CompanyLakeService.BaseParameter.ParentID = this.PlanThamDinhDanhMucLayMauService.FormData.CompanyInfoID;
    this.CompanyLakeService.ComponentGetByParentIDToListAsync();
  }
  PlanThamDinhDanhMucLayMauSave() {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.FormData = res as PlanThamDinhDanhMucLayMau;
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd() {
    if (this.PlanThamDinhDanhMucLayMauService.FormData.CompanyInfoID == null) {
      this.PlanThamDinhDanhMucLayMauService.FormData.CompanyInfoID = environment.InitializationNumber;
    }
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.PlanThamDinhDanhMucLayMauService.FormData.CompanyInfoID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoService.FormData.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyInfoService.BaseParameter.ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoSearch();
          this.CompanyLakeSearch();
        });
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}