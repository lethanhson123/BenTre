import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';

import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';
import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';
import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';
import { DanhMucLayMauPhanLoai } from 'src/app/shared/DanhMucLayMauPhanLoai.model';
import { DanhMucLayMauPhanLoaiService } from 'src/app/shared/DanhMucLayMauPhanLoai.service';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';
import { PlanThamDinhDanhMucLayMauChiTieu } from 'src/app/shared/PlanThamDinhDanhMucLayMauChiTieu.model';
import { PlanThamDinhDanhMucLayMauChiTieuService } from 'src/app/shared/PlanThamDinhDanhMucLayMauChiTieu.service';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { PlanThamDinhDistrictDataService } from 'src/app/shared/PlanThamDinhDistrictData.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhCompanyProductGroup } from 'src/app/shared/PlanThamDinhCompanyProductGroup.model';
import { PlanThamDinhCompanyProductGroupService } from 'src/app/shared/PlanThamDinhCompanyProductGroup.service';

import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { ThanhVienDetail001Component } from '../thanh-vien-detail001/thanh-vien-detail001.component';
import { PlanThamDinhDanhMucLayMauDetailComponent } from '../plan-tham-dinh-danh-muc-lay-mau-detail/plan-tham-dinh-danh-muc-lay-mau-detail.component';
import { PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent } from '../plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach.component';

