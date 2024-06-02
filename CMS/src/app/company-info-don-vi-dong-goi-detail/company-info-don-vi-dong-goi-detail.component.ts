import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyInfoDonViDongGoi } from 'src/app/shared/CompanyInfoDonViDongGoi.model';
import { CompanyInfoDonViDongGoiService } from 'src/app/shared/CompanyInfoDonViDongGoi.service';
import { CompanyInfoDonViDongGoiNongHo } from 'src/app/shared/CompanyInfoDonViDongGoiNongHo.model';
import { CompanyInfoDonViDongGoiNongHoService } from 'src/app/shared/CompanyInfoDonViDongGoiNongHo.service';
import { CompanyInfoDonViDongGoiSanPham } from 'src/app/shared/CompanyInfoDonViDongGoiSanPham.model';
import { CompanyInfoDonViDongGoiSanPhamService } from 'src/app/shared/CompanyInfoDonViDongGoiSanPham.service';
import { CompanyInfoDonViDongGoiThiTruong } from 'src/app/shared/CompanyInfoDonViDongGoiThiTruong.model';
import { CompanyInfoDonViDongGoiThiTruongService } from 'src/app/shared/CompanyInfoDonViDongGoiThiTruong.service';

import { CompanyInfoDonViDongGoiDocuments } from 'src/app/shared/CompanyInfoDonViDongGoiDocuments.model';
import { CompanyInfoDonViDongGoiDocumentsService } from 'src/app/shared/CompanyInfoDonViDongGoiDocuments.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

import { DanhMucATTPTinhTrang } from 'src/app/shared/DanhMucATTPTinhTrang.model';
import { DanhMucATTPTinhTrangService } from 'src/app/shared/DanhMucATTPTinhTrang.service';

import * as maplibregl from 'maplibre-gl';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';
import { ThanhVienDetail001Component } from '../thanh-vien-detail001/thanh-vien-detail001.component';
import { CompanyInfoDonViDongGoiDocumentsDetailComponent } from '../company-info-don-vi-dong-goi-documents-detail/company-info-don-vi-dong-goi-documents-detail.component';

@Component({
  selector: 'app-company-info-don-vi-dong-goi-detail',
  templateUrl: './company-info-don-vi-dong-goi-detail.component.html',
  styleUrls: ['./company-info-don-vi-dong-goi-detail.component.css']
})
export class CompanyInfoDonViDongGoiDetailComponent implements OnInit {

  @ViewChild('CompanyInfoDonViDongGoiSanPhamSort') CompanyInfoDonViDongGoiSanPhamSort: MatSort;
  @ViewChild('CompanyInfoDonViDongGoiSanPhamPaginator') CompanyInfoDonViDongGoiSanPhamPaginator: MatPaginator;

  @ViewChild('CompanyInfoDonViDongGoiThiTruongSort') CompanyInfoDonViDongGoiThiTruongSort: MatSort;
  @ViewChild('CompanyInfoDonViDongGoiThiTruongPaginator') CompanyInfoDonViDongGoiThiTruongPaginator: MatPaginator;

  @ViewChild('CompanyInfoDonViDongGoiNongHoSort') CompanyInfoDonViDongGoiNongHoSort: MatSort;
  @ViewChild('CompanyInfoDonViDongGoiNongHoPaginator') CompanyInfoDonViDongGoiNongHoPaginator: MatPaginator;

  @ViewChild('CompanyInfoDonViDongGoiDocumentsSort') CompanyInfoDonViDongGoiDocumentsSort: MatSort;
  @ViewChild('CompanyInfoDonViDongGoiDocumentsPaginator') CompanyInfoDonViDongGoiDocumentsPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;



  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyInfoDonViDongGoiDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyInfoDonViDongGoiService: CompanyInfoDonViDongGoiService,
    public CompanyInfoDonViDongGoiNongHoService: CompanyInfoDonViDongGoiNongHoService,
    public CompanyInfoDonViDongGoiSanPhamService: CompanyInfoDonViDongGoiSanPhamService,
    public CompanyInfoDonViDongGoiThiTruongService: CompanyInfoDonViDongGoiThiTruongService,

    public CompanyInfoDonViDongGoiDocumentsService: CompanyInfoDonViDongGoiDocumentsService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhService: PlanThamDinhService,

