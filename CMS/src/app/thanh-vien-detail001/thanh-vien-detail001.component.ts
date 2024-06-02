import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';
import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';
import { AgencyDepartment } from 'src/app/shared/AgencyDepartment.model';
import { AgencyDepartmentService } from 'src/app/shared/AgencyDepartment.service';
import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { ThanhVienPhanQuyenChucNang } from 'src/app/shared/ThanhVienPhanQuyenChucNang.model';
import { ThanhVienPhanQuyenChucNangService } from 'src/app/shared/ThanhVienPhanQuyenChucNang.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';

@Component({
  selector: 'app-thanh-vien-detail001',
  templateUrl: './thanh-vien-detail001.component.html',
  styleUrls: ['./thanh-vien-detail001.component.css']
})
export class ThanhVienDetail001Component implements OnInit {


  constructor(
    public dialogRef: MatDialogRef<ThanhVienDetail001Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucThanhVienService: DanhMucThanhVienService,
    public DanhMucChucDanhService: DanhMucChucDanhService,
    public AgencyDepartmentService: AgencyDepartmentService,
    public StateAgencyService: StateAgencyService,

    public ThanhVienService: ThanhVienService,
    public ThanhVienPhanQuyenChucNangService: ThanhVienPhanQuyenChucNangService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
  ) {
  }

  ngOnInit(): void {
    this.DanhMucChucDanhSearch();
    this.AgencyDepartmentSearch();
    this.StateAgencySearch();
    this.ThanhVienGetByID();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.ComponentGetAllToListAsync();
  }
  AgencyDepartmentSearch() {
    this.AgencyDepartmentService.ComponentGetAllToListAsync();
  }
  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }

  ThanhVienGetByID() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }

  ThanhVienSave() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienService.SaveAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;

        if (this.ThanhVienService.FormData) {
          if (this.ThanhVienService.FormData.ID > 0) {
            if (this.ThanhVienService.FormData.PlanThamDinhCode) {
              if (this.ThanhVienService.FormData.PlanThamDinhCode.length > 0) {
                this.PlanThamDinhThanhVienService.FormData.ThanhVienID = this.ThanhVienService.FormData.ID;
                this.PlanThamDinhThanhVienService.FormData.ParentID = this.ThanhVienService.FormData.PlanThamDinhID;
                this.PlanThamDinhThanhVienService.FormData.Code = this.ThanhVienService.FormData.PlanThamDinhCode;
                this.PlanThamDinhThanhVienSave();
              }
            }
          }
        }

        this.NotificationService.warn(environment.SaveSuccess);
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienSave() {
    this.ThanhVienService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.SaveAsync().subscribe(
      res => {
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}
