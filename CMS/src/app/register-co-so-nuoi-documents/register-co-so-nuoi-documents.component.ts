import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { RegisterCoSoNuoiDocuments } from 'src/app/shared/RegisterCoSoNuoiDocuments.model';
import { RegisterCoSoNuoiDocumentsService } from 'src/app/shared/RegisterCoSoNuoiDocuments.service';
@Component({
  selector: 'app-register-co-so-nuoi-documents',
  templateUrl: './register-co-so-nuoi-documents.component.html',
  styleUrls: ['./register-co-so-nuoi-documents.component.css']
})
export class RegisterCoSoNuoiDocumentsComponent implements OnInit {

  @ViewChild('RegisterCoSoNuoiDocumentsSort') RegisterCoSoNuoiDocumentsSort: MatSort;
  @ViewChild('RegisterCoSoNuoiDocumentsPaginator') RegisterCoSoNuoiDocumentsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public RegisterCoSoNuoiDocumentsService: RegisterCoSoNuoiDocumentsService,
  ) { }

  ngOnInit(): void {
  }

  RegisterCoSoNuoiDocumentsSearch() {
    this.RegisterCoSoNuoiDocumentsService.SearchAll(this.RegisterCoSoNuoiDocumentsSort, this.RegisterCoSoNuoiDocumentsPaginator);
  }
  RegisterCoSoNuoiDocumentsSave(element: RegisterCoSoNuoiDocuments) {
    this.RegisterCoSoNuoiDocumentsService.FormData = element;
    this.NotificationService.warn(this.RegisterCoSoNuoiDocumentsService.ComponentSaveAll(this.RegisterCoSoNuoiDocumentsSort, this.RegisterCoSoNuoiDocumentsPaginator));
  }
  RegisterCoSoNuoiDocumentsDelete(element: RegisterCoSoNuoiDocuments) {
    this.RegisterCoSoNuoiDocumentsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.RegisterCoSoNuoiDocumentsService.ComponentDeleteAll(this.RegisterCoSoNuoiDocumentsSort, this.RegisterCoSoNuoiDocumentsPaginator));
  }
}
