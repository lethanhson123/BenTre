import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucATTPTinhTrang } from 'src/app/shared/DanhMucATTPTinhTrang.model';
import { DanhMucATTPTinhTrangService } from 'src/app/shared/DanhMucATTPTinhTrang.service';

@Component({
  selector: 'app-danh-muc-attptinh-trang',
  templateUrl: './danh-muc-attptinh-trang.component.html',
  styleUrls: ['./danh-muc-attptinh-trang.component.css']
})
export class DanhMucATTPTinhTrangComponent implements OnInit {

  @ViewChild('DanhMucATTPTinhTrangSort') DanhMucATTPTinhTrangSort: MatSort;
  @ViewChild('DanhMucATTPTinhTrangPaginator') DanhMucATTPTinhTrangPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucATTPTinhTrangService: DanhMucATTPTinhTrangService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucATTPTinhTrangSearch() {
    this.DanhMucATTPTinhTrangService.SearchAll(this.DanhMucATTPTinhTrangSort, this.DanhMucATTPTinhTrangPaginator);
  }
  DanhMucATTPTinhTrangSave(element: DanhMucATTPTinhTrang) {
    this.DanhMucATTPTinhTrangService.FormData = element;
    this.NotificationService.warn(this.DanhMucATTPTinhTrangService.ComponentSaveAll(this.DanhMucATTPTinhTrangSort, this.DanhMucATTPTinhTrangPaginator));
  }
  DanhMucATTPTinhTrangDelete(element: DanhMucATTPTinhTrang) {
    this.DanhMucATTPTinhTrangService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucATTPTinhTrangService.ComponentDeleteAll(this.DanhMucATTPTinhTrangSort, this.DanhMucATTPTinhTrangPaginator));
  }
}