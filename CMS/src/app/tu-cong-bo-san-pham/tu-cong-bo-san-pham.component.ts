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
import { TuCongBoSanPhamDetailComponent } from '../tu-cong-bo-san-pham-detail/tu-cong-bo-san-pham-detail.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-tu-cong-bo-san-pham',
  templateUrl: './tu-cong-bo-san-pham.component.html',
  styleUrls: ['./tu-cong-bo-san-pham.component.css']
})
export class TuCongBoSanPhamComponent implements OnInit {

  @ViewChild('ProductInfoSort') ProductInfoSort: MatSort;
  @ViewChild('ProductInfoPaginator') ProductInfoPaginator: MatPaginator;

  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public ProductInfoService: ProductInfoService,

    public ThanhVienService: ThanhVienService,
  ) {

  }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  ProductInfoSearch() {
    this.ProductInfoService.SearchAll(this.ProductInfoSort, this.ProductInfoPaginator);
  }
  ProductInfoDelete(element: ProductInfo) {
    this.ProductInfoService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.ProductInfoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProductInfoService.ComponentDeleteByParentIDNotEmpty(this.ProductInfoSort, this.ProductInfoPaginator));
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
        const dialog = this.dialog.open(TuCongBoSanPhamDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ProductInfoSearch();
        });
      },
      err => {
      }
    );
  }

}
