import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucThoiGianLayMau } from 'src/app/shared/DanhMucThoiGianLayMau.model';
import { DanhMucThoiGianLayMauService } from 'src/app/shared/DanhMucThoiGianLayMau.service';

@Component({
  selector: 'app-danh-muc-thoi-gian-lay-mau',
  templateUrl: './danh-muc-thoi-gian-lay-mau.component.html',
  styleUrls: ['./danh-muc-thoi-gian-lay-mau.component.css']
})
export class DanhMucThoiGianLayMauComponent implements OnInit {

  @ViewChild('DanhMucThoiGianLayMauSort') DanhMucThoiGianLayMauSort: MatSort;
  @ViewChild('DanhMucThoiGianLayMauPaginator') DanhMucThoiGianLayMauPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucThoiGianLayMauService: DanhMucThoiGianLayMauService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucThoiGianLayMauSearch() {
    this.DanhMucThoiGianLayMauService.SearchAll(this.DanhMucThoiGianLayMauSort, this.DanhMucThoiGianLayMauPaginator);
  }
  DanhMucThoiGianLayMauSave(element: DanhMucThoiGianLayMau) {
    this.DanhMucThoiGianLayMauService.FormData = element;
    this.NotificationService.warn(this.DanhMucThoiGianLayMauService.ComponentSaveAll(this.DanhMucThoiGianLayMauSort, this.DanhMucThoiGianLayMauPaginator));
  }
  DanhMucThoiGianLayMauDelete(element: DanhMucThoiGianLayMau) {
    this.DanhMucThoiGianLayMauService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucThoiGianLayMauService.ComponentDeleteAll(this.DanhMucThoiGianLayMauSort, this.DanhMucThoiGianLayMauPaginator));
  }
}