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

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { CompanyInfoFields } from 'src/app/shared/CompanyInfoFields.model';
import { CompanyInfoFieldsService } from 'src/app/shared/CompanyInfoFields.service';

@Component({
  selector: 'app-company-info-fields',
  templateUrl: './company-info-fields.component.html',
  styleUrls: ['./company-info-fields.component.css']
})
export class CompanyInfoFieldsComponent implements OnInit {

  @ViewChild('CompanyInfoFieldsSort') CompanyInfoFieldsSort: MatSort;
  @ViewChild('CompanyInfoFieldsPaginator') CompanyInfoFieldsPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public CompanyFieldsService: CompanyFieldsService,

    public CompanyInfoService: CompanyInfoService,

    public CompanyInfoFieldsService: CompanyInfoFieldsService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyFieldsSearch();
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  CompanyFieldsSearch() {
    this.CompanyFieldsService.ComponentGetAllToListAsync();
  }

  CompanyInfoFieldsSearch() {
    this.CompanyInfoFieldsService.SearchByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator);
  }
  CompanyInfoFieldsSave(element: CompanyInfoFields) {
    element.ParentID = this.CompanyInfoFieldsService.BaseParameter.ParentID;
    this.CompanyInfoFieldsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentSaveByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
  }
  CompanyInfoFieldsDelete(element: CompanyInfoFields) {
    this.CompanyInfoFieldsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentDeleteByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
  }
}
