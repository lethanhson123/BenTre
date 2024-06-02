import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucUngDung } from 'src/app/shared/DanhMucUngDung.model';
import { DanhMucUngDungService } from 'src/app/shared/DanhMucUngDung.service';

@Component({
  selector: 'app-danh-muc-ung-dung',
  templateUrl: './danh-muc-ung-dung.component.html',
  styleUrls: ['./danh-muc-ung-dung.component.css']
})
export class DanhMucUngDungComponent implements OnInit {

  @ViewChild('DanhMucUngDungSort') DanhMucUngDungSort: MatSort;
  @ViewChild('DanhMucUngDungPaginator') DanhMucUngDungPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucUngDungService: DanhMucUngDungService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucUngDungSearch() {
    this.DanhMucUngDungService.SearchAll(this.DanhMucUngDungSort, this.DanhMucUngDungPaginator);
  }
  DanhMucUngDungSave(element: DanhMucUngDung) {
    this.DanhMucUngDungService.FormData = element;
    this.NotificationService.warn(this.DanhMucUngDungService.ComponentSaveAll(this.DanhMucUngDungSort, this.DanhMucUngDungPaginator));
  }
  DanhMucUngDungDelete(element: DanhMucUngDung) {
    this.DanhMucUngDungService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucUngDungService.ComponentDeleteAll(this.DanhMucUngDungSort, this.DanhMucUngDungPaginator));
  }
}
