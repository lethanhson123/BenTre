import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { NguonVon } from 'src/app/shared/NguonVon.model';
import { NguonVonService } from 'src/app/shared/NguonVon.service';

import { NguonVonChiTiet } from 'src/app/shared/NguonVonChiTiet.model';
import { NguonVonChiTietService } from 'src/app/shared/NguonVonChiTiet.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';
import { AgencyDepartment } from 'src/app/shared/AgencyDepartment.model';
import { AgencyDepartmentService } from 'src/app/shared/AgencyDepartment.service';

@Component({
  selector: 'app-nguon-von-detail',
  templateUrl: './nguon-von-detail.component.html',
  styleUrls: ['./nguon-von-detail.component.css']
})
export class NguonVonDetailComponent implements OnInit {

  @ViewChild('NguonVonChiTietSort') NguonVonChiTietSort: MatSort;
  @ViewChild('NguonVonChiTietPaginator') NguonVonChiTietPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<NguonVonDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public StateAgencyService: StateAgencyService,
    public AgencyDepartmentService: AgencyDepartmentService,

    public NguonVonService: NguonVonService,
    public NguonVonChiTietService: NguonVonChiTietService,

  ) { }

  ngOnInit(): void {
    this.NguonVonChiTietSearch();
  }
  DateNgayBatDau(value) {
    this.NguonVonService.FormData.NgayBatDau = new Date(value);
  }
  DateNgayKetThuc(value) {
    this.NguonVonService.FormData.NgayKetThuc = new Date(value);
  }
  DateNguonVonNgayBatDau(element: NguonVon, value) {
    element.NgayBatDau = new Date(value);
  }
  DateNguonVonNgayKetThuc(element: NguonVon, value) {
    element.NgayKetThuc = new Date(value);
  }
  NguonVonSave() {
    this.NguonVonService.IsShowLoading = true;    
    this.NguonVonService.SaveAsync().subscribe(
      res => {        
        this.NguonVonSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
  NguonVonSearch() {
    this.NguonVonService.BaseParameter.ID = this.NguonVonService.FormData.ID;
    this.NguonVonService.GetByIDAsync().subscribe(
      res => {
        this.NguonVonService.FormData = res as NguonVon;
      },
      err => {
      }
    );
  }
  NguonVonChiTietSearch() {
    this.NguonVonService.IsShowLoading = true;
    this.NguonVonChiTietService.BaseParameter.ParentID = this.NguonVonService.FormData.ID;
    this.NguonVonChiTietService.GetByParentIDAndEmptyToListAsync().subscribe(
      res => {
        this.NguonVonChiTietService.List = (res as NguonVonChiTiet[]).sort((a, b) => (a.NgayBatDau < b.NgayBatDau ? 1 : -1));
        this.NguonVonChiTietService.DataSource = new MatTableDataSource(this.NguonVonChiTietService.List);
        this.NguonVonChiTietService.DataSource.sort = this.NguonVonChiTietSort;
        this.NguonVonChiTietService.DataSource.paginator = this.NguonVonChiTietPaginator;
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
  NguonVonChiTietSave(element: NguonVonChiTiet) {
    this.NguonVonService.IsShowLoading = true;
    element.ParentID = this.NguonVonService.FormData.ID;
    this.NguonVonChiTietService.FormData = element;
    this.NguonVonChiTietService.SaveAsync().subscribe(
      res => {
        this.NguonVonChiTietSearch();
        this.NguonVonSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
  NguonVonChiTietDelete(element: NguonVonChiTiet) {
    this.NguonVonService.IsShowLoading = true;
    this.NguonVonChiTietService.BaseParameter.ID = element.ID;
    this.NguonVonChiTietService.RemoveAsync().subscribe(
      res => {
        this.NguonVonChiTietSearch();
        this.NguonVonSearch();
        this.NotificationService.warn(environment.DeleteSuccess);
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.DeleteNotSuccess);
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }
}