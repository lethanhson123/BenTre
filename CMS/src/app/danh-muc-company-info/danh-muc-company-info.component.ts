import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyInfo } from 'src/app/shared/DanhMucCompanyInfo.model';
import { DanhMucCompanyInfoService } from 'src/app/shared/DanhMucCompanyInfo.service';

@Component({
  selector: 'app-danh-muc-company-info',
  templateUrl: './danh-muc-company-info.component.html',
  styleUrls: ['./danh-muc-company-info.component.css']
})
export class DanhMucCompanyInfoComponent implements OnInit {

  @ViewChild('DanhMucCompanyInfoSort') DanhMucCompanyInfoSort: MatSort;
  @ViewChild('DanhMucCompanyInfoPaginator') DanhMucCompanyInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucCompanyInfoService: DanhMucCompanyInfoService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucCompanyInfoSearch() {
    this.DanhMucCompanyInfoService.SearchAll(this.DanhMucCompanyInfoSort, this.DanhMucCompanyInfoPaginator);
  }
  DanhMucCompanyInfoSave(element: DanhMucCompanyInfo) {
    this.DanhMucCompanyInfoService.FormData = element;
    this.NotificationService.warn(this.DanhMucCompanyInfoService.ComponentSaveAll(this.DanhMucCompanyInfoSort, this.DanhMucCompanyInfoPaginator));
  }
  DanhMucCompanyInfoDelete(element: DanhMucCompanyInfo) {
    this.DanhMucCompanyInfoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucCompanyInfoService.ComponentDeleteAll(this.DanhMucCompanyInfoSort, this.DanhMucCompanyInfoPaginator));
  }
}