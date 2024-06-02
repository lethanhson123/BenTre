import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPInfoDocuments } from 'src/app/shared/ATTPInfoDocuments.model';
import { ATTPInfoDocumentsService } from 'src/app/shared/ATTPInfoDocuments.service';
@Component({
  selector: 'app-attpinfo-documents',
  templateUrl: './attpinfo-documents.component.html',
  styleUrls: ['./attpinfo-documents.component.css']
})
export class ATTPInfoDocumentsComponent implements OnInit {

  @ViewChild('ATTPInfoDocumentsSort') ATTPInfoDocumentsSort: MatSort;
  @ViewChild('ATTPInfoDocumentsPaginator') ATTPInfoDocumentsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoDocumentsService: ATTPInfoDocumentsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPInfoDocumentsSearch() {
    this.ATTPInfoDocumentsService.SearchAll(this.ATTPInfoDocumentsSort, this.ATTPInfoDocumentsPaginator);
  }
  ATTPInfoDocumentsSave(element: ATTPInfoDocuments) {
    this.ATTPInfoDocumentsService.FormData = element;
    this.NotificationService.warn(this.ATTPInfoDocumentsService.ComponentSaveAll(this.ATTPInfoDocumentsSort, this.ATTPInfoDocumentsPaginator));
  }
  ATTPInfoDocumentsDelete(element: ATTPInfoDocuments) {
    this.ATTPInfoDocumentsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPInfoDocumentsService.ComponentDeleteAll(this.ATTPInfoDocumentsSort, this.ATTPInfoDocumentsPaginator));
  }


}
