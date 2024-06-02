import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { AgencyUser } from 'src/app/shared/AgencyUser.model';
import { AgencyUserService } from 'src/app/shared/AgencyUser.service';

@Component({
  selector: 'app-agency-user',
  templateUrl: './agency-user.component.html',
  styleUrls: ['./agency-user.component.css']
})
export class AgencyUserComponent implements OnInit {

  @ViewChild('AgencyUserSort') AgencyUserSort: MatSort;
  @ViewChild('AgencyUserPaginator') AgencyUserPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public AgencyUserService: AgencyUserService,
  ) { }

  ngOnInit(): void {
  }

  AgencyUserSearch() {
    this.AgencyUserService.SearchAll(this.AgencyUserSort, this.AgencyUserPaginator);
  }
  AgencyUserSave(element: AgencyUser) {
    this.AgencyUserService.FormData = element;
    this.NotificationService.warn(this.AgencyUserService.ComponentSaveAll(this.AgencyUserSort, this.AgencyUserPaginator));
  }
  AgencyUserDelete(element: AgencyUser) {
    this.AgencyUserService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.AgencyUserService.ComponentDeleteAll(this.AgencyUserSort, this.AgencyUserPaginator));
  }
}
