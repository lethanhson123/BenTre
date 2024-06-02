import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PhanAnh } from 'src/app/shared/PhanAnh.model';
import { PhanAnhService } from 'src/app/shared/PhanAnh.service';
import { PhanAnhDetailComponent } from '../phan-anh-detail/phan-anh-detail.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-phan-anh',
  templateUrl: './phan-anh.component.html',
  styleUrls: ['./phan-anh.component.css']
})
export class PhanAnhComponent implements OnInit {

  @ViewChild('PhanAnhSort') PhanAnhSort: MatSort;
  @ViewChild('PhanAnhPaginator') PhanAnhPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,

    public PhanAnhService: PhanAnhService,
  ) { }

  ngOnInit(): void {

  }
  CompanyInfoAdd(ID: number) {
    this.PhanAnhService.IsShowLoading = true;
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
        this.PhanAnhService.IsShowLoading = false;
      },
      err => {
        this.PhanAnhService.IsShowLoading = false;
      }
    );
  }


  PhanAnhSearch() {
    this.PhanAnhService.SearchAllNotEmpty(this.PhanAnhSort, this.PhanAnhPaginator);
  }

  PhanAnhAdd(ID: number) {
    this.PhanAnhService.BaseParameter.ID = ID;
    this.PhanAnhService.GetByIDAsync().subscribe(
      res => {
        this.PhanAnhService.FormData = res as PhanAnh;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PhanAnhDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PhanAnhSearch();
        });
      },
      err => {
      }
    );
  }
}
