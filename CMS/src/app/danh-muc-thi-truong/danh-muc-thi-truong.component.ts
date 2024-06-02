import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucThiTruong } from 'src/app/shared/DanhMucThiTruong.model';
import { DanhMucThiTruongService } from 'src/app/shared/DanhMucThiTruong.service';

@Component({
  selector: 'app-danh-muc-thi-truong',
  templateUrl: './danh-muc-thi-truong.component.html',
  styleUrls: ['./danh-muc-thi-truong.component.css']
})
export class DanhMucThiTruongComponent implements OnInit {

  @ViewChild('DanhMucThiTruongSort') DanhMucThiTruongSort: MatSort;
  @ViewChild('DanhMucThiTruongPaginator') DanhMucThiTruongPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucThiTruongService: DanhMucThiTruongService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucThiTruongSearch() {
    this.DanhMucThiTruongService.SearchAll(this.DanhMucThiTruongSort, this.DanhMucThiTruongPaginator);
  }
  DanhMucThiTruongSave(element: DanhMucThiTruong) {
    this.DanhMucThiTruongService.FormData = element;
    this.NotificationService.warn(this.DanhMucThiTruongService.ComponentSaveAll(this.DanhMucThiTruongSort, this.DanhMucThiTruongPaginator));
  }
  DanhMucThiTruongDelete(element: DanhMucThiTruong) {
    this.DanhMucThiTruongService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucThiTruongService.ComponentDeleteAll(this.DanhMucThiTruongSort, this.DanhMucThiTruongPaginator));
  }
}
