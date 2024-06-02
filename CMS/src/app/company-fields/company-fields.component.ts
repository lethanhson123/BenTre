import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyFields } from 'src/app/shared/CompanyFields.model';
import { CompanyFieldsService } from 'src/app/shared/CompanyFields.service';

@Component({
  selector: 'app-company-fields',
  templateUrl: './company-fields.component.html',
  styleUrls: ['./company-fields.component.css']
})
export class CompanyFieldsComponent implements OnInit {

  @ViewChild('CompanyFieldsSort') CompanyFieldsSort: MatSort;
  @ViewChild('CompanyFieldsPaginator') CompanyFieldsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyFieldsService: CompanyFieldsService,
  ) { }

  ngOnInit(): void {    
  }

  CompanyFieldsSearch() {
    this.CompanyFieldsService.SearchAll(this.CompanyFieldsSort, this.CompanyFieldsPaginator);
  }
  CompanyFieldsSave(element: CompanyFields) {
    this.CompanyFieldsService.FormData = element;
    this.NotificationService.warn(this.CompanyFieldsService.ComponentSaveAll(this.CompanyFieldsSort, this.CompanyFieldsPaginator));
  }
  CompanyFieldsDelete(element: CompanyFields) {
    this.CompanyFieldsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyFieldsService.ComponentDeleteAll(this.CompanyFieldsSort, this.CompanyFieldsPaginator));
  }
}