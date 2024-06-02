import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MailService } from 'src/app/shared/Mail.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';


import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from '../plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham/plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';
import { CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from '../co-so-plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham/co-so-plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';

@Component({
  selector: 'app-co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham',
  templateUrl: './co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham.component.html',
  styleUrls: ['./co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham.component.css']
})
export class CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent implements OnInit {

  @ViewChild('PlanThamDinhSort') PlanThamDinhSort: MatSort;
  @ViewChild('PlanThamDinhPaginator') PlanThamDinhPaginator: MatPaginator;



  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public MailService: MailService,

    public CompanyInfoService: CompanyInfoService,
    public ThanhVienService: ThanhVienService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,



  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  PlanThamDinhSearch() {
    if (this.PlanThamDinhService.BaseParameter.SearchString.length > 0) {
      this.PlanThamDinhService.BaseParameter.SearchString = this.PlanThamDinhService.BaseParameter.SearchString.trim();
      this.PlanThamDinhService.DataSource.filter = this.PlanThamDinhService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.PlanThamDinhService.IsShowLoading = true;
      this.PlanThamDinhService.BaseParameter.ParentID = environment.PlanTypeIDChuoiCungUng;
      this.PlanThamDinhService.BaseParameter.Active = true;
      this.PlanThamDinhService.GetByParentID_Nam_SoDot_ActiveToListAsync().subscribe(
        res => {
          this.PlanThamDinhService.List = (res as PlanThamDinh[]).sort((a, b) => (a.NgayBatDau < b.NgayBatDau ? 1 : -1));
          this.PlanThamDinhService.DataSource = new MatTableDataSource(this.PlanThamDinhService.List);
          this.PlanThamDinhService.DataSource.sort = this.PlanThamDinhSort;
          this.PlanThamDinhService.DataSource.paginator = this.PlanThamDinhPaginator;
          this.PlanThamDinhService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }
  }

  PlanThamDinhCopy(element: PlanThamDinh) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData = element;
    this.PlanThamDinhService.CopyAsync().subscribe(
      res => {
        this.PlanThamDinhSearch();
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDelete(element: PlanThamDinh) {
    if (confirm(environment.DeleteConfirm)) {
      this.PlanThamDinhService.IsShowLoading = true;
      element.Active = false;
      this.PlanThamDinhService.FormData = element;
      this.PlanThamDinhService.SaveAsync().subscribe(
        res => {
          this.NotificationService.warn(environment.DeleteSuccess);
          this.PlanThamDinhSearch();
          this.PlanThamDinhService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.DeleteNotSuccess);
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }
  }
  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
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
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDChuoiCungUng;
        this.PlanThamDinhService.FormData.CompanyInfoID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

}
