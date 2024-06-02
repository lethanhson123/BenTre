
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucATTPTinhTrang } from 'src/app/shared/DanhMucATTPTinhTrang.model';
import { DanhMucATTPTinhTrangService } from 'src/app/shared/DanhMucATTPTinhTrang.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { ATTPInfoService } from 'src/app/shared/ATTPInfo.service';
import { ATTPInfoDetailComponent } from '../attpinfo-detail/attpinfo-detail.component';
import { ATTPInfoDetailByIDComponent } from '../attpinfo-detail-by-id/attpinfo-detail-by-id.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-attpinfo',
  templateUrl: './attpinfo.component.html',
  styleUrls: ['./attpinfo.component.css']
})
export class ATTPInfoComponent implements OnInit {

  @ViewChild('ATTPInfoSort') ATTPInfoSort: MatSort;
  @ViewChild('ATTPInfoPaginator') ATTPInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucATTPTinhTrangService: DanhMucATTPTinhTrangService,

    public CompanyInfoService: CompanyInfoService,

    public ATTPInfoService: ATTPInfoService,
  ) {

  }

  ngOnInit(): void {    
    this.ATTPInfoSearch();
  }  

  ATTPInfoSearch() {
    this.ATTPInfoService.IsShowLoading = true;
    this.ATTPInfoService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.ATTPInfoService.List = (res as ATTPInfo[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));
        this.ATTPInfoService.DataSource = new MatTableDataSource(this.ATTPInfoService.List);
        this.ATTPInfoService.DataSource.sort = this.ATTPInfoSort;
        this.ATTPInfoService.DataSource.paginator = this.ATTPInfoPaginator;
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }

  ATTPInfoDelete(element: ATTPInfo) {
    this.ATTPInfoService.IsShowLoading = true;
    element.Active = false;
    this.ATTPInfoService.FormData = element;
    this.ATTPInfoService.FormData.ParentID = this.ATTPInfoService.FormData.ID;
    this.ATTPInfoService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.ATTPInfoSearch();
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ATTPInfoService.IsShowLoading = false;
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
        });
      },
      err => {
      }
    );
  }

  ATTPInfoAdd(ID: number) {
    this.ATTPInfoService.BaseParameter.ID = ID;
    this.ATTPInfoService.GetByIDAsync().subscribe(
      res => {
        this.ATTPInfoService.FormData = res as ATTPInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ATTPInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ATTPInfoSearch();
        });
      },
      err => {
      }
    );
  }
  ATTPInfoAddByID(ID: number) {
    this.ATTPInfoService.BaseParameter.ID = ID;
    this.ATTPInfoService.GetByIDAsync().subscribe(
      res => {
        this.ATTPInfoService.FormData = res as ATTPInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ATTPInfoDetailByIDComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ATTPInfoSearch();
        });
      },
      err => {
      }
    );
  }
}
