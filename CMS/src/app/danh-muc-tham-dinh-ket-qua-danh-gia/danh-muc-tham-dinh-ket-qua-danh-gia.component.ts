import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucThamDinhKetQuaDanhGia } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.model';
import { DanhMucThamDinhKetQuaDanhGiaService } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.service';

@Component({
  selector: 'app-danh-muc-tham-dinh-ket-qua-danh-gia',
  templateUrl: './danh-muc-tham-dinh-ket-qua-danh-gia.component.html',
  styleUrls: ['./danh-muc-tham-dinh-ket-qua-danh-gia.component.css']
})
export class DanhMucThamDinhKetQuaDanhGiaComponent implements OnInit {

  @ViewChild('DanhMucThamDinhKetQuaDanhGiaSort') DanhMucThamDinhKetQuaDanhGiaSort: MatSort;
  @ViewChild('DanhMucThamDinhKetQuaDanhGiaPaginator') DanhMucThamDinhKetQuaDanhGiaPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucThamDinhKetQuaDanhGiaService: DanhMucThamDinhKetQuaDanhGiaService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucThamDinhKetQuaDanhGiaSearch() {
    this.DanhMucThamDinhKetQuaDanhGiaService.SearchAll(this.DanhMucThamDinhKetQuaDanhGiaSort, this.DanhMucThamDinhKetQuaDanhGiaPaginator);
  }
  DanhMucThamDinhKetQuaDanhGiaSave(element: DanhMucThamDinhKetQuaDanhGia) {
    this.DanhMucThamDinhKetQuaDanhGiaService.FormData = element;
    this.NotificationService.warn(this.DanhMucThamDinhKetQuaDanhGiaService.ComponentSaveAll(this.DanhMucThamDinhKetQuaDanhGiaSort, this.DanhMucThamDinhKetQuaDanhGiaPaginator));
  }
  DanhMucThamDinhKetQuaDanhGiaDelete(element: DanhMucThamDinhKetQuaDanhGia) {
    this.DanhMucThamDinhKetQuaDanhGiaService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucThamDinhKetQuaDanhGiaService.ComponentDeleteAll(this.DanhMucThamDinhKetQuaDanhGiaSort, this.DanhMucThamDinhKetQuaDanhGiaPaginator));
  }
}