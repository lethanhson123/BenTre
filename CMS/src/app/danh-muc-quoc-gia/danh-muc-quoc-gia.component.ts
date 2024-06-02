import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucQuocGia } from 'src/app/shared/DanhMucQuocGia.model';
import { DanhMucQuocGiaService } from 'src/app/shared/DanhMucQuocGia.service';
@Component({
  selector: 'app-danh-muc-quoc-gia',
  templateUrl: './danh-muc-quoc-gia.component.html',
  styleUrls: ['./danh-muc-quoc-gia.component.css']
})
export class DanhMucQuocGiaComponent implements OnInit {
  @ViewChild('DanhMucQuocGiaSort') DanhMucQuocGiaSort: MatSort;
  @ViewChild('DanhMucQuocGiaPaginator') DanhMucQuocGiaPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucQuocGiaService: DanhMucQuocGiaService,

  ) { }

  ngOnInit(): void {
  }

  DanhMucQuocGiaSearch() {
    this.DanhMucQuocGiaService.SearchAll(this.DanhMucQuocGiaSort, this.DanhMucQuocGiaPaginator);
  }
  DanhMucQuocGiaSave(element: DanhMucQuocGia) {
    this.DanhMucQuocGiaService.FormData = element;
    this.NotificationService.warn(this.DanhMucQuocGiaService.ComponentSaveAll(this.DanhMucQuocGiaSort, this.DanhMucQuocGiaPaginator));
  }
  DanhMucQuocGiaDelete(element: DanhMucQuocGia) {
    this.DanhMucQuocGiaService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucQuocGiaService.ComponentDeleteAll(this.DanhMucQuocGiaSort, this.DanhMucQuocGiaPaginator));
  }
}
