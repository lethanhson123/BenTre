import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { AgencyMenu } from 'src/app/shared/AgencyMenu.model';
import { AgencyMenuService } from 'src/app/shared/AgencyMenu.service';

@Component({
  selector: 'app-agency-menu',
  templateUrl: './agency-menu.component.html',
  styleUrls: ['./agency-menu.component.css']
})
export class AgencyMenuComponent implements OnInit {

  @ViewChild('AgencyMenuSort') AgencyMenuSort: MatSort;
  @ViewChild('AgencyMenuPaginator') AgencyMenuPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public AgencyMenuService: AgencyMenuService,
  ) { }

  ngOnInit(): void {    
  }

  AgencyMenuSearch() {
    this.AgencyMenuService.SearchAll(this.AgencyMenuSort, this.AgencyMenuPaginator);
  }
  AgencyMenuSave(element: AgencyMenu) {
    this.AgencyMenuService.FormData = element;
    this.NotificationService.warn(this.AgencyMenuService.ComponentSaveAll(this.AgencyMenuSort, this.AgencyMenuPaginator));
  }
  AgencyMenuDelete(element: AgencyMenu) {
    this.AgencyMenuService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.AgencyMenuService.ComponentDeleteAll(this.AgencyMenuSort, this.AgencyMenuPaginator));
  }
}