@Component({
  selector: 'app-plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach',
  templateUrl: './plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach.component.html',
  styleUrls: ['./plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach.component.css']
})
export class PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  @ViewChild('PlanThamDinhThanhVienSort') PlanThamDinhThanhVienSort: MatSort;
  @ViewChild('PlanThamDinhThanhVienPaginator') PlanThamDinhThanhVienPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDanhMucLayMauSort') PlanThamDinhDanhMucLayMauSort: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator') PlanThamDinhDanhMucLayMauPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDistrictDataSort') PlanThamDinhDistrictDataSort: MatSort;
  @ViewChild('PlanThamDinhDistrictDataPaginator') PlanThamDinhDistrictDataPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyProductGroupSort') PlanThamDinhCompanyProductGroupSort: MatSort;
  @ViewChild('PlanThamDinhCompanyProductGroupPaginator') PlanThamDinhCompanyProductGroupPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
    public DanhMucLayMauService: DanhMucLayMauService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
    public DanhMucLayMauPhanLoaiService: DanhMucLayMauPhanLoaiService,
    public DistrictDataService: DistrictDataService,
    public ProductGroupService: ProductGroupService,

    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,
    public PlanThamDinhDanhMucLayMauChiTieuService: PlanThamDinhDanhMucLayMauChiTieuService,
    public PlanThamDinhDistrictDataService: PlanThamDinhDistrictDataService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhCompanyProductGroupService: PlanThamDinhCompanyProductGroupService,

  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
    this.ThanhVienSearch();
    this.DanhMucChucDanhSearch();
    this.DanhMucLayMauSearch();
    this.DanhMucLayMauChiTieuSearch();
    this.DanhMucLayMauPhanLoaiSearch();
    this.DistrictDataSearch();
    this.ProductGroupSearch();


    this.PlanThamDinhCompaniesSearch();
    this.PlanThamDinhThanhVienSearch();
    this.PlanThamDinhDanhMucLayMauSearch();
    this.PlanThamDinhDistrictDataSearch();
    this.PlanThamDinhCompanyDocumentSearch();
    this.PlanThamDinhCompanyProductGroupSearch();
  }

  DatePlanThamDinhDistrictDataNgayGhiNhan(element: PlanThamDinhDistrictData, value) {
    element.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet001ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }
  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }
  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauPhanLoaiSearch() {
    this.DanhMucLayMauPhanLoaiService.ComponentGetAllToListAsync();
  }
  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.ComponentGetAllToListAsync();
  }

  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }
  PlanThamDinhCompanyProductGroupSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyProductGroupService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompanyProductGroupService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupService.List = (res as PlanThamDinhCompanyProductGroup[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyProductGroupService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyProductGroupService.List);
        this.PlanThamDinhCompanyProductGroupService.DataSource.sort = this.PlanThamDinhCompanyProductGroupSort;
        this.PlanThamDinhCompanyProductGroupService.DataSource.paginator = this.PlanThamDinhCompanyProductGroupPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyProductGroupSave(element: PlanThamDinhCompanyProductGroup) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompanyProductGroupService.FormData = element;
    this.PlanThamDinhCompanyProductGroupService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyProductGroupDelete(element: PlanThamDinhCompanyProductGroup) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyProductGroupService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompanyProductGroupService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyProductGroupSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
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
  PlanThamDinhDistrictDataSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDistrictDataService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDistrictDataService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataService.List = (res as PlanThamDinhDistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDistrictDataService.DataSource = new MatTableDataSource(this.PlanThamDinhDistrictDataService.List);
        this.PlanThamDinhDistrictDataService.DataSource.sort = this.PlanThamDinhDistrictDataSort;
        this.PlanThamDinhDistrictDataService.DataSource.paginator = this.PlanThamDinhDistrictDataPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDistrictDataSave(element: PlanThamDinhDistrictData) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDistrictDataService.FormData = element;
    this.PlanThamDinhDistrictDataService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDistrictDataDelete(element: PlanThamDinhDistrictData) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDistrictDataService.BaseParameter.ID = element.ID;
    this.PlanThamDinhDistrictDataService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhDanhMucLayMauChiTieuSearch(i: number) {
    this.PlanThamDinhDanhMucLayMauChiTieuService.BaseParameter.ParentID = this.PlanThamDinhDanhMucLayMauService.List[i].ID;
    this.PlanThamDinhDanhMucLayMauChiTieuService.BaseParameter.Code = this.PlanThamDinhDanhMucLayMauService.List[i].Code;
    this.PlanThamDinhDanhMucLayMauChiTieuService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauChiTieuService.List = (res as PlanThamDinhDanhMucLayMauChiTieu[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDanhMucLayMauService.List[i].ListPlanThamDinhDanhMucLayMauChiTieu = this.PlanThamDinhDanhMucLayMauChiTieuService.List;
      },
      err => {
      }
    );
  }

  PlanThamDinhDanhMucLayMauSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));

        for (let i = 0; i < this.PlanThamDinhDanhMucLayMauService.List.length; i++) {
          this.PlanThamDinhDanhMucLayMauChiTieuSearch(i);
        }

        this.PlanThamDinhDanhMucLayMauService.DataSource = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.List);
        this.PlanThamDinhDanhMucLayMauService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhDanhMucLayMauService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
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
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.List);
        this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesSave(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.FormData = element;
    this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesDelete(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompaniesService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
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

  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDAnToanThucPhamSauThuHoach;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData=res as PlanThamDinh;
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDownload() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.DownloadService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.DownloadService.ExportAnToanThucPhamSauThuHoach001ToExcelAsync().subscribe(
      res => {
        window.open(res.toString(), "_blank");
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
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
        const dialog = this.dialog.open(ThanhVienDetail001Component, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhThanhVienSearch();
        });
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
          this.PlanThamDinhCompaniesSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ID = ID;
    this.PlanThamDinhDanhMucLayMauService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.FormData = res as PlanThamDinhDanhMucLayMau;
        this.PlanThamDinhDanhMucLayMauService.FormData.ParentID = this.PlanThamDinhService.FormData.ID;
        this.PlanThamDinhDanhMucLayMauService.FormData.Code = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhDanhMucLayMauDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhDanhMucLayMauSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = ID;
    this.PlanThamDinhCompaniesService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.FormData = res as PlanThamDinhCompanies;
        this.PlanThamDinhCompaniesService.FormData.ParentID = this.PlanThamDinhService.FormData.ID;
        this.PlanThamDinhCompaniesService.FormData.Code = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhCompaniesSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}
