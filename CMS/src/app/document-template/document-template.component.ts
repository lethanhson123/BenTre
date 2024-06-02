import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';

import { DocumentTemplate } from 'src/app/shared/DocumentTemplate.model';
import { DocumentTemplateService } from 'src/app/shared/DocumentTemplate.service';
import { DocumentTemplateDetailComponent } from '../document-template-detail/document-template-detail.component';


@Component({
  selector: 'app-document-template',
  templateUrl: './document-template.component.html',
  styleUrls: ['./document-template.component.css']
})
export class DocumentTemplateComponent implements OnInit {

  @ViewChild('DocumentTemplateSort') DocumentTemplateSort: MatSort;
  @ViewChild('DocumentTemplatePaginator') DocumentTemplatePaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,

    public DocumentTemplateService: DocumentTemplateService,
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
  }

  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }

  DocumentTemplateSearch() {
    this.DocumentTemplateService.SearchByParentIDNotEmpty(this.DocumentTemplateSort, this.DocumentTemplatePaginator);
  }
  DocumentTemplateSave(element: DocumentTemplate) {
    this.DocumentTemplateService.IsShowLoading = true;
    this.DocumentTemplateService.FormData = element;
    this.DocumentTemplateService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.DocumentTemplateService.FileToUpload = null;
        this.DocumentTemplateSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DocumentTemplateService.IsShowLoading = false;
      }
    );
  }
  DocumentTemplateDelete(element: DocumentTemplate) {
    this.DocumentTemplateService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DocumentTemplateService.ComponentDeleteByParentIDNotEmpty(this.DocumentTemplateSort, this.DocumentTemplatePaginator));
  }
  DocumentTemplateCopy(element: DocumentTemplate) {
    this.DocumentTemplateService.IsShowLoading = true;
    this.DocumentTemplateService.FormData = element;
    this.DocumentTemplateService.FormData.ID = environment.InitializationNumber;
    this.DocumentTemplateService.SaveAsync().subscribe(
      res => {
        this.DocumentTemplateSearch();
        this.DocumentTemplateService.IsShowLoading = false;
      },
      err => {
        this.DocumentTemplateService.IsShowLoading = false;
      }
    );
  }

  ChangeFileName(element: DocumentTemplate, files: FileList) {
    if (files) {
      this.DocumentTemplateService.FileToUpload = files;
    }
  }
  DocumentTemplateAdd(ID: number) {
    this.DocumentTemplateService.BaseParameter.ID = ID;
    this.DocumentTemplateService.GetByIDAsync().subscribe(
      res => {
        this.DocumentTemplateService.FormData = res as DocumentTemplate;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DocumentTemplateDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DocumentTemplateSearch();
        });
      },
      err => {
      }
    );
  }
}
