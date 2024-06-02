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

import { CompanyInfoVungTrongDocuments } from 'src/app/shared/CompanyInfoVungTrongDocuments.model';
import { CompanyInfoVungTrongDocumentsService } from 'src/app/shared/CompanyInfoVungTrongDocuments.service';

@Component({
  selector: 'app-company-info-vung-trong-documents-detail',
  templateUrl: './company-info-vung-trong-documents-detail.component.html',
  styleUrls: ['./company-info-vung-trong-documents-detail.component.css']
})
export class CompanyInfoVungTrongDocumentsDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyInfoVungTrongDocumentsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public CompanyInfoVungTrongDocumentsService: CompanyInfoVungTrongDocumentsService,
  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.CompanyInfoVungTrongDocumentsSearch();
    this.ThanhVienSearch();
  }


  CompanyInfoVungTrongDocumentsSearch() {
    this.CompanyInfoVungTrongDocumentsService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.FormData = (res as CompanyInfoVungTrongDocuments);
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
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

  CompanyInfoVungTrongDocumentsSave() {
    this.CompanyInfoVungTrongDocumentsService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.FormData = (res as CompanyInfoVungTrongDocuments);
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongDocumentsCopy() {
    this.CompanyInfoVungTrongDocumentsService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.FormData.ID=environment.InitializationNumber;
    this.CompanyInfoVungTrongDocumentsService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.FormData = (res as CompanyInfoVungTrongDocuments);
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongDocumentsService.IsShowLoading = false;
      }
    );
  }

  OpenWindowByURL() {
    this.NotificationService.OpenWindowByURL(this.CompanyInfoVungTrongDocumentsService.FormData.FileName);
  }

  Close() {
    this.dialogRef.close();
  }

}

