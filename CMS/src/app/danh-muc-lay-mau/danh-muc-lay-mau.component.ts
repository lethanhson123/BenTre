import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';

import { DanhMucLayMauPhanLoai } from 'src/app/shared/DanhMucLayMauPhanLoai.model';
import { DanhMucLayMauPhanLoaiService } from 'src/app/shared/DanhMucLayMauPhanLoai.service';

import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';

@Component({
  selector: 'app-danh-muc-lay-mau',
  templateUrl: './danh-muc-lay-mau.component.html',
  styleUrls: ['./danh-muc-lay-mau.component.css']
})
export class DanhMucLayMauComponent implements OnInit {

  @ViewChild('DanhMucLayMauSort') DanhMucLayMauSort: MatSort;
  @ViewChild('DanhMucLayMauPaginator') DanhMucLayMauPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,
    public DanhMucLayMauPhanLoaiService: DanhMucLayMauPhanLoaiService,

    public DanhMucLayMauService: DanhMucLayMauService,
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
    this.DanhMucLayMauPhanLoaiSearch();
  }
  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauPhanLoaiSearch() {
    this.DanhMucLayMauPhanLoaiService.ComponentGetAllToListAsync();
  }

  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.SearchByParentID(this.DanhMucLayMauSort, this.DanhMucLayMauPaginator);
  }
  DanhMucLayMauSave(element: DanhMucLayMau) {
    this.DanhMucLayMauService.FormData = element;
    this.NotificationService.warn(this.DanhMucLayMauService.ComponentSaveByParentID(this.DanhMucLayMauSort, this.DanhMucLayMauPaginator));
  }
  DanhMucLayMauDelete(element: DanhMucLayMau) {
    this.DanhMucLayMauService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucLayMauService.ComponentDeleteByParentID(this.DanhMucLayMauSort, this.DanhMucLayMauPaginator));
  }
}
