import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyUser } from 'src/app/shared/CompanyUser.model';
import { CompanyUserService } from 'src/app/shared/CompanyUser.service';

@Component({
  selector: 'app-company-info-company-user',
  templateUrl: './company-info-company-user.component.html',
  styleUrls: ['./company-info-company-user.component.css']
})
export class CompanyInfoCompanyUserComponent implements OnInit {

  @ViewChild('CompanyUserSort') CompanyUserSort: MatSort;
  @ViewChild('CompanyUserPaginator') CompanyUserPaginator: MatPaginator;

  constructor(
    public NotificationService: NotificationService,


    public CompanyInfoService: CompanyInfoService,
    public CompanyUserService: CompanyUserService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyInfoSearch();
  }



  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  CompanyUserSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyUserService.GetByParentIDAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyUserService.List = (res as CompanyUser[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyUserService.DataSource = new MatTableDataSource(this.CompanyUserService.List);
        this.CompanyUserService.DataSource.sort = this.CompanyUserSort;
        this.CompanyUserService.DataSource.paginator = this.CompanyUserPaginator;
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyUserSave(element: CompanyUser) {
    this.CompanyInfoService.IsShowLoading = true;
    element.ParentID = this.CompanyUserService.BaseParameter.ParentID;
    this.CompanyUserService.FormData = element;
    this.CompanyUserService.SaveAsync().subscribe(
      res => {
        this.CompanyUserSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyUserDelete(element: CompanyUser) {
    if (confirm(environment.DeleteConfirm)) {
      this.CompanyInfoService.IsShowLoading = true;
      this.CompanyUserService.BaseParameter.ID = element.ID;
      this.CompanyUserService.RemoveAsync().subscribe(
        res => {
          this.CompanyUserSearch();
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
