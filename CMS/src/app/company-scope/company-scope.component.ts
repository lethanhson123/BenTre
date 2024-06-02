import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyScope } from 'src/app/shared/CompanyScope.model';
import { CompanyScopeService } from 'src/app/shared/CompanyScope.service';

@Component({
  selector: 'app-company-scope',
  templateUrl: './company-scope.component.html',
  styleUrls: ['./company-scope.component.css']
})
export class CompanyScopeComponent implements OnInit {

  @ViewChild('CompanyScopeSort') CompanyScopeSort: MatSort;
  @ViewChild('CompanyScopePaginator') CompanyScopePaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyScopeService: CompanyScopeService,
  ) { }

  ngOnInit(): void {    
  }

  CompanyScopeSearch() {
    this.CompanyScopeService.SearchAll(this.CompanyScopeSort, this.CompanyScopePaginator);
  }
  CompanyScopeSave(element: CompanyScope) {
    this.CompanyScopeService.FormData = element;
    this.NotificationService.warn(this.CompanyScopeService.ComponentSaveAll(this.CompanyScopeSort, this.CompanyScopePaginator));
  }
  CompanyScopeDelete(element: CompanyScope) {
    this.CompanyScopeService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyScopeService.ComponentDeleteAll(this.CompanyScopeSort, this.CompanyScopePaginator));
  }
}