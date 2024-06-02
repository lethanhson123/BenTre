import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';
import { ProductUnit } from 'src/app/shared/ProductUnit.model';
import { ProductUnitService } from 'src/app/shared/ProductUnit.service';


import { DanhMucQuocGia } from 'src/app/shared/DanhMucQuocGia.model';
import { DanhMucQuocGiaService } from 'src/app/shared/DanhMucQuocGia.service';

import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { ProductInfoService } from 'src/app/shared/ProductInfo.service';
import { eventNames } from 'process';

import { CompanyGroup } from 'src/app/shared/CompanyGroup.model';
import { CompanyGroupService } from 'src/app/shared/CompanyGroup.service';

import { TapTinDinhKem } from 'src/app/shared/TapTinDinhKem.model';
import { TapTinDinhKemService } from 'src/app/shared/TapTinDinhKem.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

@Component({
  selector: 'app-tu-cong-bo-san-pham-detail',
  templateUrl: './tu-cong-bo-san-pham-detail.component.html',
  styleUrls: ['./tu-cong-bo-san-pham-detail.component.css']
})
export class TuCongBoSanPhamDetailComponent implements OnInit {
  @ViewChild('TapTinDinhKemSort') TapTinDinhKemSort: MatSort;
  @ViewChild('TapTinDinhKemPaginator') TapTinDinhKemPaginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<TuCongBoSanPhamDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,
    public ProductUnitService: ProductUnitService,

    public DanhMucQuocGiaService: DanhMucQuocGiaService,

    public ProductInfoService: ProductInfoService,

    public CompanyGroupService: CompanyGroupService,

    public TapTinDinhKemService: TapTinDinhKemService,

    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,

  ) {

  }

  ngOnInit(): void {
    this.ProductGroupSearch();
    this.ProductUnitSearch();
    this.DanhMucQuocGiaSearch();
    this.ProductInfoService.FormData.DanhMucQuocGiaID= environment.DanhMucQuocGiaIDVietNam;
    this.CompanyGroupSearch();
    this.TapTinDinhKemSearch();
    this.DanhMucATTPXepLoaiSearch();
  }

  TapTinDinhKemSearch() {
    if (this.TapTinDinhKemService.BaseParameter.SearchString.length > 0) {
      this.TapTinDinhKemService.DataSource.filter = this.TapTinDinhKemService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.TapTinDinhKemService.IsShowLoading = true;
      this.TapTinDinhKemService.GetAllAndEmptyToListAsync().subscribe(
        res => {
          this.TapTinDinhKemService.List = (res as TapTinDinhKem[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.TapTinDinhKemService.ListFilter = this.TapTinDinhKemService.List.filter(item => item.ParentID == 0);
          this.TapTinDinhKemService.DataSource = new MatTableDataSource(this.TapTinDinhKemService.List);
          this.TapTinDinhKemService.DataSource.sort = this.TapTinDinhKemSort;
          this.TapTinDinhKemService.DataSource.paginator = this.TapTinDinhKemPaginator;
          this.TapTinDinhKemService.IsShowLoading = false;
        },
        err => {
          this.TapTinDinhKemService.IsShowLoading = false;
        }
      );
    }
  }
  TapTinDinhKemSave(element: TapTinDinhKem) {
    this.TapTinDinhKemService.IsShowLoading = true;
    this.TapTinDinhKemService.FormData = element;    
    this.TapTinDinhKemService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.TapTinDinhKemService.FileToUpload = null;        
        this.TapTinDinhKemSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.TapTinDinhKemService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.TapTinDinhKemService.IsShowLoading = false;
      }
    );
  }
  TapTinDinhKemDelete(element: TapTinDinhKem) {
    this.TapTinDinhKemService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.TapTinDinhKemService.ComponentDeleteAll(this.TapTinDinhKemSort, this.TapTinDinhKemPaginator));
  }
  
  ChangeFileNameTapTinDinhKem(element: TapTinDinhKem, files: FileList) {
    if (files) {
      this.TapTinDinhKemService.FileToUpload = files;
    }
  }

  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }

  CompanyGroupSearch() {
    this.CompanyGroupService.ComponentGetAllToListAsync();
  }

  Datecongbo_date(value) {
    this.ProductInfoService.FormData.congbo_date = new Date(value);
  }

  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  ProductUnitSearch() {
    this.ProductUnitService.ComponentGetAllToListAsync();
  }

  DanhMucQuocGiaSearch() {
    this.DanhMucQuocGiaService.ComponentGetAllToListAsync();
  }
  DanhMucQuocGiaFilter(searchString: string) {
    this.DanhMucQuocGiaService.Filter(searchString);
  }

  ProductInfoSave() {
    this.ProductInfoService.FormData.ParentID= environment.CompanyInfoID;
    this.ProductInfoService.IsShowLoading = true;
    this.ProductInfoService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.ProductInfoService.FormData = res as ProductInfo;
        this.NotificationService.warn(environment.SaveSuccess);
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }

  
  ChangeFileName(files: FileList) {
    if (files) {
      this.ProductInfoService.FileToUpload = files;
    }
  }

  Close() {
    this.dialogRef.close();
  }

}
