import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucDangKyCapGiay } from 'src/app/shared/DanhMucDangKyCapGiay.model';
import { DanhMucDangKyCapGiayService } from 'src/app/shared/DanhMucDangKyCapGiay.service';
import { DanhMucXepLoai } from 'src/app/shared/DanhMucXepLoai.model';
import { DanhMucXepLoaiService } from 'src/app/shared/DanhMucXepLoai.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyInfoLichSuKiemTra } from 'src/app/shared/CompanyInfoLichSuKiemTra.model';
import { CompanyInfoLichSuKiemTraService } from 'src/app/shared/CompanyInfoLichSuKiemTra.service';

@Component({
  selector: 'app-company-info-lich-su-kiem-tra',
  templateUrl: './company-info-lich-su-kiem-tra.component.html',
  styleUrls: ['./company-info-lich-su-kiem-tra.component.css']
})
export class CompanyInfoLichSuKiemTraComponent implements OnInit {

  @ViewChild('CompanyInfoLichSuKiemTraSort') CompanyInfoLichSuKiemTraSort: MatSort;
  @ViewChild('CompanyInfoLichSuKiemTraPaginator') CompanyInfoLichSuKiemTraPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,

    public DanhMucDangKyCapGiayService: DanhMucDangKyCapGiayService,
    public DanhMucXepLoaiService: DanhMucXepLoaiService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyInfoLichSuKiemTraService: CompanyInfoLichSuKiemTraService,
  ) {
    this.CompanyInfoSearch();
    this.DanhMucDangKyCapGiaySearch();
    this.DanhMucXepLoaiSearch();
  }

  ngOnInit(): void {
  }

  DateCompanyInfoLichSuKiemTraNgayGhiNhan(element: CompanyInfoLichSuKiemTra, value) {
    element.NgayGhiNhan = new Date(value);
  }


  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }


  DanhMucDangKyCapGiaySearch() {
    this.DanhMucDangKyCapGiayService.ComponentGetAllToListAsync();
  }
  DanhMucXepLoaiSearch() {
    this.DanhMucXepLoaiService.ComponentGetAllToListAsync();
  }

  CompanyInfoLichSuKiemTraSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyInfoLichSuKiemTraService.GetByParentIDAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoLichSuKiemTraService.List = (res as CompanyInfoLichSuKiemTra[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));
        this.CompanyInfoLichSuKiemTraService.DataSource = new MatTableDataSource(this.CompanyInfoLichSuKiemTraService.List);
        this.CompanyInfoLichSuKiemTraService.DataSource.sort = this.CompanyInfoLichSuKiemTraSort;
        this.CompanyInfoLichSuKiemTraService.DataSource.paginator = this.CompanyInfoLichSuKiemTraPaginator;
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoLichSuKiemTraSave(element: CompanyInfoLichSuKiemTra) {
    this.CompanyInfoService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoLichSuKiemTraService.BaseParameter.ParentID;
    this.CompanyInfoLichSuKiemTraService.FormData = element;
    this.CompanyInfoLichSuKiemTraService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoLichSuKiemTraSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoLichSuKiemTraDelete(element: CompanyInfoLichSuKiemTra) {
    if (confirm(environment.DeleteConfirm)) {
      this.CompanyInfoService.IsShowLoading = true;
      this.CompanyInfoLichSuKiemTraService.BaseParameter.ID = element.ID;
      this.CompanyInfoLichSuKiemTraService.RemoveAsync().subscribe(
        res => {
          this.CompanyInfoLichSuKiemTraSearch();
          this.NotificationService.warn(environment.DeleteSuccess);
          this.CompanyInfoService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.DeleteNotSuccess);
          this.CompanyInfoService.IsShowLoading = false;
        }
      );
    }
  }
}
