import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyTrangThai } from 'src/app/shared/DanhMucCompanyTrangThai.model';
import { DanhMucCompanyTrangThaiService } from 'src/app/shared/DanhMucCompanyTrangThai.service';

@Component({
  selector: 'app-danh-muc-company-trang-thai',
  templateUrl: './danh-muc-company-trang-thai.component.html',
  styleUrls: ['./danh-muc-company-trang-thai.component.css']
})
export class DanhMucCompanyTrangThaiComponent implements OnInit {

  @ViewChild('DanhMucCompanyTrangThaiSort') DanhMucCompanyTrangThaiSort: MatSort;
  @ViewChild('DanhMucCompanyTrangThaiPaginator') DanhMucCompanyTrangThaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucCompanyTrangThaiService: DanhMucCompanyTrangThaiService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucCompanyTrangThaiSearch() {
    this.DanhMucCompanyTrangThaiService.SearchAll(this.DanhMucCompanyTrangThaiSort, this.DanhMucCompanyTrangThaiPaginator);
  }
  DanhMucCompanyTrangThaiSave(element: DanhMucCompanyTrangThai) {
    this.DanhMucCompanyTrangThaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucCompanyTrangThaiService.ComponentSaveAll(this.DanhMucCompanyTrangThaiSort, this.DanhMucCompanyTrangThaiPaginator));
  }
  DanhMucCompanyTrangThaiDelete(element: DanhMucCompanyTrangThai) {
    this.DanhMucCompanyTrangThaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucCompanyTrangThaiService.ComponentDeleteAll(this.DanhMucCompanyTrangThaiSort, this.DanhMucCompanyTrangThaiPaginator));
  }
}