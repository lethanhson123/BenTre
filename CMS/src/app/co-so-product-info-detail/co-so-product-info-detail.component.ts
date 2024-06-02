import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { ProductInfoService } from 'src/app/shared/ProductInfo.service';

import { ProductInfoDocuments } from 'src/app/shared/ProductInfoDocuments.model';
import { ProductInfoDocumentsService } from 'src/app/shared/ProductInfoDocuments.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-product-info-detail',
  templateUrl: './co-so-product-info-detail.component.html',
  styleUrls: ['./co-so-product-info-detail.component.css']
})
export class CoSoProductInfoDetailComponent implements OnInit {

  @ViewChild('ProductInfoDocumentsSort') ProductInfoDocumentsSort: MatSort;
  @ViewChild('ProductInfoDocumentsPaginator') ProductInfoDocumentsPaginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<CoSoProductInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductInfoService: ProductInfoService,
    public ProductInfoDocumentsService: ProductInfoDocumentsService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
    this.ProductInfoDocumentsSearch();
  }
  DateNgayGhiNhan(value) {
    this.ProductInfoService.FormData.NgayGhiNhan = new Date(value);
  }

  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  ProductInfoSave() {
    this.ProductInfoService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.ProductInfoService.IsShowLoading = true;
    this.ProductInfoService.SaveAsync().subscribe(
      res => {
        this.ProductInfoService.FormData = res as ProductInfo;
        if (this.ProductInfoService.FormData) {
          if (this.ProductInfoService.FormData.ID) {
            if (this.ProductInfoDocumentsService.FileToUpload) {
              if (this.ProductInfoDocumentsService.FileToUpload.length > 0) {

                this.ProductInfoService.IsShowLoading = true;
                this.ProductInfoDocumentsService.FormData.ParentID = this.ProductInfoService.FormData.ID;
                this.ProductInfoDocumentsService.FormData.Name = this.ProductInfoService.FormData.Name;
                this.ProductInfoDocumentsService.FormData.Code = this.ProductInfoService.FormData.Code;
                this.ProductInfoDocumentsService.SaveAndUploadFilesAsync().subscribe(
                  res => {
                    this.ProductInfoDocumentsSearch();
                    this.ProductInfoService.IsShowLoading = false;
                  },
                  err => {
                    this.ProductInfoService.IsShowLoading = false;
                  }
                );

              }
            }
          }
        }
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
      this.ProductInfoDocumentsService.FileToUpload = files;
    }
  }  
  ProductInfoDocumentsSearch() {
    this.ProductInfoService.IsShowLoading = true;
    this.ProductInfoDocumentsService.BaseParameter.ParentID = this.ProductInfoService.FormData.ID;
    this.ProductInfoDocumentsService.GetByParentIDAndEmptyToListAsync().subscribe(
      res => {
        this.ProductInfoDocumentsService.List = (res as ProductInfoDocuments[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.ProductInfoDocumentsService.DataSource = new MatTableDataSource(this.ProductInfoDocumentsService.List);
        this.ProductInfoDocumentsService.DataSource.sort = this.ProductInfoDocumentsSort;
        this.ProductInfoDocumentsService.DataSource.paginator = this.ProductInfoDocumentsPaginator;
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }
  ProductInfoDocumentsSave(element: ProductInfoDocuments) {
    this.ProductInfoService.IsShowLoading = true;
    element.ParentID = this.ProductInfoService.FormData.ID;
    element.Name = this.ProductInfoService.FormData.Name;
    element.Code = this.ProductInfoService.FormData.Code;
    this.ProductInfoDocumentsService.FormData = element;
    this.ProductInfoDocumentsService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.ProductInfoDocumentsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.ProductInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ProductInfoService.IsShowLoading = false;
      }
    );
  }
  ProductInfoDocumentsDelete(element: ProductInfoDocuments) {
    if (confirm(environment.DeleteConfirm)) {
      this.ProductInfoService.IsShowLoading = true;
      this.ProductInfoDocumentsService.BaseParameter.ID = element.ID;
      this.ProductInfoDocumentsService.RemoveAsync().subscribe(
        res => {
          this.ProductInfoDocumentsSearch();
          this.NotificationService.warn(environment.SaveSuccess);
          this.ProductInfoService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.SaveNotSuccess);
          this.ProductInfoService.IsShowLoading = false;
        }
      );
    }
  }
  Close() {
    this.dialogRef.close();
  }
}
