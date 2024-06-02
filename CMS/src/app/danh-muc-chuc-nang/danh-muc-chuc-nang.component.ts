import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucChucNang } from 'src/app/shared/DanhMucChucNang.model';
import { DanhMucChucNangService } from 'src/app/shared/DanhMucChucNang.service';
import { DanhMucChucNangDetailComponent } from '../danh-muc-chuc-nang-detail/danh-muc-chuc-nang-detail.component';


@Component({
  selector: 'app-danh-muc-chuc-nang',
  templateUrl: './danh-muc-chuc-nang.component.html',
  styleUrls: ['./danh-muc-chuc-nang.component.css']
})
export class DanhMucChucNangComponent implements OnInit {

  @ViewChild('DanhMucChucNangSort') DanhMucChucNangSort: MatSort;
  @ViewChild('DanhMucChucNangPaginator') DanhMucChucNangPaginator: MatPaginator;

  DanhMucUngDungID: number = environment.InitializationNumber;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucChucNangService: DanhMucChucNangService,
  ) { }

  ngOnInit(): void {
    this.DanhMucChucNangSearch();
  }
  DanhMucChucNangSearch() {
    if (this.DanhMucChucNangService.BaseParameter.SearchString.length > 0) {
      this.DanhMucChucNangService.DataSource.filter = this.DanhMucChucNangService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.DanhMucChucNangService.IsShowLoading = true;
      this.DanhMucChucNangService.GetAllAndEmptyToListAsync().subscribe(
        res => {
          this.DanhMucChucNangService.List = (res as DanhMucChucNang[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.DanhMucChucNangService.ListFilter = this.DanhMucChucNangService.List.filter(item => item.ParentID == 0);
          this.DanhMucChucNangService.DataSource = new MatTableDataSource(this.DanhMucChucNangService.List);
          this.DanhMucChucNangService.DataSource.sort = this.DanhMucChucNangSort;
          this.DanhMucChucNangService.DataSource.paginator = this.DanhMucChucNangPaginator;
          this.DanhMucChucNangService.IsShowLoading = false;
        },
        err => {
          this.DanhMucChucNangService.IsShowLoading = false;
        }
      );
    }
  }

  DanhMucChucNangSave(element: DanhMucChucNang) {
    this.DanhMucChucNangService.IsShowLoading = true;
    this.DanhMucChucNangService.FormData = element;
    this.DanhMucChucNangService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.DanhMucChucNangService.FileToUpload = null;
        this.DanhMucChucNangSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucChucNangService.IsShowLoading = false;
      }
    );
  }

  DanhMucChucNangDelete(element: DanhMucChucNang) {
    this.DanhMucChucNangService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucChucNangService.ComponentDeleteAll(this.DanhMucChucNangSort, this.DanhMucChucNangPaginator));
  }
  DanhMucChucNangAdd(element: DanhMucChucNang) {
    this.DanhMucChucNangService.FormData = element;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: element.ID };
    const dialog = this.dialog.open(DanhMucChucNangDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
    });
  }

  ChangeFileName(element: DanhMucChucNang, files: FileList) {
    if (files) {
      this.DanhMucChucNangService.FileToUpload = files;
    }
  }
}