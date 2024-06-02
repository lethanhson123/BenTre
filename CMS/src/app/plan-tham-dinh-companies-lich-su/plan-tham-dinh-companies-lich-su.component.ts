import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';


import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';


import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { PlanThamDinhCompaniesDetailComponent } from '../plan-tham-dinh-companies-detail/plan-tham-dinh-companies-detail.component';


@Component({
  selector: 'app-plan-tham-dinh-companies-lich-su',
  templateUrl: './plan-tham-dinh-companies-lich-su.component.html',
  styleUrls: ['./plan-tham-dinh-companies-lich-su.component.css']
})
export class PlanThamDinhCompaniesLichSuComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.GetByCompanyInfoIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.ListQuaHan = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));
        this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.ListQuaHan);
        this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
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
          this.PlanThamDinhCompaniesSearch();
        });
      },
      err => {
      }
    );
  }
  PlanThamDinhCompaniesAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = ID;
    this.PlanThamDinhCompaniesService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.FormData = res as PlanThamDinhCompanies;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhCompaniesDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhCompaniesSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
}
