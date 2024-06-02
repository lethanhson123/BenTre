import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucDangKyCapGiay } from 'src/app/shared/DanhMucDangKyCapGiay.model';
import { DanhMucDangKyCapGiayService } from 'src/app/shared/DanhMucDangKyCapGiay.service';

@Component({
  selector: 'app-danh-muc-dang-ky-cap-giay',
  templateUrl: './danh-muc-dang-ky-cap-giay.component.html',
  styleUrls: ['./danh-muc-dang-ky-cap-giay.component.css']
})
export class DanhMucDangKyCapGiayComponent implements OnInit {

  @ViewChild('DanhMucDangKyCapGiaySort') DanhMucDangKyCapGiaySort: MatSort;
  @ViewChild('DanhMucDangKyCapGiayPaginator') DanhMucDangKyCapGiayPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucDangKyCapGiayService: DanhMucDangKyCapGiayService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucDangKyCapGiaySearch() {
    this.DanhMucDangKyCapGiayService.SearchAll(this.DanhMucDangKyCapGiaySort, this.DanhMucDangKyCapGiayPaginator);
  }
  DanhMucDangKyCapGiaySave(element: DanhMucDangKyCapGiay) {
    this.DanhMucDangKyCapGiayService.FormData = element;
    this.NotificationService.warn(this.DanhMucDangKyCapGiayService.ComponentSaveAll(this.DanhMucDangKyCapGiaySort, this.DanhMucDangKyCapGiayPaginator));
  }
  DanhMucDangKyCapGiayDelete(element: DanhMucDangKyCapGiay) {
    this.DanhMucDangKyCapGiayService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucDangKyCapGiayService.ComponentDeleteAll(this.DanhMucDangKyCapGiaySort, this.DanhMucDangKyCapGiayPaginator));
  }
}