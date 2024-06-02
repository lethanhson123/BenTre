import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyGroup } from 'src/app/shared/CompanyGroup.model';
import { CompanyGroupService } from 'src/app/shared/CompanyGroup.service';

@Component({
  selector: 'app-company-group',
  templateUrl: './company-group.component.html',
  styleUrls: ['./company-group.component.css']
})
export class CompanyGroupComponent implements OnInit {

  @ViewChild('CompanyGroupSort') CompanyGroupSort: MatSort;
  @ViewChild('CompanyGroupPaginator') CompanyGroupPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyGroupService: CompanyGroupService,
  ) { }

  ngOnInit(): void {    
  }

  CompanyGroupSearch() {
    this.CompanyGroupService.SearchAll(this.CompanyGroupSort, this.CompanyGroupPaginator);
  }
  CompanyGroupSave(element: CompanyGroup) {
    this.CompanyGroupService.FormData = element;
    this.NotificationService.warn(this.CompanyGroupService.ComponentSaveAll(this.CompanyGroupSort, this.CompanyGroupPaginator));
  }
  CompanyGroupDelete(element: CompanyGroup) {
    this.CompanyGroupService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyGroupService.ComponentDeleteAll(this.CompanyGroupSort, this.CompanyGroupPaginator));
  }
}