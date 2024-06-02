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

@Component({
  selector: 'app-thanh-vien-detail',
  templateUrl: './thanh-vien-detail.component.html',
  styleUrls: ['./thanh-vien-detail.component.css']
})
export class ThanhVienDetailComponent implements OnInit {

  @ViewChild('ThanhVienPhanQuyenChucNangSort') ThanhVienPhanQuyenChucNangSort: MatSort;
  @ViewChild('ThanhVienPhanQuyenChucNangPaginator') ThanhVienPhanQuyenChucNangPaginator: MatPaginator;


  ActiveAllThanhVienPhanQuyenChucNang: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<ThanhVienDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucThanhVienService: DanhMucThanhVienService,
    public DanhMucChucDanhService: DanhMucChucDanhService,
    public AgencyDepartmentService: AgencyDepartmentService,
    public StateAgencyService: StateAgencyService,

    public ThanhVienService: ThanhVienService,
    public ThanhVienPhanQuyenChucNangService: ThanhVienPhanQuyenChucNangService,

    public CompanyInfoService: CompanyInfoService,
  ) {
  }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.DanhMucThanhVienSearch();
    this.DanhMucChucDanhSearch();
    this.AgencyDepartmentSearch();
    this.StateAgencySearch();
    this.ThanhVienGetByID();
  }
  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.ID = this.ThanhVienService.FormData.CompanyInfoID;
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }


  DanhMucThanhVienSearch() {
    this.DanhMucThanhVienService.ComponentGetAllToListAsync();
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
        this.ThanhVienPhanQuyenChucNangSearch();
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
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }



  ThanhVienPhanQuyenChucNangSearch() {
    if (this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.length > 0) {
      this.ThanhVienPhanQuyenChucNangService.DataSource.filter = this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.ThanhVienPhanQuyenChucNangGetToList();
    }
  }

  ThanhVienPhanQuyenChucNangGetToList() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.ParentID = this.ThanhVienService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.GetSQLByParentIDToListAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangService.List = (res as ThanhVienPhanQuyenChucNang[]);
        this.ThanhVienPhanQuyenChucNangService.DataSource = new MatTableDataSource(this.ThanhVienPhanQuyenChucNangService.List);
        this.ThanhVienPhanQuyenChucNangService.DataSource.sort = this.ThanhVienPhanQuyenChucNangSort;
        this.ThanhVienPhanQuyenChucNangService.DataSource.paginator = this.ThanhVienPhanQuyenChucNangPaginator;
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }

  ThanhVienPhanQuyenChucNangActiveChange(element: ThanhVienPhanQuyenChucNang) {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.FormData = element;
    this.ThanhVienPhanQuyenChucNangService.FormData.ParentID = this.ThanhVienService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }
  ThanhVienPhanQuyenChucNangActiveAllChange() {
    this.ThanhVienService.IsShowLoading = true;
    for (let i = 0; i < this.ThanhVienPhanQuyenChucNangService.List.length; i++) {
      this.ThanhVienPhanQuyenChucNangService.FormData = this.ThanhVienPhanQuyenChucNangService.List[i];
      this.ThanhVienPhanQuyenChucNangService.FormData.ParentID = this.ThanhVienService.FormData.ID;
      this.ThanhVienPhanQuyenChucNangService.FormData.Active = this.ActiveAllThanhVienPhanQuyenChucNang;
    }
    this.ThanhVienPhanQuyenChucNangService.SaveListAsync(this.ThanhVienPhanQuyenChucNangService.List).subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangSearch();
        this.NotificationService.warn(environment.SaveSuccess);
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
