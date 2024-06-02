import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucHinhThucNuoi } from 'src/app/shared/DanhMucHinhThucNuoi.model';
import { DanhMucHinhThucNuoiService } from 'src/app/shared/DanhMucHinhThucNuoi.service';

import { DanhMucATTPTinhTrang } from 'src/app/shared/DanhMucATTPTinhTrang.model';
import { DanhMucATTPTinhTrangService } from 'src/app/shared/DanhMucATTPTinhTrang.service';

import { DanhMucATTPXepLoai } from 'src/app/shared/DanhMucATTPXepLoai.model';
import { DanhMucATTPXepLoaiService } from 'src/app/shared/DanhMucATTPXepLoai.service';

import { DanhMucThamDinhKetQuaDanhGia } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.model';
import { DanhMucThamDinhKetQuaDanhGiaService } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.service';

import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';

import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { CoSoCompanyLakeDetailComponent } from '../co-so-company-lake-detail/co-so-company-lake-detail.component';
import { CompanyLakeMapComponent } from '../company-lake-map/company-lake-map.component';
import { PlanThamDinhCompanyBienBan } from 'src/app/shared/PlanThamDinhCompanyBienBan.model';
import { PlanThamDinhCompanyBienBanService } from 'src/app/shared/PlanThamDinhCompanyBienBan.service';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-detail-co-so-nuoi',
  templateUrl: './plan-tham-dinh-detail-co-so-nuoi.component.html',
  styleUrls: ['./plan-tham-dinh-detail-co-so-nuoi.component.css']
})
export class PlanThamDinhDetailCoSoNuoiComponent implements OnInit {

