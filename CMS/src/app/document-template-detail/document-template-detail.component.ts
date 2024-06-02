import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';
import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';

import { DocumentTemplate } from 'src/app/shared/DocumentTemplate.model';
import { DocumentTemplateService } from 'src/app/shared/DocumentTemplate.service';

@Component({
  selector: 'app-document-template-detail',
  templateUrl: './document-template-detail.component.html',
  styleUrls: ['./document-template-detail.component.css']
})
export class DocumentTemplateDetailComponent implements OnInit {


  isChangeFileName: boolean = false;

  FormData!: DocumentTemplate;

  constructor(
    public dialogRef: MatDialogRef<DocumentTemplateDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,
    public DanhMucProductGroupService: DanhMucProductGroupService,
    public DocumentTemplateService: DocumentTemplateService,
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
    this.DanhMucProductGroupSearch();
  }
  DanhMucProductGroupSearch() {
    this.DanhMucProductGroupService.ComponentGetAllToListAsync();
  }
  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }

  
  ChangeFileName(files: FileList) {
    if (files) {
      this.isChangeFileName = true;
      this.DocumentTemplateService.FileToUpload = files;      
    }
  }

  DocumentTemplateSave() {
    this.DocumentTemplateService.IsShowLoading = true;
    if (this.isChangeFileName == false) {
      this.DocumentTemplateService.FileToUpload = null;
    }
    this.DocumentTemplateService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.DocumentTemplateService.FormData = (res as DocumentTemplate);
        this.NotificationService.warn(environment.SaveSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      }
    );
    this.isChangeFileName = false;
  }
  DocumentTemplateCopy() {
    this.DocumentTemplateService.IsShowLoading = true;
    if (this.isChangeFileName == false) {
      this.DocumentTemplateService.FileToUpload = null;
    }
    this.DocumentTemplateService.FormData.ID = environment.InitializationNumber;
    this.DocumentTemplateService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.DocumentTemplateService.FormData = (res as DocumentTemplate);
        this.NotificationService.warn(environment.SaveSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      }
    );
    this.isChangeFileName = false;
  }

  OpenWindowByURL() {
    this.NotificationService.OpenWindowByURL(this.DocumentTemplateService.FormData.Code);
  }

  Close() {
    this.dialogRef.close();
  }

}