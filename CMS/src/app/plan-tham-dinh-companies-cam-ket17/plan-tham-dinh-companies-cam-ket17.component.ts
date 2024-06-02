import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';


import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-cam-ket17',
  templateUrl: './plan-tham-dinh-companies-cam-ket17.component.html',
  styleUrls: ['./plan-tham-dinh-companies-cam-ket17.component.css']
})
export class PlanThamDinhCompaniesCamKet17Component implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.DanhMucATTPXepLoaiSearch();
    this.DistrictDataSearch();
  }
  DatePlanThamDinhCompaniesNgayGhiNhan(element: PlanThamDinhCompanies, value) {
    element.NgayGhiNhan = new Date(value);
  }
  DatePlanThamDinhCompaniesNgayHetHan(element: PlanThamDinhCompanies, value) {
    element.NgayHetHan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }
  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  DistrictDataSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.WardDataSearch();
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.BaseParameter.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
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
          this.CompanyInfoSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  ChangeFileName(element: PlanThamDinhCompanies, files: FileList) {
    if (files) {
      this.PlanThamDinhCompaniesService.FileToUpload = files;
    }
  }
  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ParentID = environment.PlanTypeIDCamKet17;
    this.PlanThamDinhCompaniesService.BaseParameter.Active = true;
    this.PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync().subscribe(
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
  PlanThamDinhCompaniesSave(element: PlanThamDinhCompanies) {
    if (element) {
      if (element.ID > 0) {
        this.PlanThamDinhCompaniesService.FormData = element;
        this.PlanThamDinhCompaniesService.SaveAndUploadFileAsync().subscribe(
          res => {
            this.PlanThamDinhCompaniesSearch();
            this.NotificationService.warn(environment.SaveSuccess);
            this.PlanThamDinhCompaniesService.IsShowLoading = false;
          },
          err => {
            this.NotificationService.warn(environment.SaveNotSuccess);
            this.PlanThamDinhCompaniesService.IsShowLoading = false;
          }
        );
      }
      else {
        this.PlanThamDinhCompaniesService.IsShowLoading = true;
        this.PlanThamDinhService.BaseParameter.ID = environment.InitializationNumber;
        this.PlanThamDinhService.GetByIDAsync().subscribe(
          res => {
            this.PlanThamDinhService.FormData = res as PlanThamDinh;
            this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDCamKet17;
            this.PlanThamDinhService.SaveAsync().subscribe(
              res => {
                this.PlanThamDinhService.FormData = res as PlanThamDinh;
                if (this.PlanThamDinhService.FormData) {
                  if (this.PlanThamDinhService.FormData.ID > 0) {
                    this.PlanThamDinhCompaniesService.IsShowLoading = true;
                    element.ParentID = this.PlanThamDinhService.FormData.ID;
                    element.Code = this.PlanThamDinhService.FormData.Code;
                    this.PlanThamDinhCompaniesService.FormData = element;
                    this.PlanThamDinhCompaniesService.SaveAndUploadFileAsync().subscribe(
                      res => {
                        this.PlanThamDinhCompaniesSearch();
                        this.NotificationService.warn(environment.SaveSuccess);
                        this.PlanThamDinhCompaniesService.IsShowLoading = false;
                      },
                      err => {
                        this.NotificationService.warn(environment.SaveNotSuccess);
                        this.PlanThamDinhCompaniesService.IsShowLoading = false;
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
            this.PlanThamDinhCompaniesService.IsShowLoading = false;
          },
          err => {

            this.PlanThamDinhCompaniesService.IsShowLoading = false;
          }
        );
      }
    }
  }
  PlanThamDinhCompaniesDelete(element: PlanThamDinhCompanies) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompaniesService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesDownload() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DownloadService.BaseParameter.ParentID = environment.PlanTypeIDCamKet17;
    this.DownloadService.BaseParameter.Active = true;
    this.DownloadService.BaseParameter.DistrictDataID = this.PlanThamDinhCompaniesService.BaseParameter.DistrictDataID;
    this.DownloadService.BaseParameter.WardDataID = this.PlanThamDinhCompaniesService.BaseParameter.WardDataID;
    this.DownloadService.ExportCamKet17001ToExcelAsync().subscribe(
      res => {
        console.log(res);
        window.open(res.toString(), "_blank");
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
}
