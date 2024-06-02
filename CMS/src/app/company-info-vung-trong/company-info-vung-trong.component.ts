import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfoVungTrong } from 'src/app/shared/CompanyInfoVungTrong.model';
import { CompanyInfoVungTrongService } from 'src/app/shared/CompanyInfoVungTrong.service';
//import { CoSoCompanyInfoVungTrongViewComponent } from '../co-so-CompanyInfoVungTrong-view/co-so-CompanyInfoVungTrong-view.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CompanyInfoVungTrongDetailComponent } from '../company-info-vung-trong-detail/company-info-vung-trong-detail.component';


@Component({
  selector: 'app-company-info-vung-trong',
  templateUrl: './company-info-vung-trong.component.html',
  styleUrls: ['./company-info-vung-trong.component.css']
})
export class CompanyInfoVungTrongComponent implements OnInit {

  @ViewChild('CompanyInfoVungTrongSort') CompanyInfoVungTrongSort: MatSort;
  @ViewChild('CompanyInfoVungTrongPaginator') CompanyInfoVungTrongPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoVungTrongService: CompanyInfoVungTrongService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
    this.CompanyInfoVungTrongSearch();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  CompanyInfoVungTrongSearch() {    
    this.CompanyInfoVungTrongService.IsShowLoading = true;    
    this.CompanyInfoVungTrongService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoVungTrongService.BaseParameter.Active = true;    
    this.CompanyInfoVungTrongService.GetByParentIDAndActiveToListAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongService.List = (res as CompanyInfoVungTrong[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.CompanyInfoVungTrongService.DataSource = new MatTableDataSource(this.CompanyInfoVungTrongService.List);
        this.CompanyInfoVungTrongService.DataSource.sort = this.CompanyInfoVungTrongSort;
        this.CompanyInfoVungTrongService.DataSource.paginator = this.CompanyInfoVungTrongPaginator;        
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {        
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongDelete(element: CompanyInfoVungTrong) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    element.Active = false;
    this.CompanyInfoVungTrongService.FormData = element;
    this.CompanyInfoVungTrongService.FormData.ParentID = this.CompanyInfoVungTrongService.FormData.ID;
    this.CompanyInfoVungTrongService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongSearch();
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoVungTrongAdd(ID: number) {
    this.CompanyInfoVungTrongService.BaseParameter.ID = ID;
    this.CompanyInfoVungTrongService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongService.FormData = res as CompanyInfoVungTrong;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoVungTrongDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoVungTrongSearch();
        });
      },
      err => {
      }
    );
  }
  CompanyInfoVungTrongView(ID: number) {
    this.CompanyInfoVungTrongService.BaseParameter.ID = ID;
    this.CompanyInfoVungTrongService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongService.FormData = res as CompanyInfoVungTrong;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoVungTrongDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }
}

