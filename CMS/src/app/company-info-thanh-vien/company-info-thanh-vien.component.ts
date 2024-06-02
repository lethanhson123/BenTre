import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-company-info-thanh-vien',
  templateUrl: './company-info-thanh-vien.component.html',
  styleUrls: ['./company-info-thanh-vien.component.css']
})
export class CompanyInfoThanhVienComponent implements OnInit {

  @ViewChild('ThanhVienSort') ThanhVienSort: MatSort;
  @ViewChild('ThanhVienPaginator') ThanhVienPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public DanhMucThanhVienService: DanhMucThanhVienService,

    public CompanyInfoService: CompanyInfoService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.DanhMucThanhVienSearch();
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  DanhMucThanhVienSearch() {
    this.ThanhVienService.IsShowLoading = true;
    this.DanhMucThanhVienService.GetByCompanyInfoThanhVienToListAsync().subscribe(
      res => {
        this.DanhMucThanhVienService.List = (res as ThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }

  ThanhVienSearch() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienService.GetByCompanyInfoIDAndEmptyToListAsync().subscribe(
      res => {
        this.ThanhVienService.List = (res as ThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ThanhVienService.DataSource = new MatTableDataSource(this.ThanhVienService.List);
        this.ThanhVienService.DataSource.sort = this.ThanhVienSort;
        this.ThanhVienService.DataSource.paginator = this.ThanhVienPaginator;
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }
  ThanhVienSave(element: ThanhVien) {
    this.ThanhVienService.IsShowLoading = true;
    element.ParentID = this.ThanhVienService.BaseParameter.CompanyInfoID;
    this.ThanhVienService.FormData = element;
    this.ThanhVienService.SaveAsync().subscribe(
      res => {
        this.ThanhVienSearch();
        this.ThanhVienService.IsShowLoading = false;
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
        this.NotificationService.warn(environment.SaveNotSuccess);
      }
    );
  }
  ThanhVienDelete(element: ThanhVien) {
    if (confirm(environment.DeleteConfirm)) {
      this.ThanhVienService.IsShowLoading = true;
      this.ThanhVienService.BaseParameter.ID = element.ID;
      this.ThanhVienService.RemoveAsync().subscribe(
        res => {
          this.ThanhVienSearch();
          this.ThanhVienService.IsShowLoading = false;
          this.NotificationService.warn(environment.DeleteSuccess);
        },
        err => {
          this.ThanhVienService.IsShowLoading = false;
          this.NotificationService.warn(environment.DeleteNotSuccess);
        }
      );
    }
  }
}
