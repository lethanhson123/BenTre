import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-giam-sat-du-luong',
  templateUrl: './plan-tham-dinh-companies-giam-sat-du-luong.component.html',
  styleUrls: ['./plan-tham-dinh-companies-giam-sat-du-luong.component.css']
})
export class PlanThamDinhCompaniesGiamSatDuLuongComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
  ) { }

  ngOnInit(): void {
    this.PlanThamDinhCompaniesService.BaseParameter.Nam = new Date().getFullYear();
    this.PlanThamDinhCompaniesService.BaseParameter.Thang = new Date().getMonth() + 1;
  }

  PlanThamDinhCompaniesDownload() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DownloadService.BaseParameter.ParentID = environment.PlanTypeIDGiamSatDuLuong;
    this.DownloadService.BaseParameter.Active = true;
    this.DownloadService.BaseParameter.Nam = this.PlanThamDinhCompaniesService.BaseParameter.Nam;
    this.DownloadService.BaseParameter.Thang = this.PlanThamDinhCompaniesService.BaseParameter.Thang;
    this.DownloadService.ExportGiamSatDuLuong001ToExcelAsync().subscribe(
      res => {        
        window.open(res.toString(), "_blank");
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ParentID = environment.PlanTypeIDGiamSatDuLuong;
    this.PlanThamDinhCompaniesService.BaseParameter.Active = true;
    this.PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));

        this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.List);
        this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesDelete(element: PlanThamDinhCompanies) {
    if (confirm(environment.DeleteConfirm)) {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompaniesService.BaseParameter.ID = element.ID;
      this.PlanThamDinhCompaniesService.RemoveAsync().subscribe(
        res => {
          this.NotificationService.warn(environment.DeleteSuccess);
          this.PlanThamDinhCompaniesSearch();
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.DeleteNotSuccess);
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        }
      );
    }
  }

  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
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
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
}
