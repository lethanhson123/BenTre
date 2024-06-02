import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyPhanLoai } from 'src/app/shared/DanhMucCompanyPhanLoai.model';
import { DanhMucCompanyPhanLoaiService } from 'src/app/shared/DanhMucCompanyPhanLoai.service';

@Component({
  selector: 'app-danh-muc-company-phan-loai',
  templateUrl: './danh-muc-company-phan-loai.component.html',
  styleUrls: ['./danh-muc-company-phan-loai.component.css']
})
export class DanhMucCompanyPhanLoaiComponent implements OnInit {

  @ViewChild('DanhMucCompanyPhanLoaiSort') DanhMucCompanyPhanLoaiSort: MatSort;
  @ViewChild('DanhMucCompanyPhanLoaiPaginator') DanhMucCompanyPhanLoaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucCompanyPhanLoaiService: DanhMucCompanyPhanLoaiService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucCompanyPhanLoaiSearch() {
    this.DanhMucCompanyPhanLoaiService.SearchAll(this.DanhMucCompanyPhanLoaiSort, this.DanhMucCompanyPhanLoaiPaginator);
  }
  DanhMucCompanyPhanLoaiSave(element: DanhMucCompanyPhanLoai) {
    this.DanhMucCompanyPhanLoaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucCompanyPhanLoaiService.ComponentSaveAll(this.DanhMucCompanyPhanLoaiSort, this.DanhMucCompanyPhanLoaiPaginator));
  }
  DanhMucCompanyPhanLoaiDelete(element: DanhMucCompanyPhanLoai) {
    this.DanhMucCompanyPhanLoaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucCompanyPhanLoaiService.ComponentDeleteAll(this.DanhMucCompanyPhanLoaiSort, this.DanhMucCompanyPhanLoaiPaginator));
  }
}