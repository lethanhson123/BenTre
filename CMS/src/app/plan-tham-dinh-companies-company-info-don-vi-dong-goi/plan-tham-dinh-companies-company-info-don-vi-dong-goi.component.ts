import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MailService } from 'src/app/shared/Mail.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';


import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { CoSoMapDetailComponent } from '../co-so-map-detail/co-so-map-detail.component';
import { PlanThamDinhCompaniesDetailComponent } from '../plan-tham-dinh-companies-detail/plan-tham-dinh-companies-detail.component';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent } from '../plan-tham-dinh-companies-detail-company-info-don-vi-dong-goi/plan-tham-dinh-companies-detail-company-info-don-vi-dong-goi.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-company-info-don-vi-dong-goi',
  templateUrl: './plan-tham-dinh-companies-company-info-don-vi-dong-goi.component.html',
  styleUrls: ['./plan-tham-dinh-companies-company-info-don-vi-dong-goi.component.css']
})
export class PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent implements OnInit {
  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public MailService: MailService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
  ) { }

  ngOnInit(): void {
    this.PlanThamDinhCompanyDocumentSearch();
    this.PlanThamDinhCompaniesSearch();    
  }

  PlanThamDinhCompanyDocumentAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = ID;
    this.PlanThamDinhCompanyDocumentService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;        
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.PlanThamDinhCompaniesService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhCompanyDocumentSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSearch() {
    if (this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString.length > 0) {
      this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString = this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString.trim();
      this.PlanThamDinhCompanyDocumentService.DataSource.filter = this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
      this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhIDToListAsync().subscribe(
        res => {
          this.PlanThamDinhCompanyDocumentService.ListPlanThamDinh = (res as PlanThamDinhCompanyDocument[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.ListPlanThamDinh);
          this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh.sort = this.PlanThamDinhCompanyDocumentSort;
          this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh.paginator = this.PlanThamDinhCompanyDocumentPaginator;
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        }
      );
    }

  }
  ChangeFileName(files: FileList) {
    if (files) {
      this.PlanThamDinhCompanyDocumentService.FileToUpload = files;
    }
  }
  PlanThamDinhCompaniesSearch() {
    if (this.PlanThamDinhCompaniesService.BaseParameter.SearchString.length > 0) {
      this.PlanThamDinhCompaniesService.BaseParameter.SearchString = this.PlanThamDinhCompaniesService.BaseParameter.SearchString.trim();
      this.PlanThamDinhCompaniesService.DataSource.filter = this.PlanThamDinhCompaniesService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompaniesService.BaseParameter.ParentID = this.PlanThamDinhService.FormData.ID;
      this.PlanThamDinhCompaniesService.GetByParentIDToListAsync().subscribe(
        res => {
          this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));

          this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.List);
          this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
          this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;

          if (this.PlanThamDinhCompaniesService.List) {
            if (this.PlanThamDinhCompaniesService.List.length > 0) {
              for (let i = 0; i < this.PlanThamDinhCompaniesService.List.length; i++) {
                this.CompanyInfoService.BaseParameter.ID = this.PlanThamDinhCompaniesService.List[i].CompanyInfoID;
                this.CompanyInfoService.GetByIDAsync().subscribe(
                  res => {
                    this.PlanThamDinhCompaniesService.List[i].CompanyInfo = (res as CompanyInfo);
                  },
                  err => {
                  }
                );
              }
            }
          }

          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        },
        err => {
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
  CoSoMapDetailAdd(ID: number) {
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
        const dialog = this.dialog.open(CoSoMapDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
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
        const dialog = this.dialog.open(PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent, dialogConfig);
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

  MailAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.MailService.BaseParameter.ID = ID;
    this.MailService.AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync().subscribe(
      res => {       
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }
}