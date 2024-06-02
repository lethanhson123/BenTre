import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucXepLoai } from 'src/app/shared/DanhMucXepLoai.model';
import { DanhMucXepLoaiService } from 'src/app/shared/DanhMucXepLoai.service';

@Component({
  selector: 'app-danh-muc-xep-loai',
  templateUrl: './danh-muc-xep-loai.component.html',
  styleUrls: ['./danh-muc-xep-loai.component.css']
})
export class DanhMucXepLoaiComponent implements OnInit {

  @ViewChild('DanhMucXepLoaiSort') DanhMucXepLoaiSort: MatSort;
  @ViewChild('DanhMucXepLoaiPaginator') DanhMucXepLoaiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucXepLoaiService: DanhMucXepLoaiService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucXepLoaiSearch() {
    this.DanhMucXepLoaiService.SearchAll(this.DanhMucXepLoaiSort, this.DanhMucXepLoaiPaginator);
  }
  DanhMucXepLoaiSave(element: DanhMucXepLoai) {
    this.DanhMucXepLoaiService.FormData = element;
    this.NotificationService.warn(this.DanhMucXepLoaiService.ComponentSaveAll(this.DanhMucXepLoaiSort, this.DanhMucXepLoaiPaginator));
  }
  DanhMucXepLoaiDelete(element: DanhMucXepLoai) {
    this.DanhMucXepLoaiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucXepLoaiService.ComponentDeleteAll(this.DanhMucXepLoaiSort, this.DanhMucXepLoaiPaginator));
  }
}