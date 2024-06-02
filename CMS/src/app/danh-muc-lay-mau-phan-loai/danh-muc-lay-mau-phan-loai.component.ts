import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucLayMauPhanLoai } from 'src/app/shared/DanhMucLayMauPhanLoai.model';
import { DanhMucLayMauPhanLoaiService } from 'src/app/shared/DanhMucLayMauPhanLoai.service';

@Component({
  selector: 'app-danh-muc-lay-mau-phan-loai',
  templateUrl: './danh-muc-lay-mau-phan-loai.component.html',
  styleUrls: ['./danh-muc-lay-mau-phan-loai.component.css']
})
export class DanhMucLayMauPhanLoaiComponent implements OnInit {

  @ViewChild('DanhMucLayMauPhanLoaiSort') DanhMucLayMauPhanLoaiSort: MatSort;
  @ViewChild('DanhMucLayMauPhanLoaiPaginator') DanhMucLayMauPhanLoaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucLayMauPhanLoaiService: DanhMucLayMauPhanLoaiService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucLayMauPhanLoaiSearch() {
    this.DanhMucLayMauPhanLoaiService.SearchAll(this.DanhMucLayMauPhanLoaiSort, this.DanhMucLayMauPhanLoaiPaginator);
  }
  DanhMucLayMauPhanLoaiSave(element: DanhMucLayMauPhanLoai) {
    this.DanhMucLayMauPhanLoaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucLayMauPhanLoaiService.ComponentSaveAll(this.DanhMucLayMauPhanLoaiSort, this.DanhMucLayMauPhanLoaiPaginator));
  }
  DanhMucLayMauPhanLoaiDelete(element: DanhMucLayMauPhanLoai) {
    this.DanhMucLayMauPhanLoaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucLayMauPhanLoaiService.ComponentDeleteAll(this.DanhMucLayMauPhanLoaiSort, this.DanhMucLayMauPhanLoaiPaginator));
  }
}