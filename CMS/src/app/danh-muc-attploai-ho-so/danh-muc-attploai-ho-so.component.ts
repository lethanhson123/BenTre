import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

@Component({
  selector: 'app-danh-muc-attploai-ho-so',
  templateUrl: './danh-muc-attploai-ho-so.component.html',
  styleUrls: ['./danh-muc-attploai-ho-so.component.css']
})
export class DanhMucATTPLoaiHoSoComponent implements OnInit {

  @ViewChild('DanhMucATTPLoaiHoSoSort') DanhMucATTPLoaiHoSoSort: MatSort;
  @ViewChild('DanhMucATTPLoaiHoSoPaginator') DanhMucATTPLoaiHoSoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.SearchAll(this.DanhMucATTPLoaiHoSoSort, this.DanhMucATTPLoaiHoSoPaginator);
  }
  DanhMucATTPLoaiHoSoSave(element: DanhMucATTPLoaiHoSo) {
    this.DanhMucATTPLoaiHoSoService.FormData = element;
    this.NotificationService.warn(this.DanhMucATTPLoaiHoSoService.ComponentSaveAll(this.DanhMucATTPLoaiHoSoSort, this.DanhMucATTPLoaiHoSoPaginator));
  }
  DanhMucATTPLoaiHoSoDelete(element: DanhMucATTPLoaiHoSo) {
    this.DanhMucATTPLoaiHoSoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucATTPLoaiHoSoService.ComponentDeleteAll(this.DanhMucATTPLoaiHoSoSort, this.DanhMucATTPLoaiHoSoPaginator));
  }
}