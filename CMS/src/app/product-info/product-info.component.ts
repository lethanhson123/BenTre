import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { ProductInfoService } from 'src/app/shared/ProductInfo.service';
import { ProductInfoDetailComponent } from '../product-info-detail/product-info-detail.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.css']
})
export class ProductInfoComponent implements OnInit {
  @ViewChild('ProductInfoSort') ProductInfoSort: MatSort;
  @ViewChild('ProductInfoPaginator') ProductInfoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,

    public ProductInfoService: ProductInfoService,
  ) {

  }

  ngOnInit(): void {
  }


  ProductInfoSearch() {
    this.ProductInfoService.SearchAllNotEmpty(this.ProductInfoSort, this.ProductInfoPaginator);
  }
  ProductInfoDelete(element: ProductInfo) {
    this.ProductInfoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProductInfoService.ComponentDeleteAllNotEmpty(this.ProductInfoSort, this.ProductInfoPaginator));
  }

  ProductInfoAdd(ID: number) {
    this.ProductInfoService.BaseParameter.ID = ID;
    this.ProductInfoService.GetByIDAsync().subscribe(
      res => {
        this.ProductInfoService.FormData = res as ProductInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ProductInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ProductInfoSearch();
        });
      },
      err => {
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
