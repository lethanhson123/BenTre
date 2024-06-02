import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyFields } from 'src/app/shared/CompanyFields.model';
import { CompanyFieldsService } from 'src/app/shared/CompanyFields.service';


import { CompanyInfoFields } from 'src/app/shared/CompanyInfoFields.model';
import { CompanyInfoFieldsService } from 'src/app/shared/CompanyInfoFields.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
@Component({
  selector: 'app-co-so-company-info-fields',
  templateUrl: './co-so-company-info-fields.component.html',
  styleUrls: ['./co-so-company-info-fields.component.css']
})
export class CoSoCompanyInfoFieldsComponent implements OnInit {

  @ViewChild('CompanyInfoFieldsSort') CompanyInfoFieldsSort: MatSort;
  @ViewChild('CompanyInfoFieldsPaginator') CompanyInfoFieldsPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public CompanyFieldsService: CompanyFieldsService,

    public CompanyInfoFieldsService: CompanyInfoFieldsService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyFieldsSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }

  CompanyFieldsSearch() {
    this.CompanyFieldsService.ComponentGetAllToListAsync();
  }

  CompanyInfoFieldsSearch() {
    this.CompanyInfoFieldsService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoFieldsService.SearchByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator);
  }
  CompanyInfoFieldsSave(element: CompanyInfoFields) {
    element.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoFieldsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentSaveByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
  }
  CompanyInfoFieldsDelete(element: CompanyInfoFields) {
    this.CompanyInfoFieldsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentDeleteByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
  }
}