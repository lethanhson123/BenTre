import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucSanPhamPhanLoai } from 'src/app/shared/DanhMucSanPhamPhanLoai.model';
import { DanhMucSanPhamPhanLoaiService } from 'src/app/shared/DanhMucSanPhamPhanLoai.service';

@Component({
  selector: 'app-danh-muc-san-pham-phan-loai',
  templateUrl: './danh-muc-san-pham-phan-loai.component.html',
  styleUrls: ['./danh-muc-san-pham-phan-loai.component.css']
})
export class DanhMucSanPhamPhanLoaiComponent implements OnInit {

  @ViewChild('DanhMucSanPhamPhanLoaiSort') DanhMucSanPhamPhanLoaiSort: MatSort;
  @ViewChild('DanhMucSanPhamPhanLoaiPaginator') DanhMucSanPhamPhanLoaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucSanPhamPhanLoaiService: DanhMucSanPhamPhanLoaiService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucSanPhamPhanLoaiSearch() {
    this.DanhMucSanPhamPhanLoaiService.SearchAll(this.DanhMucSanPhamPhanLoaiSort, this.DanhMucSanPhamPhanLoaiPaginator);
  }
  DanhMucSanPhamPhanLoaiSave(element: DanhMucSanPhamPhanLoai) {
    this.DanhMucSanPhamPhanLoaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucSanPhamPhanLoaiService.ComponentSaveAll(this.DanhMucSanPhamPhanLoaiSort, this.DanhMucSanPhamPhanLoaiPaginator));
  }
  DanhMucSanPhamPhanLoaiDelete(element: DanhMucSanPhamPhanLoai) {
    this.DanhMucSanPhamPhanLoaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucSanPhamPhanLoaiService.ComponentDeleteAll(this.DanhMucSanPhamPhanLoaiSort, this.DanhMucSanPhamPhanLoaiPaginator));
  }
}