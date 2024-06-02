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

import { CompanyInfoDonViDongGoiDocuments } from 'src/app/shared/CompanyInfoDonViDongGoiDocuments.model';
import { CompanyInfoDonViDongGoiDocumentsService } from 'src/app/shared/CompanyInfoDonViDongGoiDocuments.service';

@Component({
  selector: 'app-company-info-don-vi-dong-goi-documents-detail',
  templateUrl: './company-info-don-vi-dong-goi-documents-detail.component.html',
  styleUrls: ['./company-info-don-vi-dong-goi-documents-detail.component.css']
})
export class CompanyInfoDonViDongGoiDocumentsDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyInfoDonViDongGoiDocumentsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public CompanyInfoDonViDongGoiDocumentsService: CompanyInfoDonViDongGoiDocumentsService,
  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.CompanyInfoDonViDongGoiDocumentsSearch();
    this.ThanhVienSearch();
  }


  CompanyInfoDonViDongGoiDocumentsSearch() {
    this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.FormData = (res as CompanyInfoDonViDongGoiDocuments);
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      }
    );
  }

  ThanhVienSearch() {
    if (this.ThanhVienService.List) {
      if (this.ThanhVienService.List.length == 0) {
        this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
        this.ThanhVienService.BaseParameter.Active = true;
        this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
      }
    }
  }

  CompanyInfoDonViDongGoiDocumentsSave() {
    this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.FormData = (res as CompanyInfoDonViDongGoiDocuments);
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiDocumentsCopy() {
    this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.FormData.ID=environment.InitializationNumber;
    this.CompanyInfoDonViDongGoiDocumentsService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.FormData = (res as CompanyInfoDonViDongGoiDocuments);
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiDocumentsService.IsShowLoading = false;
      }
    );
  }

  OpenWindowByURL() {
    this.NotificationService.OpenWindowByURL(this.CompanyInfoDonViDongGoiDocumentsService.FormData.FileName);
  }

  Close() {
    this.dialogRef.close();
  }

}

