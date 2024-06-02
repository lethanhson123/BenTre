import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucHinhThucNuoi } from 'src/app/shared/DanhMucHinhThucNuoi.model';
import { DanhMucHinhThucNuoiService } from 'src/app/shared/DanhMucHinhThucNuoi.service';

@Component({
  selector: 'app-danh-muc-hinh-thuc-nuoi',
  templateUrl: './danh-muc-hinh-thuc-nuoi.component.html',
  styleUrls: ['./danh-muc-hinh-thuc-nuoi.component.css']
})
export class DanhMucHinhThucNuoiComponent implements OnInit {

  @ViewChild('DanhMucHinhThucNuoiSort') DanhMucHinhThucNuoiSort: MatSort;
  @ViewChild('DanhMucHinhThucNuoiPaginator') DanhMucHinhThucNuoiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucHinhThucNuoiService: DanhMucHinhThucNuoiService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucHinhThucNuoiSearch() {
    this.DanhMucHinhThucNuoiService.SearchAll(this.DanhMucHinhThucNuoiSort, this.DanhMucHinhThucNuoiPaginator);
  }
  DanhMucHinhThucNuoiSave(element: DanhMucHinhThucNuoi) {
    this.DanhMucHinhThucNuoiService.FormData = element;
    this.NotificationService.warn(this.DanhMucHinhThucNuoiService.ComponentSaveAll(this.DanhMucHinhThucNuoiSort, this.DanhMucHinhThucNuoiPaginator));
  }
  DanhMucHinhThucNuoiDelete(element: DanhMucHinhThucNuoi) {
    this.DanhMucHinhThucNuoiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucHinhThucNuoiService.ComponentDeleteAll(this.DanhMucHinhThucNuoiSort, this.DanhMucHinhThucNuoiPaginator));
  }
}