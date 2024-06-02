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


import { CompanyInfoStateAgency } from 'src/app/shared/CompanyInfoStateAgency.model';
import { CompanyInfoStateAgencyService } from 'src/app/shared/CompanyInfoStateAgency.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-company-info-state-agency',
  templateUrl: './co-so-company-info-state-agency.component.html',
  styleUrls: ['./co-so-company-info-state-agency.component.css']
})
export class CoSoCompanyInfoStateAgencyComponent implements OnInit {

  @ViewChild('CompanyInfoStateAgencySort') CompanyInfoStateAgencySort: MatSort;
  @ViewChild('CompanyInfoStateAgencyPaginator') CompanyInfoStateAgencyPaginator: MatPaginator;


  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public StateAgencyService: StateAgencyService,

    public CompanyInfoStateAgencyService: CompanyInfoStateAgencyService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.StateAgencySearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }

  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }

  CompanyInfoStateAgencySearch() {
    this.CompanyInfoStateAgencyService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoStateAgencyService.SearchByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator);
  }
  CompanyInfoStateAgencySave(element: CompanyInfoStateAgency) {
    element.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoStateAgencyService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentSaveByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }
  CompanyInfoStateAgencyDelete(element: CompanyInfoStateAgency) {
    this.CompanyInfoStateAgencyService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentDeleteByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }
}