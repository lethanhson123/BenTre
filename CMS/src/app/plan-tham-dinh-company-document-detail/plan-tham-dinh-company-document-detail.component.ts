import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';

@Component({
  selector: 'app-plan-tham-dinh-company-document-detail',
  templateUrl: './plan-tham-dinh-company-document-detail.component.html',
  styleUrls: ['./plan-tham-dinh-company-document-detail.component.css']
})
export class PlanThamDinhCompanyDocumentDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompanyDocumentDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,
    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.ThanhVienSearch();
    this.CompanyInfoSearch();
  }

  DateNgayGhiNhan(value) {
    this.PlanThamDinhCompanyDocumentService.FormData.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.PlanThamDinhCompanyDocumentService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = environment.InitializationNumber;
    if (this.PlanThamDinhCompanyDocumentService.FormData.ParentID) {
      if (this.PlanThamDinhCompanyDocumentService.FormData.ParentID > 0) {
        this.CompanyInfoService.BaseParameter.ID = this.PlanThamDinhCompanyDocumentService.FormData.ParentID;
      }
    }


    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = (res as CompanyInfo);
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      }
    );
  }

  ThanhVienSearch() {
    if (this.ThanhVienService.List) {
      if (this.ThanhVienService.List.length == 0) {
        this.ThanhVienService.BaseParameter.StateAgencyID = this.PlanThamDinhService.FormData.StateAgencyID;
        if ((this.ThanhVienService.BaseParameter.StateAgencyID == null) || (this.ThanhVienService.BaseParameter.StateAgencyID == 0)) {
          this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
        }
        this.ThanhVienService.BaseParameter.Active = true;
        this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
      }
    }
  }

  PlanThamDinhCompanyDocumentSave() {
    this.PlanThamDinhCompanyDocumentService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = (res as PlanThamDinhCompanyDocument);
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentCopy() {
    this.PlanThamDinhCompanyDocumentService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.FormData.ID = environment.InitializationNumber;
    this.PlanThamDinhCompanyDocumentService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = (res as PlanThamDinhCompanyDocument);
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompanyDocumentService.IsShowLoading = false;
      }
    );
  }

  OpenWindowByURL() {
    this.NotificationService.OpenWindowByURL(this.PlanThamDinhCompanyDocumentService.FormData.FileName);
  }

  Close() {
    this.dialogRef.close();
  }

}
