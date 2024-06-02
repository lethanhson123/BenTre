import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { ProductInfoService } from 'src/app/shared/ProductInfo.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';


import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ProductInfoDetailComponent } from '../product-info-detail/product-info-detail.component';
import { CoSoProductInfoDetailComponent } from '../co-so-product-info-detail/co-so-product-info-detail.component';
import { ProductInfoDetail001Component } from '../product-info-detail001/product-info-detail001.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';

@Component({
  selector: 'app-product-info001',
  templateUrl: './product-info001.component.html',
  styleUrls: ['./product-info001.component.css']
})
export class ProductInfo001Component implements OnInit {

  @ViewChild('ProductInfoSort') ProductInfoSort: MatSort;
  @ViewChild('ProductInfoPaginator') ProductInfoPaginator: MatPaginator;

  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,
    public ProductInfoService: ProductInfoService,

    public CompanyInfoService: CompanyInfoService,
    public ThanhVienService: ThanhVienService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,

  ) {

  }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  DateBatDau(value) {
    this.ProductInfoService.BaseParameter.BatDau = new Date(value);
  }
  DateKetThuc(value) {
    this.ProductInfoService.BaseParameter.KetThuc = new Date(value);
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.ProductInfoService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanTypeID = environment.PlanTypeIDTuCongBoSanPham;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanTypeID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        this.PlanThamDinhCompanyDocumentService.FormData.CreatedDate = this.ProductInfoService.BaseParameter.BatDau;
        this.PlanThamDinhCompanyDocumentService.FormData.LastUpdatedDate = this.ProductInfoService.BaseParameter.KetThuc;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.ProductInfoService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }
  ProductInfoSearch() {
    if (this.ProductInfoService.BaseParameter.SearchString.length > 0) {
      this.ProductInfoService.BaseParameter.SearchString = this.ProductInfoService.BaseParameter.SearchString.trim();
      this.ProductInfoService.DataSource.filter = this.ProductInfoService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.ProductInfoService.IsShowLoading = true;
      this.ProductInfoService.GetByBatDau_KetThucToListAsync().subscribe(
        res => {
          this.ProductInfoService.List = (res as ProductInfo[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));
          this.ProductInfoService.DataSource = new MatTableDataSource(this.ProductInfoService.List);
          this.ProductInfoService.DataSource.sort = this.ProductInfoSort;
          this.ProductInfoService.DataSource.paginator = this.ProductInfoPaginator;
          this.ProductInfoService.IsShowLoading = false;
        },
        err => {
          this.ProductInfoService.IsShowLoading = false;
        }
      );
    }
  }
  ProductInfoDelete(element: ProductInfo) {
    this.ProductInfoService.IsShowLoading = true;
    this.ProductInfoService.BaseParameter.ID = element.ID;
    this.ProductInfoService.RemoveAsync().subscribe(
      res => {
        this.ProductInfoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }

  ProductInfoAdd(ID: number) {
    this.ProductInfoService.IsShowLoading = true;
    this.ProductInfoService.BaseParameter.ID = ID;
    this.ProductInfoService.GetByIDAsync().subscribe(
      res => {
        this.ProductInfoService.FormData = res as ProductInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ProductInfoDetail001Component, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ProductInfoSearch();
        });
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.ProductInfoService.IsShowLoading = true;
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
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }
}
