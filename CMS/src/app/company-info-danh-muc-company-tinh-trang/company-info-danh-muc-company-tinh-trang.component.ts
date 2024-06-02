import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyTinhTrang } from 'src/app/shared/DanhMucCompanyTinhTrang.model';
import { DanhMucCompanyTinhTrangService } from 'src/app/shared/DanhMucCompanyTinhTrang.service';


import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-company-info-danh-muc-company-tinh-trang',
  templateUrl: './company-info-danh-muc-company-tinh-trang.component.html',
  styleUrls: ['./company-info-danh-muc-company-tinh-trang.component.css']
})
export class CompanyInfoDanhMucCompanyTinhTrangComponent implements OnInit {

  @ViewChild('CompanyInfoSort') CompanyInfoSort: MatSort;
  @ViewChild('CompanyInfoPaginator') CompanyInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucCompanyTinhTrangService: DanhMucCompanyTinhTrangService,    

    public CompanyInfoService: CompanyInfoService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyInfoService.BaseParameter.DanhMucCompanyTinhTrangID = environment.InitializationNumber;
    this.DanhMucCompanyTinhTrangSearch();
  }

  DanhMucCompanyTinhTrangSearch() {
    this.DanhMucCompanyTinhTrangService.ComponentGetAllToListAsync();
  }  

  CompanyInfoSearch() {
    this.CompanyInfoService.IsShowLoading = true;    
    this.CompanyInfoService.GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync().subscribe(
      res => {
        this.CompanyInfoService.List = (res as CompanyInfo[]).sort((a, b) => (a.Name > b.Name ? 1 : -1));
        this.CompanyInfoService.DataSource = new MatTableDataSource(this.CompanyInfoService.List);
        this.CompanyInfoService.DataSource.sort = this.CompanyInfoSort;
        this.CompanyInfoService.DataSource.paginator = this.CompanyInfoPaginator;
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.CompanyInfoService.BaseParameter.ID = ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoSearch();
        });
      },
      err => {
      }
    );
  }
}