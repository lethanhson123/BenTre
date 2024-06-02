import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';

import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';

@Component({
  selector: 'app-danh-muc-lay-mau-chi-tieu',
  templateUrl: './danh-muc-lay-mau-chi-tieu.component.html',
  styleUrls: ['./danh-muc-lay-mau-chi-tieu.component.css']
})
export class DanhMucLayMauChiTieuComponent implements OnInit {

  @ViewChild('DanhMucLayMauChiTieuSort') DanhMucLayMauChiTieuSort: MatSort;
  @ViewChild('DanhMucLayMauChiTieuPaginator') DanhMucLayMauChiTieuPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,

    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
  }
  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }

  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.SearchByParentID(this.DanhMucLayMauChiTieuSort, this.DanhMucLayMauChiTieuPaginator);
  }
  DanhMucLayMauChiTieuSave(element: DanhMucLayMauChiTieu) {
    this.DanhMucLayMauChiTieuService.FormData = element;
    this.NotificationService.warn(this.DanhMucLayMauChiTieuService.ComponentSaveByParentID(this.DanhMucLayMauChiTieuSort, this.DanhMucLayMauChiTieuPaginator));
  }
  DanhMucLayMauChiTieuDelete(element: DanhMucLayMauChiTieu) {
    this.DanhMucLayMauChiTieuService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucLayMauChiTieuService.ComponentDeleteByParentID(this.DanhMucLayMauChiTieuSort, this.DanhMucLayMauChiTieuPaginator));
  }
}