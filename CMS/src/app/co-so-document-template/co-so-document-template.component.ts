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

@Component({
  selector: 'app-co-so-document-template',
  templateUrl: './co-so-document-template.component.html',
  styleUrls: ['./co-so-document-template.component.css']
})
export class CoSoDocumentTemplateComponent implements OnInit {

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
    this.DocumentTemplateSearch();
  }

  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }

  DocumentTemplateSearch() {
    this.DocumentTemplateService.SearchAllNotEmpty(this.DocumentTemplateSort, this.DocumentTemplatePaginator);
  }
}