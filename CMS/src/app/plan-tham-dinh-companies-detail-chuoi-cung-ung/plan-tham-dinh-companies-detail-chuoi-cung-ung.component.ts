import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';

import { PlanThamDinhCompanyProductGroup } from 'src/app/shared/PlanThamDinhCompanyProductGroup.model';
import { PlanThamDinhCompanyProductGroupService } from 'src/app/shared/PlanThamDinhCompanyProductGroup.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-companies-detail-chuoi-cung-ung',
  templateUrl: './plan-tham-dinh-companies-detail-chuoi-cung-ung.component.html',
  styleUrls: ['./plan-tham-dinh-companies-detail-chuoi-cung-ung.component.css']
})
export class PlanThamDinhCompaniesDetailChuoiCungUngComponent implements OnInit {

  @ViewChild('PlanThamDinhCompanyProductGroupSort') PlanThamDinhCompanyProductGroupSort: MatSort;
  @ViewChild('PlanThamDinhCompanyProductGroupPaginator') PlanThamDinhCompanyProductGroupPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompaniesDetailChuoiCungUngComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
    public ProductGroupService: ProductGroupService,

    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhCompanyProductGroupService: PlanThamDinhCompanyProductGroupService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,

  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.DanhMucATTPXepLoaiSearch();
    this.ProductGroupSearch();
    this.PlanThamDinhCompanyProductGroupSearch();
    this.PlanThamDinhCompanyDocumentSearch();
  }

  DateNgayGhiNhan(value) {
    this.PlanThamDinhCompaniesService.FormData.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }


  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  PlanThamDinhCompanyProductGroupSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyProductGroupService.BaseParameter.SearchString = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhCompanyProductGroupService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupService.List = (res as PlanThamDinhCompanyProductGroup[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyProductGroupService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyProductGroupService.List);
        this.PlanThamDinhCompanyProductGroupService.DataSource.sort = this.PlanThamDinhCompanyProductGroupSort;
        this.PlanThamDinhCompanyProductGroupService.DataSource.paginator = this.PlanThamDinhCompanyProductGroupPaginator;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyProductGroupSave(element: PlanThamDinhCompanyProductGroup) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    element.Code = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhCompanyProductGroupService.FormData = element;
    this.PlanThamDinhCompanyProductGroupService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyProductGroupDelete(element: PlanThamDinhCompanyProductGroup) {
    if (confirm(environment.DeleteConfirm)) {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompanyProductGroupService.BaseParameter.ID = element.ID;
      this.PlanThamDinhCompanyProductGroupService.RemoveAsync().subscribe(
        res => {
          this.PlanThamDinhCompanyProductGroupSearch();
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

  PlanThamDinhCompanyDocumentSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.List = (res as PlanThamDinhCompanyDocument[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyDocumentService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.List);
        this.PlanThamDinhCompanyDocumentService.DataSource.sort = this.PlanThamDinhCompanyDocumentSort;
        this.PlanThamDinhCompanyDocumentService.DataSource.paginator = this.PlanThamDinhCompanyDocumentPaginator;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSave(element: PlanThamDinhCompanyDocument) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    element.Code = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.FormData = element;
    this.PlanThamDinhCompanyDocumentService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentDelete(element: PlanThamDinhCompanyDocument) {
    if (confirm(environment.DeleteConfirm)) {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompanyProductGroupService.BaseParameter.ID = element.ID;
      this.PlanThamDinhCompanyProductGroupService.RemoveAsync().subscribe(
        res => {
          this.PlanThamDinhCompanyDocumentSearch();
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
  PlanThamDinhCompanyDocumentAddByID(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = ID;
    this.PlanThamDinhCompanyDocumentService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhCompanyDocumentSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  
  ChangeFileName(element: PlanThamDinhCompanyDocument, files: FileList) {
    if (files) {
      this.PlanThamDinhCompanyDocumentService.FileToUpload = files;
    }
  }




  PlanThamDinhCompaniesSave() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;

    if (this.PlanThamDinhCompaniesService.FormData.ParentID > 0) {
      this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
        res => {
          this.PlanThamDinhCompaniesService.FormData = res as PlanThamDinhCompanies;
          this.PlanThamDinhCompanyDocumentSearch();
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
      this.PlanThamDinhService.BaseParameter.ID = environment.InitializationNumber;
      this.PlanThamDinhService.GetByIDAsync().subscribe(
        res => {
          this.PlanThamDinhService.FormData = res as PlanThamDinh;
          this.PlanThamDinhService.FormData.Code = this.PlanThamDinhCompaniesService.FormData.Code;
          this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDChuoiCungUng;
          this.PlanThamDinhService.FormData.Nam = environment.InitializationNumber;
          this.PlanThamDinhService.FormData.SoDot = environment.InitializationNumber;
          this.PlanThamDinhService.SaveAsync().subscribe(
            res => {
              this.PlanThamDinhService.FormData = res as PlanThamDinh;

              this.PlanThamDinhCompaniesService.FormData.ParentID = this.PlanThamDinhService.FormData.ID;

              this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
                res => {
                  this.PlanThamDinhCompaniesService.FormData = res as PlanThamDinhCompanies;
                  this.NotificationService.warn(environment.SaveSuccess);
                  this.PlanThamDinhCompaniesService.IsShowLoading = false;
                },
                err => {
                  this.NotificationService.warn(environment.SaveNotSuccess);
                  this.PlanThamDinhCompaniesService.IsShowLoading = false;
                }
              );
            },
            err => {
              this.NotificationService.warn(environment.SaveNotSuccess);
              this.PlanThamDinhCompaniesService.IsShowLoading = false;
            }
          );
        },
        err => {
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }

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
  Close() {
    this.dialogRef.close();
  }
}
