import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucChucNang } from 'src/app/shared/DanhMucChucNang.model';
import { DanhMucChucNangService } from 'src/app/shared/DanhMucChucNang.service';

import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { ThanhVienPhanQuyenChucNang } from 'src/app/shared/ThanhVienPhanQuyenChucNang.model';
import { ThanhVienPhanQuyenChucNangService } from 'src/app/shared/ThanhVienPhanQuyenChucNang.service';

@Component({
  selector: 'app-danh-muc-chuc-nang-detail',
  templateUrl: './danh-muc-chuc-nang-detail.component.html',
  styleUrls: ['./danh-muc-chuc-nang-detail.component.css']
})
export class DanhMucChucNangDetailComponent implements OnInit {

  @ViewChild('ThanhVienPhanQuyenChucNangSort001') ThanhVienPhanQuyenChucNangSort001: MatSort;
  @ViewChild('ThanhVienPhanQuyenChucNangPaginator001') ThanhVienPhanQuyenChucNangPaginator001: MatPaginator;

  @ViewChild('ThanhVienPhanQuyenChucNangSort002') ThanhVienPhanQuyenChucNangSort002: MatSort;
  @ViewChild('ThanhVienPhanQuyenChucNangPaginator002') ThanhVienPhanQuyenChucNangPaginator002: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<DanhMucChucNangDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucNangService: DanhMucChucNangService,

    public DanhMucThanhVienService: DanhMucThanhVienService,

    public StateAgencyService: StateAgencyService,

    public ThanhVienPhanQuyenChucNangService: ThanhVienPhanQuyenChucNangService,
  ) {
  }

  ngOnInit(): void {
    this.DanhMucThanhVienSearch();
    this.StateAgencySearch();
    this.ThanhVienPhanQuyenChucNangSearch001();
    this.ThanhVienPhanQuyenChucNangSearch002();
  }
  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }
  DanhMucThanhVienSearch() {
    this.DanhMucThanhVienService.ComponentGetAllToListAsync();
  }
  ThanhVienPhanQuyenChucNangSearch001() {
    if (this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.length > 0) {
      this.ThanhVienPhanQuyenChucNangService.DataSource.filter = this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.ThanhVienPhanQuyenChucNangGetToList001();
    }
  }
  ThanhVienPhanQuyenChucNangGetToList001() {
    this.DanhMucChucNangService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.DanhMucChucNangID = this.DanhMucChucNangService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.GetByDanhMucChucNangID_001AndEmptyToListAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangService.ListFilter = (res as ThanhVienPhanQuyenChucNang[]);
        this.ThanhVienPhanQuyenChucNangService.DataSourceFilter = new MatTableDataSource(this.ThanhVienPhanQuyenChucNangService.ListFilter);
        this.ThanhVienPhanQuyenChucNangService.DataSourceFilter.sort = this.ThanhVienPhanQuyenChucNangSort001;
        this.ThanhVienPhanQuyenChucNangService.DataSourceFilter.paginator = this.ThanhVienPhanQuyenChucNangPaginator001;
        this.DanhMucChucNangService.IsShowLoading = false;
      },
      err => {
        this.DanhMucChucNangService.IsShowLoading = false;
      }
    );
  }

  ThanhVienPhanQuyenChucNangSearch002() {
    if (this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.length > 0) {
      this.ThanhVienPhanQuyenChucNangService.DataSource.filter = this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.ThanhVienPhanQuyenChucNangGetToList002();
    }
  }
  ThanhVienPhanQuyenChucNangGetToList002() {
    this.DanhMucChucNangService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.DanhMucChucNangID = this.DanhMucChucNangService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.GetByDanhMucChucNangID_002AndEmptyToListAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangService.List = (res as ThanhVienPhanQuyenChucNang[]);
        this.ThanhVienPhanQuyenChucNangService.DataSource = new MatTableDataSource(this.ThanhVienPhanQuyenChucNangService.List);
        this.ThanhVienPhanQuyenChucNangService.DataSource.sort = this.ThanhVienPhanQuyenChucNangSort002;
        this.ThanhVienPhanQuyenChucNangService.DataSource.paginator = this.ThanhVienPhanQuyenChucNangPaginator002;
        this.DanhMucChucNangService.IsShowLoading = false;
      },
      err => {
        this.DanhMucChucNangService.IsShowLoading = false;
      }
    );
  }

  ThanhVienPhanQuyenChucNangSave(element: ThanhVienPhanQuyenChucNang) {
    this.DanhMucChucNangService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.FormData = element;
    this.ThanhVienPhanQuyenChucNangService.FormData.DanhMucChucNangID = this.DanhMucChucNangService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.SaveAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangSearch001();
        this.ThanhVienPhanQuyenChucNangSearch002();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      }
    );
  }
  ThanhVienPhanQuyenChucNangDelete(element: ThanhVienPhanQuyenChucNang) {
    this.DanhMucChucNangService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.ID = element.ID;
    this.ThanhVienPhanQuyenChucNangService.RemoveAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangSearch001();
        this.ThanhVienPhanQuyenChucNangSearch002();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}
