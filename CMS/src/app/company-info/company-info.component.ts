import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';



import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';


@Component({
  selector: 'app-company-info',
  templateUrl: './company-info.component.html',
  styleUrls: ['./company-info.component.css']
})
export class CompanyInfoComponent implements OnInit {

  @ViewChild('CompanyInfoSort') CompanyInfoSort: MatSort;
  @ViewChild('CompanyInfoPaginator') CompanyInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,

    

    public CompanyInfoService: CompanyInfoService,
  ) {

  }

  ngOnInit(): void {
    this.CompanyInfoService.BaseParameter.ProvinceDataID = environment.ProvinceDataIDBenTre;
    this.CompanyInfoService.BaseParameter.DistrictDataID = environment.InitializationNumber;
    this.CompanyInfoService.BaseParameter.WardDataID = environment.InitializationNumber;
    this.DistrictDataSearch();
  }



  DistrictDataSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = this.CompanyInfoService.BaseParameter.ProvinceDataID;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.WardDataSearch();
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = this.CompanyInfoService.BaseParameter.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ParentID = environment.InitializationNumber;
    this.CompanyInfoService.BaseParameter.SearchString = this.CompanyInfoService.BaseParameter.SearchString.trim();
    this.CompanyInfoService.GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync().subscribe(
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