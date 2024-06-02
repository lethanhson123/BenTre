import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { CompanyInfoStateAgency } from 'src/app/shared/CompanyInfoStateAgency.model';
import { CompanyInfoStateAgencyService } from 'src/app/shared/CompanyInfoStateAgency.service';

@Component({
  selector: 'app-company-info-state-agency',
  templateUrl: './company-info-state-agency.component.html',
  styleUrls: ['./company-info-state-agency.component.css']
})
export class CompanyInfoStateAgencyComponent implements OnInit {

  @ViewChild('CompanyInfoStateAgencySort') CompanyInfoStateAgencySort: MatSort;
  @ViewChild('CompanyInfoStateAgencyPaginator') CompanyInfoStateAgencyPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public StateAgencyService: StateAgencyService,

    public CompanyInfoService: CompanyInfoService,

    public CompanyInfoStateAgencyService: CompanyInfoStateAgencyService,
  ) {

  }

  ngOnInit(): void {
    this.StateAgencySearch();
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }

  CompanyInfoStateAgencySearch() {
    this.CompanyInfoStateAgencyService.SearchByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator);
  }
  CompanyInfoStateAgencySave(element: CompanyInfoStateAgency) {
    element.ParentID = this.CompanyInfoStateAgencyService.BaseParameter.ParentID;
    this.CompanyInfoStateAgencyService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentSaveByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }
  CompanyInfoStateAgencyDelete(element: CompanyInfoStateAgency) {
    this.CompanyInfoStateAgencyService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentDeleteByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }
}
