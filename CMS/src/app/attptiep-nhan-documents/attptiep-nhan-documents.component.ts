import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPTiepNhanDocuments } from 'src/app/shared/ATTPTiepNhanDocuments.model';
import { ATTPTiepNhanDocumentsService } from 'src/app/shared/ATTPTiepNhanDocuments.service';
@Component({
  selector: 'app-attptiep-nhan-documents',
  templateUrl: './attptiep-nhan-documents.component.html',
  styleUrls: ['./attptiep-nhan-documents.component.css']
})
export class ATTPTiepNhanDocumentsComponent implements OnInit {

  @ViewChild('ATTPTiepNhanDocumentsSort') ATTPTiepNhanDocumentsSort: MatSort;
  @ViewChild('ATTPTiepNhanDocumentsPaginator') ATTPTiepNhanDocumentsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPTiepNhanDocumentsService: ATTPTiepNhanDocumentsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPTiepNhanDocumentsSearch() {
    this.ATTPTiepNhanDocumentsService.SearchAll(this.ATTPTiepNhanDocumentsSort, this.ATTPTiepNhanDocumentsPaginator);
  }
  ATTPTiepNhanDocumentsSave(element: ATTPTiepNhanDocuments) {
    this.ATTPTiepNhanDocumentsService.FormData = element;
    this.NotificationService.warn(this.ATTPTiepNhanDocumentsService.ComponentSaveAll(this.ATTPTiepNhanDocumentsSort, this.ATTPTiepNhanDocumentsPaginator));
  }
  ATTPTiepNhanDocumentsDelete(element: ATTPTiepNhanDocuments) {
    this.ATTPTiepNhanDocumentsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPTiepNhanDocumentsService.ComponentDeleteAll(this.ATTPTiepNhanDocumentsSort, this.ATTPTiepNhanDocumentsPaginator));
  }


}
