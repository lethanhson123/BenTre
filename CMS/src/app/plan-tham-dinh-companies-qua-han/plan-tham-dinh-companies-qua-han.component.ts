import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';


import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { PlanThamDinhCompaniesDetailComponent } from '../plan-tham-dinh-companies-detail/plan-tham-dinh-companies-detail.component';
import { PlanThamDinhDetailComponent } from '../plan-tham-dinh-detail/plan-tham-dinh-detail.component';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

@Component({
  selector: 'app-plan-tham-dinh-companies-qua-han',
  templateUrl: './plan-tham-dinh-companies-qua-han.component.html',
  styleUrls: ['./plan-tham-dinh-companies-qua-han.component.css']
})
export class PlanThamDinhCompaniesQuaHanComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,
    public DistrictDataService: DistrictDataService,
    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
  ) { }

  ngOnInit(): void {
    this.ComponentGetListNam();
    this.ComponentGetListThang();
    this.DistrictDataSearch();    

  }
  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }

  ComponentGetListThang() {
    this.DownloadService.ComponentGetListThang();
  }
  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.PlanThamDinhCompaniesService.GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.ListQuaHan = (res as PlanThamDinhCompanies[]);
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
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;

        if (this.PlanThamDinhCompaniesService.ListQuaHan) {
          if (this.PlanThamDinhCompaniesService.ListQuaHan.length > 0) {
            for (let i = 0; i < this.PlanThamDinhCompaniesService.ListQuaHan.length; i++) {
              if (this.PlanThamDinhCompaniesService.ListQuaHan[i].Active == true) {
                this.PlanThamDinhCompaniesService.FormData = {
                  ID: environment.InitializationNumber,
                  ParentID: this.PlanThamDinhService.FormData.ID,
                  Code: this.PlanThamDinhService.FormData.Code,
                  CompanyInfoID: this.PlanThamDinhCompaniesService.ListQuaHan[i].CompanyInfoID,
                  DanhMucATTPLoaiHoSoID: 2,
                  CompanyInfo: {},
                  ListPlanThamDinhCompanyProductGroup: []
                };
                this.PlanThamDinhCompaniesService.ListFilter.push(this.PlanThamDinhCompaniesService.FormData);
              }
            }
            this.PlanThamDinhCompaniesService.SaveListAsync(this.PlanThamDinhCompaniesService.ListFilter).subscribe(
              res => {
                const dialogConfig = new MatDialogConfig();
                dialogConfig.disableClose = true;
                dialogConfig.autoFocus = true;
                dialogConfig.width = environment.DialogConfigWidth;
                dialogConfig.data = { ID: ID };
                const dialog = this.dialog.open(PlanThamDinhDetailComponent, dialogConfig);
                dialog.afterClosed().subscribe(() => {
                  this.PlanThamDinhCompaniesSearch();
                });
              },
              err => {
              }
            );
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
