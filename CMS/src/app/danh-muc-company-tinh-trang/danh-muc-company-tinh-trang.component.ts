import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyTinhTrang } from 'src/app/shared/DanhMucCompanyTinhTrang.model';
import { DanhMucCompanyTinhTrangService } from 'src/app/shared/DanhMucCompanyTinhTrang.service';

@Component({
  selector: 'app-danh-muc-company-tinh-trang',
  templateUrl: './danh-muc-company-tinh-trang.component.html',
  styleUrls: ['./danh-muc-company-tinh-trang.component.css']
})
export class DanhMucCompanyTinhTrangComponent implements OnInit {

  @ViewChild('DanhMucCompanyTinhTrangSort') DanhMucCompanyTinhTrangSort: MatSort;
  @ViewChild('DanhMucCompanyTinhTrangPaginator') DanhMucCompanyTinhTrangPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucCompanyTinhTrangService: DanhMucCompanyTinhTrangService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucCompanyTinhTrangSearch() {
    this.DanhMucCompanyTinhTrangService.SearchAll(this.DanhMucCompanyTinhTrangSort, this.DanhMucCompanyTinhTrangPaginator);
  }
  DanhMucCompanyTinhTrangSave(element: DanhMucCompanyTinhTrang) {
    this.DanhMucCompanyTinhTrangService.FormData = element;
    this.NotificationService.warn(this.DanhMucCompanyTinhTrangService.ComponentSaveAll(this.DanhMucCompanyTinhTrangSort, this.DanhMucCompanyTinhTrangPaginator));
  }
  DanhMucCompanyTinhTrangDelete(element: DanhMucCompanyTinhTrang) {
    this.DanhMucCompanyTinhTrangService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucCompanyTinhTrangService.ComponentDeleteAll(this.DanhMucCompanyTinhTrangSort, this.DanhMucCompanyTinhTrangPaginator));
  }
}