import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucChuongTrinhQuanLyChatLuong } from 'src/app/shared/DanhMucChuongTrinhQuanLyChatLuong.model';
import { DanhMucChuongTrinhQuanLyChatLuongService } from 'src/app/shared/DanhMucChuongTrinhQuanLyChatLuong.service';

@Component({
  selector: 'app-danh-muc-chuong-trinh-quan-ly-chat-luong',
  templateUrl: './danh-muc-chuong-trinh-quan-ly-chat-luong.component.html',
  styleUrls: ['./danh-muc-chuong-trinh-quan-ly-chat-luong.component.css']
})
export class DanhMucChuongTrinhQuanLyChatLuongComponent implements OnInit {

  @ViewChild('DanhMucChuongTrinhQuanLyChatLuongSort') DanhMucChuongTrinhQuanLyChatLuongSort: MatSort;
  @ViewChild('DanhMucChuongTrinhQuanLyChatLuongPaginator') DanhMucChuongTrinhQuanLyChatLuongPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucChuongTrinhQuanLyChatLuongService: DanhMucChuongTrinhQuanLyChatLuongService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucChuongTrinhQuanLyChatLuongSearch() {
    this.DanhMucChuongTrinhQuanLyChatLuongService.SearchAll(this.DanhMucChuongTrinhQuanLyChatLuongSort, this.DanhMucChuongTrinhQuanLyChatLuongPaginator);
  }
  DanhMucChuongTrinhQuanLyChatLuongSave(element: DanhMucChuongTrinhQuanLyChatLuong) {
    this.DanhMucChuongTrinhQuanLyChatLuongService.FormData = element;
    this.NotificationService.warn(this.DanhMucChuongTrinhQuanLyChatLuongService.ComponentSaveAll(this.DanhMucChuongTrinhQuanLyChatLuongSort, this.DanhMucChuongTrinhQuanLyChatLuongPaginator));
  }
  DanhMucChuongTrinhQuanLyChatLuongDelete(element: DanhMucChuongTrinhQuanLyChatLuong) {
    this.DanhMucChuongTrinhQuanLyChatLuongService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucChuongTrinhQuanLyChatLuongService.ComponentDeleteAll(this.DanhMucChuongTrinhQuanLyChatLuongSort, this.DanhMucChuongTrinhQuanLyChatLuongPaginator));
  }
}