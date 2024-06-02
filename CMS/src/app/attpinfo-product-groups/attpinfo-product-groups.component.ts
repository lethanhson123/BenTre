import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ATTPInfoProductGroups } from 'src/app/shared/ATTPInfoProductGroups.model';
import { ATTPInfoProductGroupsService } from 'src/app/shared/ATTPInfoProductGroups.service';

@Component({
  selector: 'app-attpinfo-product-groups',
  templateUrl: './attpinfo-product-groups.component.html',
  styleUrls: ['./attpinfo-product-groups.component.css']
})
export class ATTPInfoProductGroupsComponent implements OnInit {

  @ViewChild('ATTPInfoProductGroupsSort') ATTPInfoProductGroupsSort: MatSort;
  @ViewChild('ATTPInfoProductGroupsPaginator') ATTPInfoProductGroupsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoProductGroupsService: ATTPInfoProductGroupsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPInfoProductGroupsSearch() {
    this.ATTPInfoProductGroupsService.SearchAll(this.ATTPInfoProductGroupsSort, this.ATTPInfoProductGroupsPaginator);
  }
  ATTPInfoProductGroupsSave(element: ATTPInfoProductGroups) {
    this.ATTPInfoProductGroupsService.FormData = element;
    this.NotificationService.warn(this.ATTPInfoProductGroupsService.ComponentSaveAll(this.ATTPInfoProductGroupsSort, this.ATTPInfoProductGroupsPaginator));
  }
  ATTPInfoProductGroupsDelete(element: ATTPInfoProductGroups) {
    this.ATTPInfoProductGroupsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPInfoProductGroupsService.ComponentDeleteAll(this.ATTPInfoProductGroupsSort, this.ATTPInfoProductGroupsPaginator));
  }
}
