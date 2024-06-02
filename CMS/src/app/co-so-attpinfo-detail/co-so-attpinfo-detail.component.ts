import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';


import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { ATTPInfoService } from 'src/app/shared/ATTPInfo.service';
import { ATTPInfoProductGroups } from 'src/app/shared/ATTPInfoProductGroups.model';
import { ATTPInfoProductGroupsService } from 'src/app/shared/ATTPInfoProductGroups.service';
import { ATTPInfoDocuments } from 'src/app/shared/ATTPInfoDocuments.model';
import { ATTPInfoDocumentsService } from 'src/app/shared/ATTPInfoDocuments.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-attpinfo-detail',
  templateUrl: './co-so-attpinfo-detail.component.html',
  styleUrls: ['./co-so-attpinfo-detail.component.css']
})
export class CoSoATTPInfoDetailComponent implements OnInit {

  @ViewChild('ATTPInfoProductGroupsSort') ATTPInfoProductGroupsSort: MatSort;
  @ViewChild('ATTPInfoProductGroupsPaginator') ATTPInfoProductGroupsPaginator: MatPaginator;

  @ViewChild('ATTPInfoDocumentsSort') ATTPInfoDocumentsSort: MatSort;
  @ViewChild('ATTPInfoDocumentsPaginator') ATTPInfoDocumentsPaginator: MatPaginator;


  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CoSoATTPInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,

    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,

    public ATTPInfoService: ATTPInfoService,
    public ATTPInfoProductGroupsService: ATTPInfoProductGroupsService,
    public ATTPInfoDocumentsService: ATTPInfoDocumentsService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ProductGroupSearch();
    this.DanhMucATTPLoaiHoSoSearch();
    this.ATTPInfoDocumentsSearch();
    this.ATTPInfoProductGroupsSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.ComponentGetAllToListAsync();
  }

  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  ATTPInfoDocumentsSearch() {
    this.ATTPInfoService.IsShowLoading = true;
    this.ATTPInfoDocumentsService.BaseParameter.SearchString = this.ATTPInfoService.FormData.Code;
    this.ATTPInfoDocumentsService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.ATTPInfoDocumentsService.List = (res as ATTPInfoDocuments[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ATTPInfoDocumentsService.DataSource = new MatTableDataSource(this.ATTPInfoDocumentsService.List);
        this.ATTPInfoDocumentsService.DataSource.sort = this.ATTPInfoDocumentsSort;
        this.ATTPInfoDocumentsService.DataSource.paginator = this.ATTPInfoDocumentsPaginator;       
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }
  ATTPInfoDocumentsSave(element: ATTPInfoDocuments) {
    this.ATTPInfoService.IsShowLoading = true;
    element.ParentID = this.ATTPInfoService.FormData.ID;
    element.Code = this.ATTPInfoService.FormData.Code;
    this.ATTPInfoDocumentsService.FormData = element;
    this.ATTPInfoDocumentsService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.ATTPInfoDocumentsService.FormData = (res as ATTPInfoDocuments);
        this.ATTPInfoDocumentsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }


  ChangeFileName(element: ATTPInfoDocuments, files: FileList) {
    if (files) {
      this.ATTPInfoDocumentsService.FileToUpload = files;
      this.ATTPInfoDocumentsSave(element);
    }
  }

  ATTPInfoProductGroupsSearch() {
    this.ATTPInfoService.IsShowLoading = true;
    this.ATTPInfoProductGroupsService.BaseParameter.SearchString = this.ATTPInfoService.FormData.Code;
    this.ATTPInfoProductGroupsService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.ATTPInfoProductGroupsService.List = (res as ATTPInfoProductGroups[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ATTPInfoProductGroupsService.DataSource = new MatTableDataSource(this.ATTPInfoProductGroupsService.List);
        this.ATTPInfoProductGroupsService.DataSource.sort = this.ATTPInfoProductGroupsSort;
        this.ATTPInfoProductGroupsService.DataSource.paginator = this.ATTPInfoProductGroupsPaginator;
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }
  ATTPInfoProductGroupsSave(element: ATTPInfoProductGroups) {
    this.ATTPInfoService.IsShowLoading = true;
    element.ParentID = this.ATTPInfoService.FormData.ID;
    element.Code = this.ATTPInfoService.FormData.Code;
    this.ATTPInfoProductGroupsService.FormData = element;
    this.ATTPInfoProductGroupsService.SaveAsync().subscribe(
      res => {
        this.ATTPInfoProductGroupsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }
  ATTPInfoProductGroupsDelete(element: ATTPInfoProductGroups) {
    this.ATTPInfoService.IsShowLoading = true;
    this.ATTPInfoProductGroupsService.BaseParameter.ID = element.ID;
    this.ATTPInfoProductGroupsService.RemoveAsync().subscribe(
      res => {
        this.ATTPInfoProductGroupsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.ATTPInfoService.IsShowLoading = false;
      }
    );
  }

  ATTPInfoSave() {
    this.ATTPInfoService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.NotificationService.warn(this.ATTPInfoService.ComponentSaveForm());
  }

  Close() {
    this.dialogRef.close();
  }
}
