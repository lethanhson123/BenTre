import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfoDonViDongGoi } from 'src/app/shared/CompanyInfoDonViDongGoi.model';
import { CompanyInfoDonViDongGoiService } from 'src/app/shared/CompanyInfoDonViDongGoi.service';
//import { CoSoCompanyInfoDonViDongGoiViewComponent } from '../co-so-CompanyInfoDonViDongGoi-view/co-so-CompanyInfoDonViDongGoi-view.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CoSoCompanyInfoDonViDongGoiDetailComponent } from '../co-so-company-info-don-vi-dong-goi-detail/co-so-company-info-don-vi-dong-goi-detail.component';
import { CoSoCompanyInfoDonViDongGoiViewComponent } from '../co-so-company-info-don-vi-dong-goi-view/co-so-company-info-don-vi-dong-goi-view.component';

@Component({
  selector: 'app-co-so-company-info-don-vi-dong-goi',
  templateUrl: './co-so-company-info-don-vi-dong-goi.component.html',
  styleUrls: ['./co-so-company-info-don-vi-dong-goi.component.css']
})
export class CoSoCompanyInfoDonViDongGoiComponent implements OnInit {

  @ViewChild('CompanyInfoDonViDongGoiSort') CompanyInfoDonViDongGoiSort: MatSort;
  @ViewChild('CompanyInfoDonViDongGoiPaginator') CompanyInfoDonViDongGoiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoDonViDongGoiService: CompanyInfoDonViDongGoiService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
    this.CompanyInfoDonViDongGoiSearch();
  }
  CompanyInfoDonViDongGoiSearch() {    
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;    
    this.CompanyInfoDonViDongGoiService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoDonViDongGoiService.BaseParameter.Active = true;    
    this.CompanyInfoDonViDongGoiService.GetByParentIDAndActiveToListAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiService.List = (res as CompanyInfoDonViDongGoi[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiService.DataSource = new MatTableDataSource(this.CompanyInfoDonViDongGoiService.List);
        this.CompanyInfoDonViDongGoiService.DataSource.sort = this.CompanyInfoDonViDongGoiSort;
        this.CompanyInfoDonViDongGoiService.DataSource.paginator = this.CompanyInfoDonViDongGoiPaginator;        
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {        
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiDelete(element: CompanyInfoDonViDongGoi) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    element.Active = false;
    this.CompanyInfoDonViDongGoiService.FormData = element;
    this.CompanyInfoDonViDongGoiService.FormData.ParentID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    this.CompanyInfoDonViDongGoiService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiSearch();
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoDonViDongGoiAdd(ID: number) {
    this.CompanyInfoDonViDongGoiService.BaseParameter.ID = ID;
    this.CompanyInfoDonViDongGoiService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiService.FormData = res as CompanyInfoDonViDongGoi;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoCompanyInfoDonViDongGoiDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoDonViDongGoiSearch();
        });
      },
      err => {
      }
    );
  }
  CompanyInfoDonViDongGoiView(ID: number) {
    this.CompanyInfoDonViDongGoiService.BaseParameter.ID = ID;
    this.CompanyInfoDonViDongGoiService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiService.FormData = res as CompanyInfoDonViDongGoi;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoCompanyInfoDonViDongGoiViewComponent, dialogConfig);
        //const dialog = this.dialog.open(CoSoCompanyInfoDonViDongGoiViewComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }
}
