import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { AgencyDepartmentMenus } from 'src/app/shared/AgencyDepartmentMenus.model';
import { AgencyDepartmentMenusService } from 'src/app/shared/AgencyDepartmentMenus.service';

@Component({
  selector: 'app-agency-department-menus',
  templateUrl: './agency-department-menus.component.html',
  styleUrls: ['./agency-department-menus.component.css']
})
export class AgencyDepartmentMenusComponent implements OnInit {

  @ViewChild('AgencyDepartmentMenusSort') AgencyDepartmentMenusSort: MatSort;
  @ViewChild('AgencyDepartmentMenusPaginator') AgencyDepartmentMenusPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public AgencyDepartmentMenusService: AgencyDepartmentMenusService,
  ) { }

  ngOnInit(): void {
  }

  AgencyDepartmentMenusSearch() {
    this.AgencyDepartmentMenusService.SearchAll(this.AgencyDepartmentMenusSort, this.AgencyDepartmentMenusPaginator);
  }
  AgencyDepartmentMenusSave(element: AgencyDepartmentMenus) {
    this.AgencyDepartmentMenusService.FormData = element;
    this.NotificationService.warn(this.AgencyDepartmentMenusService.ComponentSaveAll(this.AgencyDepartmentMenusSort, this.AgencyDepartmentMenusPaginator));
  }
  AgencyDepartmentMenusDelete(element: AgencyDepartmentMenus) {
    this.AgencyDepartmentMenusService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.AgencyDepartmentMenusService.ComponentDeleteAll(this.AgencyDepartmentMenusSort, this.AgencyDepartmentMenusPaginator));
  }


}
