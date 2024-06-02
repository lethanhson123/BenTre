import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { CoSoNuoiDocument } from 'src/app/shared/CoSoNuoiDocument.model';
import { CoSoNuoiDocumentService } from 'src/app/shared/CoSoNuoiDocument.service';
@Component({
  selector: 'app-co-so-nuoi-document',
  templateUrl: './co-so-nuoi-document.component.html',
  styleUrls: ['./co-so-nuoi-document.component.css']
})
export class CoSoNuoiDocumentComponent implements OnInit {

  @ViewChild('CoSoNuoiDocumentSort') CoSoNuoiDocumentSort: MatSort;
  @ViewChild('CoSoNuoiDocumentPaginator') CoSoNuoiDocumentPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CoSoNuoiDocumentService: CoSoNuoiDocumentService,
  ) { }

  ngOnInit(): void {
  }

  CoSoNuoiDocumentSearch() {
    this.CoSoNuoiDocumentService.SearchAll(this.CoSoNuoiDocumentSort, this.CoSoNuoiDocumentPaginator);
  }
  CoSoNuoiDocumentSave(element: CoSoNuoiDocument) {
    this.CoSoNuoiDocumentService.FormData = element;
    this.NotificationService.warn(this.CoSoNuoiDocumentService.ComponentSaveAll(this.CoSoNuoiDocumentSort, this.CoSoNuoiDocumentPaginator));
  }
  CoSoNuoiDocumentDelete(element: CoSoNuoiDocument) {
    this.CoSoNuoiDocumentService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CoSoNuoiDocumentService.ComponentDeleteAll(this.CoSoNuoiDocumentSort, this.CoSoNuoiDocumentPaginator));
  }


}
