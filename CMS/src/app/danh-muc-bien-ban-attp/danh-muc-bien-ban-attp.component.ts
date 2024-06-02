import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucBienBanATTP } from 'src/app/shared/DanhMucBienBanATTP.model';
import { DanhMucBienBanATTPService } from 'src/app/shared/DanhMucBienBanATTP.service';


@Component({
  selector: 'app-danh-muc-bien-ban-attp',
  templateUrl: './danh-muc-bien-ban-attp.component.html',
  styleUrls: ['./danh-muc-bien-ban-attp.component.css']
})
export class DanhMucBienBanATTPComponent implements OnInit {

  @ViewChild('DanhMucBienBanATTPSort') DanhMucBienBanATTPSort: MatSort;
  @ViewChild('DanhMucBienBanATTPPaginator') DanhMucBienBanATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucBienBanATTPService: DanhMucBienBanATTPService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucBienBanATTPSearch() {
    this.DanhMucBienBanATTPService.SearchAll(this.DanhMucBienBanATTPSort, this.DanhMucBienBanATTPPaginator);
  }
  DanhMucBienBanATTPSave(element: DanhMucBienBanATTP) {
    this.DanhMucBienBanATTPService.FormData = element;
    this.NotificationService.warn(this.DanhMucBienBanATTPService.ComponentSaveAll(this.DanhMucBienBanATTPSort, this.DanhMucBienBanATTPPaginator));
  }
  DanhMucBienBanATTPDelete(element: DanhMucBienBanATTP) {
    this.DanhMucBienBanATTPService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucBienBanATTPService.ComponentDeleteAll(this.DanhMucBienBanATTPSort, this.DanhMucBienBanATTPPaginator));
  }
}