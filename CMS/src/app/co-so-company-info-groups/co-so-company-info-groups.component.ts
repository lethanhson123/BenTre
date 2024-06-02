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


import { CompanyInfoGroups } from 'src/app/shared/CompanyInfoGroups.model';
import { CompanyInfoGroupsService } from 'src/app/shared/CompanyInfoGroups.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-company-info-groups',
  templateUrl: './co-so-company-info-groups.component.html',
  styleUrls: ['./co-so-company-info-groups.component.css']
})
export class CoSoCompanyInfoGroupsComponent implements OnInit {

  @ViewChild('CompanyInfoGroupsSort') CompanyInfoGroupsSort: MatSort;
  @ViewChild('CompanyInfoGroupsPaginator') CompanyInfoGroupsPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public CompanyGroupService: CompanyGroupService,

    public CompanyInfoGroupsService: CompanyInfoGroupsService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyGroupSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }

  CompanyGroupSearch() {
    this.CompanyGroupService.ComponentGetAllToListAsync();
  }

  CompanyInfoGroupsSearch() {
    this.CompanyInfoGroupsService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoGroupsService.SearchByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator);
  }
  CompanyInfoGroupsSave(element: CompanyInfoGroups) {
    element.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoGroupsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentSaveByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }
  CompanyInfoGroupsDelete(element: CompanyInfoGroups) {
    this.CompanyInfoGroupsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentDeleteByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }
}