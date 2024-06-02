import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';
import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhCompanyProductGroup } from 'src/app/shared/PlanThamDinhCompanyProductGroup.model';
import { PlanThamDinhCompanyProductGroupService } from 'src/app/shared/PlanThamDinhCompanyProductGroup.service';
import { PlanThamDinhCompaniesDetailChuoiCungUngComponent } from '../plan-tham-dinh-companies-detail-chuoi-cung-ung/plan-tham-dinh-companies-detail-chuoi-cung-ung.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-chuoi-cung-ung',
  templateUrl: './plan-tham-dinh-companies-chuoi-cung-ung.component.html',
  styleUrls: ['./plan-tham-dinh-companies-chuoi-cung-ung.component.css']
})
export class PlanThamDinhCompaniesChuoiCungUngComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhCompanyProductGroupService: PlanThamDinhCompanyProductGroupService,
  ) { }

  ngOnInit(): void {
    this.DanhMucATTPXepLoaiSearch();
  }
  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ParentID = environment.PlanTypeIDChuoiCungUng;
    this.PlanThamDinhCompaniesService.BaseParameter.Nam = environment.InitializationNumber;
    this.PlanThamDinhCompaniesService.BaseParameter.SoDot = environment.InitializationNumber;
    this.PlanThamDinhCompaniesService.BaseParameter.Active = true;
    this.PlanThamDinhCompaniesService.GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));

        if (this.PlanThamDinhCompaniesService.List) {
          if (this.PlanThamDinhCompaniesService.List.length > 0) {
            for (let i = 0; i < this.PlanThamDinhCompaniesService.List.length; i++) {
              this.PlanThamDinhCompanyProductGroupSearch(i);
            }
          }
        }

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
        dialogConfig.data = { ID: this.PlanThamDinhCompaniesService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompaniesDetailChuoiCungUngComponent, dialogConfig);
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
  PlanThamDinhCompanyProductGroupSearch(i: number) {
    this.PlanThamDinhCompanyProductGroupService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.List[i].ID;
    this.PlanThamDinhCompanyProductGroupService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupService.List = (res as PlanThamDinhCompanyProductGroup[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompaniesService.List[i].ListPlanThamDinhCompanyProductGroup = this.PlanThamDinhCompanyProductGroupService.List;
      },
      err => {
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
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
}
