import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';
import { DanhMucChucDanhDetailComponent } from '../danh-muc-chuc-danh-detail/danh-muc-chuc-danh-detail.component';

@Component({
  selector: 'app-danh-muc-chuc-danh',
  templateUrl: './danh-muc-chuc-danh.component.html',
  styleUrls: ['./danh-muc-chuc-danh.component.css']
})
export class DanhMucChucDanhComponent implements OnInit {

  @ViewChild('DanhMucChucDanhSort') DanhMucChucDanhSort: MatSort;
  @ViewChild('DanhMucChucDanhPaginator') DanhMucChucDanhPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
  ) { }

  ngOnInit(): void {
  }

  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.SearchAll(this.DanhMucChucDanhSort, this.DanhMucChucDanhPaginator);
  }
  DanhMucChucDanhSave(element: DanhMucChucDanh) {
    this.DanhMucChucDanhService.FormData = element;
    this.NotificationService.warn(this.DanhMucChucDanhService.ComponentSaveAll(this.DanhMucChucDanhSort, this.DanhMucChucDanhPaginator));
  }
  DanhMucChucDanhDelete(element: DanhMucChucDanh) {
    this.DanhMucChucDanhService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucChucDanhService.ComponentDeleteAll(this.DanhMucChucDanhSort, this.DanhMucChucDanhPaginator));
  }
  DanhMucChucDanhAdd(ID: number) {
    this.DanhMucChucDanhService.BaseParameter.ID = ID;
    this.DanhMucChucDanhService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucChucDanhService.FormData = res as DanhMucChucDanh
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucChucDanhDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }

}