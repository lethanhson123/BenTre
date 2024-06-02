import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { DanhMucThamDinhKetQuaDanhGia } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.model';
import { DanhMucThamDinhKetQuaDanhGiaService } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.service';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';

import { PlanThamDinhCompanyProductGroup } from 'src/app/shared/PlanThamDinhCompanyProductGroup.model';
import { PlanThamDinhCompanyProductGroupService } from 'src/app/shared/PlanThamDinhCompanyProductGroup.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';

import { PlanThamDinhCompanyBienBan } from 'src/app/shared/PlanThamDinhCompanyBienBan.model';
import { PlanThamDinhCompanyBienBanService } from 'src/app/shared/PlanThamDinhCompanyBienBan.service';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { ProductGroupDetailComponent } from '../product-group-detail/product-group-detail.component';


@Component({
  selector: 'app-plan-tham-dinh-companies-detail',
  templateUrl: './plan-tham-dinh-companies-detail.component.html',
  styleUrls: ['./plan-tham-dinh-companies-detail.component.css']
})
export class PlanThamDinhCompaniesDetailComponent implements OnInit {

  @ViewChild('PlanThamDinhCompanyProductGroupSort') PlanThamDinhCompanyProductGroupSort: MatSort;
  @ViewChild('PlanThamDinhCompanyProductGroupPaginator') PlanThamDinhCompanyProductGroupPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyBienBanSort') PlanThamDinhCompanyBienBanSort: MatSort;
  @ViewChild('PlanThamDinhCompanyBienBanPaginator') PlanThamDinhCompanyBienBanPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhCompaniesDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,
    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
    public ProductGroupService: ProductGroupService,
    public DanhMucThamDinhKetQuaDanhGiaService: DanhMucThamDinhKetQuaDanhGiaService,
    public DanhMucProductGroupService: DanhMucProductGroupService,


    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,

    public PlanThamDinhCompanyProductGroupService: PlanThamDinhCompanyProductGroupService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhCompanyBienBanService: PlanThamDinhCompanyBienBanService,
  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.DanhMucProductGroupSearch();
    this.DanhMucATTPLoaiHoSoSearch();
    this.DanhMucATTPXepLoaiSearch();
    this.ProductGroupSearch();
    this.DanhMucThamDinhKetQuaDanhGiaServiceSearch();
    this.PlanThamDinhCompanyProductGroupSearch();
    this.PlanThamDinhCompanyDocumentSearch();
  }
  DanhMucProductGroupSearch() {
    this.DanhMucProductGroupService.ComponentGetAllToListAsync();
  }
  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.ComponentGetAllToListAsync();
  }
  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  ProductGroupSearch() {
    this.ProductGroupService.BaseParameter.Active = true;
    this.ProductGroupService.ComponentGetByActiveToListAsync();
  }
  ProductGroupAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.ProductGroupService.BaseParameter.ID = ID;
    this.ProductGroupService.GetByIDAsync().subscribe(
      res => {
        this.ProductGroupService.FormData = res as ProductGroup;

        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ProductGroupDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ProductGroupSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  DanhMucThamDinhKetQuaDanhGiaServiceSearch() {
    this.DanhMucThamDinhKetQuaDanhGiaService.ComponentGetAllToListAsync();
  }

  PlanThamDinhCompanyBienBanSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyBienBanService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    this.PlanThamDinhCompanyBienBanService.GetSQLByParentID_DanhMucProductGroupIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyBienBanService.List = (res as PlanThamDinhCompanyBienBan[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyBienBanService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyBienBanService.List);
        this.PlanThamDinhCompanyBienBanService.DataSource.sort = this.PlanThamDinhCompanyBienBanSort;
        this.PlanThamDinhCompanyBienBanService.DataSource.paginator = this.PlanThamDinhCompanyBienBanPaginator;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = this.PlanThamDinhCompaniesService.FormData.ID;
    this.PlanThamDinhCompaniesService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.FormData = res as PlanThamDinhCompanies;
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyBienBanSaveList() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyBienBanService.SaveListAsync(this.PlanThamDinhCompanyBienBanService.List).subscribe(
      res => {
        this.PlanThamDinhCompanyBienBanSearch();
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
  PlanThamDinhCompanyBienBanSave(element: PlanThamDinhCompanyBienBan) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    element.Code = this.PlanThamDinhCompaniesService.FormData.Code;
    this.PlanThamDinhCompanyBienBanService.FormData = element;
    this.PlanThamDinhCompanyBienBanService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyBienBanSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhCompanyProductGroupSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyProductGroupService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    this.PlanThamDinhCompanyProductGroupService.GetByParentIDAndEmptyToListAsync().subscribe(
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

  PlanThamDinhCompanyDocumentSearch() {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.GetByParentIDAndEmptyToListAsync().subscribe(
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
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompanyDocumentService.RemoveAsync().subscribe(
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

  PlanThamDinhCompanyDocumentAdd001(DocumentTemplateID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByParentID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.PlanThamDinhCompaniesService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {

        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentAdd() {
    if (this.PlanThamDinhCompanyBienBanService.BaseParameter.DanhMucProductGroupID > 0) {
      this.PlanThamDinhCompaniesService.IsShowLoading = true;
      this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
      this.PlanThamDinhCompanyDocumentService.BaseParameter.ParentID = this.PlanThamDinhCompaniesService.FormData.ID;
      this.PlanThamDinhCompanyDocumentService.BaseParameter.DanhMucProductGroupID = this.PlanThamDinhCompanyBienBanService.BaseParameter.DanhMucProductGroupID;
      this.PlanThamDinhCompanyDocumentService.GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync().subscribe(
        res => {
          this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
          const dialogConfig = new MatDialogConfig();
          dialogConfig.disableClose = true;
          dialogConfig.autoFocus = true;
          dialogConfig.width = environment.DialogConfigWidth;
          dialogConfig.data = { ID: this.PlanThamDinhCompaniesService.FormData.ID };
          const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
          dialog.afterClosed().subscribe(() => {
          });
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhCompaniesService.IsShowLoading = false;
        }
      );
    }
    else {
      alert("Vui lòng chọn phân loại");
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
  
  ChangeFileName(files: FileList) {
    if (files) {
      this.PlanThamDinhCompanyDocumentService.FileToUpload = files;      
    }
  }


  DateNgayGhiNhan(value) {
    this.PlanThamDinhCompaniesService.FormData.NgayGhiNhan = new Date(value);
  }
  DateNgayHetHan(value) {
    this.PlanThamDinhCompaniesService.FormData.NgayHetHan = new Date(value);
  }
  DateNgayHieuLucGiayChungNhan(value) {
    this.PlanThamDinhCompaniesService.FormData.NgayHieuLucGiayChungNhan = new Date(value);
  }

  PlanThamDinhCompaniesSave() {
    this.NotificationService.warn(this.PlanThamDinhCompaniesService.ComponentSaveForm());
  }

  Close() {
    this.dialogRef.close();
  }
}
