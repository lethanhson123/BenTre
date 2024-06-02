import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';

@Component({
  selector: 'app-danh-muc-product-group',
  templateUrl: './danh-muc-product-group.component.html',
  styleUrls: ['./danh-muc-product-group.component.css']
})
export class DanhMucProductGroupComponent implements OnInit {

  @ViewChild('DanhMucProductGroupSort') DanhMucProductGroupSort: MatSort;
  @ViewChild('DanhMucProductGroupPaginator') DanhMucProductGroupPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucProductGroupService: DanhMucProductGroupService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucProductGroupSearch() {
    this.DanhMucProductGroupService.SearchAll(this.DanhMucProductGroupSort, this.DanhMucProductGroupPaginator);
  }
  DanhMucProductGroupSave(element: DanhMucProductGroup) {
    this.DanhMucProductGroupService.FormData = element;
    this.NotificationService.warn(this.DanhMucProductGroupService.ComponentSaveAll(this.DanhMucProductGroupSort, this.DanhMucProductGroupPaginator));
  }
  DanhMucProductGroupDelete(element: DanhMucProductGroup) {
    this.DanhMucProductGroupService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucProductGroupService.ComponentDeleteAll(this.DanhMucProductGroupSort, this.DanhMucProductGroupPaginator));
  }
}