    public ThanhVienService: ThanhVienService,
    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,
    public DanhMucATTPTinhTrangService: DanhMucATTPTinhTrangService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoDonViDongGoiService.FormData.ProvinceDataID = environment.ProvinceDataIDBenTre;
    this.ThanhVienGetLogin();
    this.ProductGroupSearch();
    this.DistrictDataSearch();
    this.CompanyInfoDonViDongGoiDocumentsSearch();
    this.CompanyInfoDonViDongGoiSanPhamSearch();
    this.CompanyInfoDonViDongGoiThiTruongSearch();
    this.CompanyInfoDonViDongGoiNongHoSearch();
    this.DanhMucATTPLoaiHoSoSearch();
    this.DanhMucATTPTinhTrangSearch();
    this.ThanhVienSearch();
    this.CompanyInfoSearch();
  }

  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  CompanyInfoChange() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.CompanyInfoDonViDongGoiService.FormData.ParentID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoDonViDongGoiService.FormData.Name = this.CompanyInfoService.FormData.Name;
        this.CompanyInfoDonViDongGoiService.FormData.DaiDienCoSo = this.CompanyInfoService.FormData.fullname;
        this.CompanyInfoDonViDongGoiService.FormData.DaiDienCoSoChucVu = this.CompanyInfoService.FormData.role_name;
        this.CompanyInfoDonViDongGoiService.FormData.DaiDienCoSoDienThoai = this.CompanyInfoService.FormData.phone;
        this.CompanyInfoDonViDongGoiService.FormData.DaiDienCoSoEmail = this.CompanyInfoService.FormData.email;

        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }

  DanhMucATTPTinhTrangSearch() {
    this.DanhMucATTPTinhTrangService.ComponentGetAllToListAsync();
  }

  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.ComponentGetAllToListAsync();
  }

  DistrictDataSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.WardDataSearch();
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = this.CompanyInfoDonViDongGoiService.FormData.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  CompanyInfoDonViDongGoiDocumentsSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.BaseParameter.SearchString = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiDocumentsService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.List = (res as CompanyInfoDonViDongGoiDocuments[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiDocumentsService.DataSource = new MatTableDataSource(
          this.CompanyInfoDonViDongGoiDocumentsService.List.filter(x => x.IsPheDuyet != true)
        );
        this.CompanyInfoDonViDongGoiDocumentsService.DataSource.sort = this.CompanyInfoDonViDongGoiDocumentsSort;
        this.CompanyInfoDonViDongGoiDocumentsService.DataSource.paginator = this.CompanyInfoDonViDongGoiDocumentsPaginator;

        this.CompanyInfoDonViDongGoiDocumentsService.DataSource002 = new MatTableDataSource(
          this.CompanyInfoDonViDongGoiDocumentsService.List.filter(x => x.IsPheDuyet == true || x.ID == 0)
        );
        this.CompanyInfoDonViDongGoiDocumentsService.DataSource002.sort = this.CompanyInfoDonViDongGoiDocumentsSort;
        this.CompanyInfoDonViDongGoiDocumentsService.DataSource002.paginator = this.CompanyInfoDonViDongGoiDocumentsPaginator;
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiDocumentsSave(element: CompanyInfoDonViDongGoiDocuments) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    element.Code = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiDocumentsService.FormData = element;
    this.CompanyInfoDonViDongGoiDocumentsService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.FormData = (res as CompanyInfoDonViDongGoiDocuments);
        element.FileName = this.CompanyInfoDonViDongGoiDocumentsService.FormData.FileName;
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiDocumentsDelete(element: CompanyInfoDonViDongGoiDocuments) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.BaseParameter.ID = element.ID;
    this.CompanyInfoDonViDongGoiDocumentsService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoDonViDongGoiDocumentsAdd(element: CompanyInfoDonViDongGoiDocuments) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiDocumentsService.BaseParameter.ID = element.ID;
    this.CompanyInfoDonViDongGoiDocumentsService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiDocumentsService.FormData = res as CompanyInfoDonViDongGoiDocuments;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyInfoDonViDongGoiDocumentsService.FormData.ID };
        const dialog = this.dialog.open(CompanyInfoDonViDongGoiDocumentsDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  ChangeFileName(element: CompanyInfoDonViDongGoiDocuments, files: FileList) {
    if (files) {
      this.CompanyInfoDonViDongGoiDocumentsService.FileToUpload = files;
      this.CompanyInfoDonViDongGoiDocumentsSave(element);
    }
  }

  CompanyInfoDonViDongGoiSanPhamSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiSanPhamService.BaseParameter.SearchString = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiSanPhamService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiSanPhamService.List = (res as CompanyInfoDonViDongGoiSanPham[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiSanPhamService.DataSource = new MatTableDataSource(this.CompanyInfoDonViDongGoiSanPhamService.List);
        this.CompanyInfoDonViDongGoiSanPhamService.DataSource.sort = this.CompanyInfoDonViDongGoiSanPhamSort;
        this.CompanyInfoDonViDongGoiSanPhamService.DataSource.paginator = this.CompanyInfoDonViDongGoiSanPhamPaginator;
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiSanPhamSave(element: CompanyInfoDonViDongGoiSanPham) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    element.Code = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiSanPhamService.FormData = element;
    this.CompanyInfoDonViDongGoiSanPhamService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiSanPhamSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiSanPhamDelete(element: CompanyInfoDonViDongGoiSanPham) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiSanPhamService.BaseParameter.ID = element.ID;
    this.CompanyInfoDonViDongGoiSanPhamService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiSanPhamSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }


  CompanyInfoDonViDongGoiThiTruongSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiThiTruongService.BaseParameter.SearchString = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiThiTruongService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiThiTruongService.List = (res as CompanyInfoDonViDongGoiThiTruong[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiThiTruongService.DataSource = new MatTableDataSource(this.CompanyInfoDonViDongGoiThiTruongService.List);
        this.CompanyInfoDonViDongGoiThiTruongService.DataSource.sort = this.CompanyInfoDonViDongGoiThiTruongSort;
        this.CompanyInfoDonViDongGoiThiTruongService.DataSource.paginator = this.CompanyInfoDonViDongGoiThiTruongPaginator;
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiThiTruongSave(element: CompanyInfoDonViDongGoiThiTruong) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    element.Code = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiThiTruongService.FormData = element;
    this.CompanyInfoDonViDongGoiThiTruongService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiThiTruongSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiThiTruongDelete(element: CompanyInfoDonViDongGoiThiTruong) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiThiTruongService.BaseParameter.ID = element.ID;
    this.CompanyInfoDonViDongGoiThiTruongService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiThiTruongSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }


  CompanyInfoDonViDongGoiNongHoSearch() {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiNongHoService.BaseParameter.SearchString = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiNongHoService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiNongHoService.List = (res as CompanyInfoDonViDongGoiNongHo[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoDonViDongGoiNongHoService.DataSource = new MatTableDataSource(this.CompanyInfoDonViDongGoiNongHoService.List);
        this.CompanyInfoDonViDongGoiNongHoService.DataSource.sort = this.CompanyInfoDonViDongGoiNongHoSort;
        this.CompanyInfoDonViDongGoiNongHoService.DataSource.paginator = this.CompanyInfoDonViDongGoiNongHoPaginator;
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiNongHoSave(element: CompanyInfoDonViDongGoiNongHo) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    element.Code = this.CompanyInfoDonViDongGoiService.FormData.Code;
    this.CompanyInfoDonViDongGoiNongHoService.FormData = element;
    this.CompanyInfoDonViDongGoiNongHoService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiNongHoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoDonViDongGoiNongHoDelete(element: CompanyInfoDonViDongGoiNongHo) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiNongHoService.BaseParameter.ID = element.ID;
    this.CompanyInfoDonViDongGoiNongHoService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiNongHoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoDonViDongGoiSave() {
    console.log('test');
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.CompanyInfoDonViDongGoiService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoDonViDongGoiService.FormData.PlanTypeID = environment.PlanTypeIDDangKyMaDongGoi;
    this.CompanyInfoDonViDongGoiService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoDonViDongGoiService.FormData = res as CompanyInfoDonViDongGoi;
        this.CompanyInfoDonViDongGoiSanPhamSearch();
        this.CompanyInfoDonViDongGoiThiTruongSearch();

        //this.PlanThamDinhSave();
        this.NotificationService.warn(this.PlanThamDinhService.ComponentSaveForm());
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDDangKyMaDongGoi;
    this.PlanThamDinhService.FormData.StateAgencyID = environment.StateAgencyIDChiCucBaoVeThucVat;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  /*
  CompanyInfoDonViDongGoiSave() {
    this.CompanyInfoDonViDongGoiService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.NotificationService.warn(this.CompanyInfoDonViDongGoiService.ComponentSaveForm());
  }
  */

  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.CompanyInfoDonViDongGoiService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.PlanThamDinhCompanyDocumentService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }
  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.ParentID = environment.DanhMucThanhVienIDNhanVien;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByParentIDToListAsync();
  }
  ThanhVienAdd(ID: number) {
    this.CompanyInfoDonViDongGoiService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.ID = ID;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.FormData.ParentID = environment.DanhMucThanhVienIDNhanVien;
        //this.ThanhVienService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        //this.ThanhVienService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetail001Component, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ThanhVienSearch();
        });
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoDonViDongGoiService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }


  map: maplibregl.Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    //this.MapLoad();
  }


  ngOnDestroy() {
    this.map?.remove();
  }

  MapInitialization(longitude, latitude) {
    let zoom = 10;
    if ((latitude > 90) || (latitude == 0)) {
      latitude = environment.Latitude;
      longitude = environment.Longitude;
    }
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/hybrid/style.json?key=' + environment.MaptilerAPIKey,
      center: [longitude, latitude],
      zoom: zoom,
      pitch: 45,
    });

    this.map.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
      })
    );
    this.map.addControl(
      new maplibregl.FullscreenControl({
      })
    );
    this.map.on('load', () => {

      this.map.addSource("HoangSa", {
        "type": "image",
        "url": environment.DomainURL + "assets/image/HoangSa01.png",
        "coordinates": [
          [111.09665858054495, 17.432475898867523],
          [113.11720985517763, 17.38420482529338],
          [112.79285037220984, 15.643938718432054],
          [110.88537855035554, 15.672592116966598],
        ]
      });
      this.map.addLayer({
        "id": "HoangSa",
        "source": "HoangSa",
        "type": "raster",
        "paint": {
          "raster-opacity": 1
        }
      });

      this.map.addSource("TruongSa", {
        "type": "image",
        "url": environment.DomainURL + "assets/image/TruongSa01.png",
        "coordinates": [
          [112.32373278444106, 12.236103169381323],
          [117.4620551483049, 11.606334626304161],
          [115.59654957671216, 7.357025445897818],
          [110.62186805246108, 7.811210355974268],


        ]
      });
      this.map.addLayer({
        "id": "TruongSa",
        "source": "TruongSa",
        "type": "raster",
        "paint": {
          "raster-opacity": 1
        }
      });

    });
  }

  MapLoad() {

    document.getElementById("map").style.height = "500px";

    if (this.CompanyInfoDonViDongGoiService.FormData) {
      let latitude = environment.Latitude;
      let longitude = environment.Longitude;
      if (this.CompanyInfoDonViDongGoiService.FormData.KinhDo > 0) {
        if (this.CompanyInfoDonViDongGoiService.FormData.ViDo > 0) {
          latitude = Number(this.CompanyInfoDonViDongGoiService.FormData.ViDo);
          longitude = Number(this.CompanyInfoDonViDongGoiService.FormData.KinhDo);
        }
      }
      this.MapInitialization(longitude, latitude);
      if (latitude <= 90) {
        let popupContent = "<div style='opacity: 0.8; background-color: transparent;'>";
        popupContent = popupContent + "<a style='text-align: center;' class='link-primary form-label' href='#'><h1>" + this.CompanyInfoDonViDongGoiService.FormData.Name + " [" + this.CompanyInfoDonViDongGoiService.FormData.ID + "]</h1></a>";
        popupContent = popupContent + "<div>Chủ cơ sở: <b>" + this.CompanyInfoDonViDongGoiService.FormData.Name + "</b></div>";
        popupContent = popupContent + "<div>Điện thoại: <b>" + this.CompanyInfoDonViDongGoiService.FormData.DaiDienCoSoDienThoai + "</b></div>";
        popupContent = popupContent + "<div>Địa chỉ: <b>" + this.CompanyInfoDonViDongGoiService.FormData.DiaChi + "</b></div>";
        popupContent = popupContent + "<div>Ấp thôn: <b>" + this.CompanyInfoDonViDongGoiService.FormData.ThonAp + "</b></div>";
        popupContent = popupContent + "<div>Xã phường: <b>" + this.CompanyInfoDonViDongGoiService.FormData.WardDataName + "</b></div>";
        popupContent = popupContent + "<div>Quận huyện: <b>" + this.CompanyInfoDonViDongGoiService.FormData.DistrictDataName + "</b></div>";
        popupContent = popupContent + "</div>";

        let popup = new maplibregl.Popup({ offset: 25 }).setHTML(popupContent)
          .setMaxWidth("600px");

        var el = document.createElement('div');
        el.style.backgroundImage = "url(" + environment.DomainURL + "assets/image/logo_30.png)";
        el.style.width = '30px';
        el.style.height = '30px';

        let marker = new maplibregl.Marker({ element: el })
          .setLngLat([longitude, latitude])
          .setPopup(popup)
          .addTo(this.map);
      }
    }
  }
}
