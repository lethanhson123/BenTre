import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPTiepNhanProductGroups } from 'src/app/shared/ATTPTiepNhanProductGroups.model';
import { ATTPTiepNhanProductGroupsService } from 'src/app/shared/ATTPTiepNhanProductGroups.service';
@Component({
  selector: 'app-attptiep-nhan-product-groups',
  templateUrl: './attptiep-nhan-product-groups.component.html',
  styleUrls: ['./attptiep-nhan-product-groups.component.css']
})
export class ATTPTiepNhanProductGroupsComponent implements OnInit {
  @ViewChild('ATTPTiepNhanProductGroupsSort') ATTPTiepNhanProductGroupsSort: MatSort;
  @ViewChild('ATTPTiepNhanProductGroupsPaginator') ATTPTiepNhanProductGroupsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPTiepNhanProductGroupsService: ATTPTiepNhanProductGroupsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPTiepNhanProductGroupsSearch() {
    this.ATTPTiepNhanProductGroupsService.SearchAll(this.ATTPTiepNhanProductGroupsSort, this.ATTPTiepNhanProductGroupsPaginator);
  }
  ATTPTiepNhanProductGroupsSave(element: ATTPTiepNhanProductGroups) {
    this.ATTPTiepNhanProductGroupsService.FormData = element;
    this.NotificationService.warn(this.ATTPTiepNhanProductGroupsService.ComponentSaveAll(this.ATTPTiepNhanProductGroupsSort, this.ATTPTiepNhanProductGroupsPaginator));
  }
  ATTPTiepNhanProductGroupsDelete(element: ATTPTiepNhanProductGroups) {
    this.ATTPTiepNhanProductGroupsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPTiepNhanProductGroupsService.ComponentDeleteAll(this.ATTPTiepNhanProductGroupsSort, this.ATTPTiepNhanProductGroupsPaginator));
  }


}
