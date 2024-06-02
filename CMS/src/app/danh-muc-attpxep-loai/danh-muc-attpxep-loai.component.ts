import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

@Component({
  selector: 'app-danh-muc-attpxep-loai',
  templateUrl: './danh-muc-attpxep-loai.component.html',
  styleUrls: ['./danh-muc-attpxep-loai.component.css']
})
export class DanhMucATTPXepLoaiComponent implements OnInit {

  @ViewChild('DanhMucATTPXepLoaiSort') DanhMucATTPXepLoaiSort: MatSort;
  @ViewChild('DanhMucATTPXepLoaiPaginator') DanhMucATTPXepLoaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.SearchAll(this.DanhMucATTPXepLoaiSort, this.DanhMucATTPXepLoaiPaginator);
  }
  DanhMucATTPXepLoaiSave(element: DanhMucATTPXepLoai) {
    this.DanhMucATTPXepLoaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucATTPXepLoaiService.ComponentSaveAll(this.DanhMucATTPXepLoaiSort, this.DanhMucATTPXepLoaiPaginator));
  }
  DanhMucATTPXepLoaiDelete(element: DanhMucATTPXepLoai) {
    this.DanhMucATTPXepLoaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucATTPXepLoaiService.ComponentDeleteAll(this.DanhMucATTPXepLoaiSort, this.DanhMucATTPXepLoaiPaginator));
  }
}