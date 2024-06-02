import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { ATTPInfoService } from 'src/app/shared/ATTPInfo.service';
import { CoSoATTPInfoDetailComponent } from '../co-so-attpinfo-detail/co-so-attpinfo-detail.component';
import { CoSoATTPInfoViewComponent } from '../co-so-attpinfo-view/co-so-attpinfo-view.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-attpinfo',
  templateUrl: './co-so-attpinfo.component.html',
  styleUrls: ['./co-so-attpinfo.component.css']
})
export class CoSoATTPInfoComponent implements OnInit {

  @ViewChild('ATTPInfoSort') ATTPInfoSort: MatSort;
  @ViewChild('ATTPInfoPaginator') ATTPInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoService: ATTPInfoService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  ATTPInfoSearch() {    
    this.ATTPInfoService.IsShowLoading = true;    
    this.ATTPInfoService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.ATTPInfoService.BaseParameter.Active = true;    
    this.ATTPInfoService.GetByParentIDAndActiveToListAsync().subscribe(
      res => {
        this.ATTPInfoService.List = (res as ATTPInfo[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
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
        const dialog = this.dialog.open(CoSoATTPInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ATTPInfoSearch();
        });
      },
      err => {
      }
    );
  }
  ATTPInfoView(ID: number) {
    this.ATTPInfoService.BaseParameter.ID = ID;
    this.ATTPInfoService.GetByIDAsync().subscribe(
      res => {
        this.ATTPInfoService.FormData = res as ATTPInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoATTPInfoViewComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }
}