  @ViewChild('CompanyLakeSort') CompanyLakeSort: MatSort;
  @ViewChild('CompanyLakePaginator') CompanyLakePaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDanhMucLayMauSort') PlanThamDinhDanhMucLayMauSort: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator') PlanThamDinhDanhMucLayMauPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDanhMucLayMauSort2000') PlanThamDinhDanhMucLayMauSort2000: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator2000') PlanThamDinhDanhMucLayMauPaginator2000: MatPaginator;

  @ViewChild('PlanThamDinhCompanyBienBanSort') PlanThamDinhCompanyBienBanSort: MatSort;
  @ViewChild('PlanThamDinhCompanyBienBanPaginator') PlanThamDinhCompanyBienBanPaginator: MatPaginator;

  @ViewChild('PlanThamDinhThanhVienSort') PlanThamDinhThanhVienSort: MatSort;
  @ViewChild('PlanThamDinhThanhVienPaginator') PlanThamDinhThanhVienPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailCoSoNuoiComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
    public DanhMucATTPTinhTrangService: DanhMucATTPTinhTrangService,
    public DanhMucATTPXepLoaiService: DanhMucATTPXepLoaiService,
    public DanhMucHinhThucNuoiService: DanhMucHinhThucNuoiService,
    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,
    public DanhMucThamDinhKetQuaDanhGiaService: DanhMucThamDinhKetQuaDanhGiaService,
    public ThanhVienService: ThanhVienService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,
    public PlanThamDinhCompanyBienBanService: PlanThamDinhCompanyBienBanService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienSearch();
    this.CompanyInfoSearch();
    this.DanhMucChucDanhSearch();
    this.DanhMucThamDinhKetQuaDanhGiaServiceSearch();
    this.DanhMucHinhThucNuoiSearch();
    this.DanhMucATTPXepLoaiSearch();
    this.PlanThamDinhDanhMucLayMauSearch();
    this.PlanThamDinhDanhMucLayMauSearch2000();
    this.PlanThamDinhCompanyDocumentSearch();
    this.CompanyInfoGetByID();
    this.PlanThamDinhThanhVienSearch();
  }
  DatePlanThamDinhDanhMucLayMauNgayGhiNhan(element, value) {
    element.NgayBatDau = new Date(value);
  }

  DateNgayBatDau(value) {
    this.PlanThamDinhService.FormData.NgayBatDau = new Date(value);
  }
  DateNgayKetThuc(value) {
    this.PlanThamDinhService.FormData.NgayKetThuc = new Date(value);
  }
  DanhMucThamDinhKetQuaDanhGiaServiceSearch() {
    this.DanhMucThamDinhKetQuaDanhGiaService.ComponentGetAllToListAsync();
  }
  DanhMucHinhThucNuoiSearch() {
    this.DanhMucHinhThucNuoiService.ComponentGetAllToListAsync();
  }
  DanhMucATTPXepLoaiSearch() {
    this.DanhMucATTPXepLoaiService.ComponentGetAllToListAsync();
  }
  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.ComponentGetAllToListAsync();
  }

  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }
  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.ID = ID;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.FormData.ParentID = environment.DanhMucThanhVienIDKhachMoi;
        this.ThanhVienService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.ThanhVienService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ThanhVienSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }
  CompanyInfoGetByID() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.PlanThamDinhService.FormData.CompanyInfoID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyLakeSearch();
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.CompanyInfoService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
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
  CompanyLakeSearch() {
    this.CompanyLakeService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyLakeService.SearchByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator);
  }
  CompanyLakeSave(element: CompanyLake) {
    element.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyLakeService.FormData = element;
    this.NotificationService.warn(this.CompanyLakeService.ComponentSaveByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator));
  }
  CompanyLakeDelete(element: CompanyLake) {
    this.CompanyLakeService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyLakeService.ComponentDeleteByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator));
  }
  CompanyLakeAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.CompanyLakeService.BaseParameter.ID = ID;
    this.CompanyLakeService.GetByIDAsync().subscribe(
      res => {
        this.CompanyLakeService.FormData = res as CompanyLake;
        this.CompanyLakeService.FormData.ParentID = this.CompanyInfoService.FormData.ID;
        this.CompanyLakeService.FormData.TypeName = this.CompanyInfoService.FormData.Name;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoCompanyLakeDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyLakeSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  CompanyLakeMap() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyInfoService.FormData.ID };
        const dialog = this.dialog.open(CompanyLakeMapComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyBienBanSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyBienBanService.BaseParameter.DanhMucProductGroupID = 12;
    this.PlanThamDinhCompanyBienBanService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhCompanyBienBanService.GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyBienBanService.List = (res as PlanThamDinhCompanyBienBan[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyBienBanService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyBienBanService.List);
        this.PlanThamDinhCompanyBienBanService.DataSource.sort = this.PlanThamDinhCompanyBienBanSort;
        this.PlanThamDinhCompanyBienBanService.DataSource.paginator = this.PlanThamDinhCompanyBienBanPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyBienBanSaveList() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyBienBanService.SaveListAsync(this.PlanThamDinhCompanyBienBanService.List).subscribe(
      res => {
        this.PlanThamDinhCompanyBienBanSearch();
        this.PlanThamDinhAdd();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienService.List = (res as PlanThamDinhThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhThanhVienService.DataSource = new MatTableDataSource(this.PlanThamDinhThanhVienService.List);
        this.PlanThamDinhThanhVienService.DataSource.sort = this.PlanThamDinhThanhVienSort;
        this.PlanThamDinhThanhVienService.DataSource.paginator = this.PlanThamDinhThanhVienPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienSave(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.FormData = element;
    this.PlanThamDinhThanhVienService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienDelete(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.ID = element.ID;
    this.PlanThamDinhThanhVienService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhAdd() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.StateAgencyID = environment.StateAgencyIDChiCucThuySan;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDCoSoNuoi;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
    this.CompanyInfoService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
      },
      err => {
      }
    );
  }
  PlanThamDinhCompanyDocumentSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhIDAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.List = (res as PlanThamDinhCompanyDocument[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyDocumentService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.List);
        this.PlanThamDinhCompanyDocumentService.DataSource.sort = this.PlanThamDinhCompanyDocumentSort;
        this.PlanThamDinhCompanyDocumentService.DataSource.paginator = this.PlanThamDinhCompanyDocumentPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSave(element: PlanThamDinhCompanyDocument) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.FormData = element;
    this.PlanThamDinhCompanyDocumentService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentDelete(element: PlanThamDinhCompanyDocument) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompanyDocumentService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.PlanThamDinhService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoGetByID();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SortOrder = 1000;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauService.GetBySearchStringAndSortOrderAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDanhMucLayMauService.DataSource = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.List);
        this.PlanThamDinhDanhMucLayMauService.DataSource.sort = this.PlanThamDinhDanhMucLayMauSort;
        this.PlanThamDinhDanhMucLayMauService.DataSource.paginator = this.PlanThamDinhDanhMucLayMauPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauSearch2000() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SortOrder = 2000;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauService.GetBySearchStringAndSortOrderAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List2000 = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDanhMucLayMauService.DataSource2000 = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.List2000);
        this.PlanThamDinhDanhMucLayMauService.DataSource2000.sort = this.PlanThamDinhDanhMucLayMauSort2000;
        this.PlanThamDinhDanhMucLayMauService.DataSource2000.paginator = this.PlanThamDinhDanhMucLayMauPaginator2000;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauSave(element: PlanThamDinhDanhMucLayMau) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    element.SortOrder = 1000;
    this.PlanThamDinhDanhMucLayMauService.FormData = element;
    this.PlanThamDinhDanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauSave2000(element: PlanThamDinhDanhMucLayMau) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    element.SortOrder = 2000;
    this.PlanThamDinhDanhMucLayMauService.FormData = element;
    this.PlanThamDinhDanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauSearch2000();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauDelete(element: PlanThamDinhDanhMucLayMau) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ID = element.ID;
    this.PlanThamDinhDanhMucLayMauService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauSearch();
        this.PlanThamDinhDanhMucLayMauSearch2000();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  ChangeFileName(files: FileList) {
    if (files) {
      this.PlanThamDinhCompanyDocumentService.FileToUpload = files;
    }
  }
  Close() {
    this.dialogRef.close();
  }

}