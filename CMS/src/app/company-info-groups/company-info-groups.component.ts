import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyGroup } from 'src/app/shared/CompanyGroup.model';
import { CompanyGroupService } from 'src/app/shared/CompanyGroup.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { CompanyInfoGroups } from 'src/app/shared/CompanyInfoGroups.model';
import { CompanyInfoGroupsService } from 'src/app/shared/CompanyInfoGroups.service';

@Component({
  selector: 'app-company-info-groups',
  templateUrl: './company-info-groups.component.html',
  styleUrls: ['./company-info-groups.component.css']
})
export class CompanyInfoGroupsComponent implements OnInit {

  @ViewChild('CompanyInfoGroupsSort') CompanyInfoGroupsSort: MatSort;
  @ViewChild('CompanyInfoGroupsPaginator') CompanyInfoGroupsPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public CompanyGroupService: CompanyGroupService,

    public CompanyInfoService: CompanyInfoService,

    public CompanyInfoGroupsService: CompanyInfoGroupsService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyGroupSearch();
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  CompanyGroupSearch() {
    this.CompanyGroupService.ComponentGetAllToListAsync();
  }

  CompanyInfoGroupsSearch() {
    this.CompanyInfoGroupsService.SearchByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator);
  }
  CompanyInfoGroupsSave(element: CompanyInfoGroups) {
    element.ParentID = this.CompanyInfoGroupsService.BaseParameter.ParentID;
    this.CompanyInfoGroupsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentSaveByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }
  CompanyInfoGroupsDelete(element: CompanyInfoGroups) {
    this.CompanyInfoGroupsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentDeleteByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }
}
