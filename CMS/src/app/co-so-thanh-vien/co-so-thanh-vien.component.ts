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


import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';


@Component({
  selector: 'app-co-so-thanh-vien',
  templateUrl: './co-so-thanh-vien.component.html',
  styleUrls: ['./co-so-thanh-vien.component.css']
})
export class CoSoThanhVienComponent implements OnInit {

  @ViewChild('ThanhVienSort') ThanhVienSort: MatSort;
  @ViewChild('ThanhVienPaginator') ThanhVienPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public DanhMucThanhVienService: DanhMucThanhVienService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.DanhMucThanhVienSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
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
    this.ThanhVienService.BaseParameter.CompanyInfoID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
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
    element.CompanyInfoID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
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