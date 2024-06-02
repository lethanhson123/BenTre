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

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';
import { DanhMucChuongTrinhQuanLyChatLuong } from 'src/app/shared/DanhMucChuongTrinhQuanLyChatLuong.model';
import { DanhMucChuongTrinhQuanLyChatLuongService } from 'src/app/shared/DanhMucChuongTrinhQuanLyChatLuong.service';
import { DanhMucCompanyTinhTrang } from 'src/app/shared/DanhMucCompanyTinhTrang.model';
import { DanhMucCompanyTinhTrangService } from 'src/app/shared/DanhMucCompanyTinhTrang.service';
import { DanhMucThiTruong } from 'src/app/shared/DanhMucThiTruong.model';
import { DanhMucThiTruongService } from 'src/app/shared/DanhMucThiTruong.service';
import { DanhMucDangKyCapGiay } from 'src/app/shared/DanhMucDangKyCapGiay.model';
import { DanhMucDangKyCapGiayService } from 'src/app/shared/DanhMucDangKyCapGiay.service';
import { DanhMucXepLoai } from 'src/app/shared/DanhMucXepLoai.model';
import { DanhMucXepLoaiService } from 'src/app/shared/DanhMucXepLoai.service';
import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';
import { DanhMucCompanyTrangThai } from 'src/app/shared/DanhMucCompanyTrangThai.model';
import { DanhMucCompanyTrangThaiService } from 'src/app/shared/DanhMucCompanyTrangThai.service';
import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';
import { DanhMucCompanyInfo } from 'src/app/shared/DanhMucCompanyInfo.model';
import { DanhMucCompanyInfoService } from 'src/app/shared/DanhMucCompanyInfo.service';
import { DanhMucHinhThucNuoi } from 'src/app/shared/DanhMucHinhThucNuoi.model';
import { DanhMucHinhThucNuoiService } from 'src/app/shared/DanhMucHinhThucNuoi.service';

import { CompanyScope } from 'src/app/shared/CompanyScope.model';
import { CompanyScopeService } from 'src/app/shared/CompanyScope.service';
import { CompanyGroup } from 'src/app/shared/CompanyGroup.model';
import { CompanyGroupService } from 'src/app/shared/CompanyGroup.service';
import { Species } from 'src/app/shared/Species.model';
import { SpeciesService } from 'src/app/shared/Species.service';
import { CompanyFields } from 'src/app/shared/CompanyFields.model';
import { CompanyFieldsService } from 'src/app/shared/CompanyFields.service';
import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import { CompanyInfoFields } from 'src/app/shared/CompanyInfoFields.model';
import { CompanyInfoFieldsService } from 'src/app/shared/CompanyInfoFields.service';
import { CompanyInfoGroups } from 'src/app/shared/CompanyInfoGroups.model';
import { CompanyInfoGroupsService } from 'src/app/shared/CompanyInfoGroups.service';
import { CompanyInfoStateAgency } from 'src/app/shared/CompanyInfoStateAgency.model';
import { CompanyInfoStateAgencyService } from 'src/app/shared/CompanyInfoStateAgency.service';

import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { ProductInfoService } from 'src/app/shared/ProductInfo.service';

import * as maplibregl from 'maplibre-gl';
import { ProductInfoDetailComponent } from '../product-info-detail/product-info-detail.component';
import { CompanyLakeDetailComponent } from '../company-lake-detail/company-lake-detail.component';
import { CompanyLakeMapComponent } from '../company-lake-map/company-lake-map.component';

import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';

import { DanhMucCompanyPhanLoai } from 'src/app/shared/DanhMucCompanyPhanLoai.model';
import { DanhMucCompanyPhanLoaiService } from 'src/app/shared/DanhMucCompanyPhanLoai.service';
import { CoSoCompanyLakeDetailComponent } from '../co-so-company-lake-detail/co-so-company-lake-detail.component';

@Component({
  selector: 'app-company-info-detail',
  templateUrl: './company-info-detail.component.html',
  styleUrls: ['./company-info-detail.component.css']
})
export class CompanyInfoDetailComponent implements OnInit {

  @ViewChild('CompanyInfoStateAgencySort') CompanyInfoStateAgencySort: MatSort;
  @ViewChild('CompanyInfoStateAgencyPaginator') CompanyInfoStateAgencyPaginator: MatPaginator;

  @ViewChild('CompanyLakeSort') CompanyLakeSort: MatSort;
  @ViewChild('CompanyLakePaginator') CompanyLakePaginator: MatPaginator;

  @ViewChild('ThanhVienSort') ThanhVienSort: MatSort;
  @ViewChild('ThanhVienPaginator') ThanhVienPaginator: MatPaginator;



  @ViewChild('CompanyInfoFieldsSort') CompanyInfoFieldsSort: MatSort;
  @ViewChild('CompanyInfoFieldsPaginator') CompanyInfoFieldsPaginator: MatPaginator;

  @ViewChild('CompanyInfoGroupsSort') CompanyInfoGroupsSort: MatSort;
  @ViewChild('CompanyInfoGroupsPaginator') CompanyInfoGroupsPaginator: MatPaginator;

  @ViewChild('ProductInfoSort') ProductInfoSort: MatSort;
  @ViewChild('ProductInfoPaginator') ProductInfoPaginator: MatPaginator;

  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyInfoDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public PlanTypeService: PlanTypeService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,
    public DanhMucChuongTrinhQuanLyChatLuongService: DanhMucChuongTrinhQuanLyChatLuongService,
    public DanhMucCompanyTinhTrangService: DanhMucCompanyTinhTrangService,
    public DanhMucThiTruongService: DanhMucThiTruongService,
    public DanhMucDangKyCapGiayService: DanhMucDangKyCapGiayService,
    public DanhMucXepLoaiService: DanhMucXepLoaiService,
    public DanhMucThanhVienService: DanhMucThanhVienService,
    public DanhMucCompanyTrangThaiService: DanhMucCompanyTrangThaiService,
    public StateAgencyService: StateAgencyService,
    public DanhMucCompanyInfoService: DanhMucCompanyInfoService,
    public DanhMucCompanyPhanLoaiService: DanhMucCompanyPhanLoaiService,
    public ProductGroupService: ProductGroupService,
    public DanhMucHinhThucNuoiService: DanhMucHinhThucNuoiService,

    public CompanyScopeService: CompanyScopeService,
    public CompanyGroupService: CompanyGroupService,
    public SpeciesService: SpeciesService,
    public CompanyFieldsService: CompanyFieldsService,
    public ThanhVienService: ThanhVienService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,
    public CompanyInfoFieldsService: CompanyInfoFieldsService,
    public CompanyInfoGroupsService: CompanyInfoGroupsService,
    public CompanyInfoStateAgencyService: CompanyInfoStateAgencyService,

    public ProductInfoService: ProductInfoService,

    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
  ) {

  }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
    this.PlanTypeSearch();
    this.DanhMucHinhThucNuoiSearch();
    this.DanhMucCompanyPhanLoaiSearch();
    this.DanhMucCompanyTrangThaiSearch();
    this.DanhMucThanhVienSearch();
    this.CompanyScopeSearch();
    this.CompanyGroupSearch();
    this.SpeciesSearch();
    this.CompanyFieldsSearch();
    this.DistrictDataSearch();
    this.DanhMucChuongTrinhQuanLyChatLuongSearch();
    this.DanhMucCompanyTinhTrangSearch();
    this.DanhMucThiTruongSearch();
    this.DanhMucDangKyCapGiaySearch();
    this.StateAgencySearch();
    this.DanhMucCompanyInfoSearch();
    this.ProductGroupSearch();
  }
  Close() {
    this.dialogRef.close();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.ID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        if (this.CompanyInfoService.FormData) {

        }
      },
      err => {
      }
    );
  }
  DanhMucThanhVienSearch() {
    if (this.DanhMucThanhVienService.List) {
      if (this.DanhMucThanhVienService.List.length == 0) {
        this.ThanhVienService.IsShowLoading = true;
        this.DanhMucThanhVienService.GetByCompanyInfoThanhVienToListAsync().subscribe(
          res => {
            this.DanhMucThanhVienService.List = (res as ThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
            this.ThanhVienService.IsShowLoading = false;
          },
          err => {
            this.ThanhVienService.IsShowLoading = false;
          }
        );
      }
    }
  }


  DateDuyetTaiKhoanNgayGhiNhan(value) {
    this.CompanyInfoService.FormData.DuyetTaiKhoanNgayGhiNhan = new Date(value);
  }
  DateDKKDNgayCap(value) {
    this.CompanyInfoService.FormData.DKKDNgayCap = new Date(value);
  }
  DateNgayDangKy(value) {
    this.CompanyInfoService.FormData.NgayDangKy = new Date(value);
  }
  DateNgayHetHan(value) {
    this.CompanyInfoService.FormData.NgayHetHan = new Date(value);
  }

  DistrictDataSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.WardDataSearch();
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = this.CompanyInfoService.FormData.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }
  DanhMucHinhThucNuoiSearch() {
    this.DanhMucHinhThucNuoiService.ComponentGetAllToListAsync();
  }
  DanhMucCompanyPhanLoaiSearch() {
    this.DanhMucCompanyPhanLoaiService.ComponentGetAllToListAsync();
  }
  DanhMucCompanyTrangThaiSearch() {
    this.DanhMucCompanyTrangThaiService.ComponentGetAllToListAsync();
  }
  DanhMucDangKyCapGiaySearch() {
    this.DanhMucDangKyCapGiayService.ComponentGetAllToListAsync();
  }
  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  DanhMucChuongTrinhQuanLyChatLuongSearch() {
    this.DanhMucChuongTrinhQuanLyChatLuongService.ComponentGetAllToListAsync();
  }
  DanhMucCompanyTinhTrangSearch() {
    this.DanhMucCompanyTinhTrangService.ComponentGetAllToListAsync();
  }
  DanhMucThiTruongSearch() {
    this.DanhMucThiTruongService.ComponentGetAllToListAsync();
  }
  CompanyScopeSearch() {
    this.CompanyScopeService.ComponentGetAllToListAsync();
  }
  CompanyGroupSearch() {
    this.CompanyGroupService.ComponentGetAllToListAsync();
  }
  SpeciesSearch() {
    this.SpeciesService.ComponentGetAllToListAsync();
  }
  CompanyFieldsSearch() {
    this.CompanyFieldsService.ComponentGetAllToListAsync();
  }
  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }
  DanhMucCompanyInfoSearch() {
    this.DanhMucCompanyInfoService.ComponentGetAllToListAsync();
  }

  CompanyInfoSave() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyInfoService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;

        // if (this.CompanyInfoService.FormData) {
        //   if (this.CompanyInfoService.FormData.ID > 0) {
        //     if (this.CompanyInfoService.FormData.PlanThamDinhCode) {
        //       if (this.CompanyInfoService.FormData.PlanThamDinhCode.length > 0) {
        //         this.PlanThamDinhCompaniesService.FormData.CompanyInfoID = this.CompanyInfoService.FormData.ID;
        //         this.PlanThamDinhCompaniesService.FormData.ParentID = this.CompanyInfoService.FormData.PlanThamDinhID;
        //         this.PlanThamDinhCompaniesService.FormData.Code = this.CompanyInfoService.FormData.PlanThamDinhCode;
        //         this.PlanThamDinhCompaniesSave();
        //       }
        //     }
        //   }
        // }

        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesSave() {
    this.CompanyInfoService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoStateAgencySearch() {
    this.CompanyInfoStateAgencyService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoStateAgencyService.SearchByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator);
  }
  CompanyInfoStateAgencySave(element: CompanyInfoStateAgency) {
    element.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoStateAgencyService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentSaveByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }
  CompanyInfoStateAgencyDelete(element: CompanyInfoStateAgency) {
    this.CompanyInfoStateAgencyService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoStateAgencyService.ComponentDeleteByParentID(this.CompanyInfoStateAgencySort, this.CompanyInfoStateAgencyPaginator));
  }

  CompanyInfoGroupsSearch() {
    this.CompanyInfoGroupsService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoGroupsService.SearchByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator);
  }
  CompanyInfoGroupsSave(element: CompanyInfoGroups) {
    element.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoGroupsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentSaveByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }
  CompanyInfoGroupsDelete(element: CompanyInfoGroups) {
    this.CompanyInfoGroupsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoGroupsService.ComponentDeleteByParentID(this.CompanyInfoGroupsSort, this.CompanyInfoGroupsPaginator));
  }

  CompanyInfoFieldsSearch() {
    this.CompanyInfoFieldsService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoFieldsService.SearchByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator);
  }
  CompanyInfoFieldsSave(element: CompanyInfoFields) {
    element.ParentID = this.CompanyInfoService.FormData.ID;
    this.CompanyInfoFieldsService.FormData = element;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentSaveByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
  }
  CompanyInfoFieldsDelete(element: CompanyInfoFields) {
    this.CompanyInfoFieldsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyInfoFieldsService.ComponentDeleteByParentID(this.CompanyInfoFieldsSort, this.CompanyInfoFieldsPaginator));
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

  ThanhVienSearch() {
    this.CompanyInfoService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.CompanyInfoID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.ThanhVienService.GetByCompanyInfoIDAndEmptyToListAsync().subscribe(
      res => {
        this.ThanhVienService.List = (res as ThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ThanhVienService.DataSource = new MatTableDataSource(this.ThanhVienService.List);
        this.ThanhVienService.DataSource.sort = this.ThanhVienSort;
        this.ThanhVienService.DataSource.paginator = this.ThanhVienPaginator;
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  ThanhVienSave(element: ThanhVien) {
    this.CompanyInfoService.IsShowLoading = true;
    element.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.ThanhVienService.FormData = element;
    this.ThanhVienService.SaveAsync().subscribe(
      res => {
        this.ThanhVienSearch();
        this.CompanyInfoService.IsShowLoading = false;
        this.NotificationService.warn(environment.SaveSuccess);
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
        this.NotificationService.warn(environment.SaveNotSuccess);
      }
    );
  }
  ThanhVienDelete(element: ThanhVien) {
    if (confirm(environment.DeleteConfirm)) {
      this.CompanyInfoService.IsShowLoading = true;
      this.ThanhVienService.BaseParameter.ID = element.ID;
      this.ThanhVienService.RemoveAsync().subscribe(
        res => {
          this.ThanhVienSearch();
          this.CompanyInfoService.IsShowLoading = false;
          this.NotificationService.warn(environment.DeleteSuccess);
        },
        err => {
          this.CompanyInfoService.IsShowLoading = false;
          this.NotificationService.warn(environment.DeleteNotSuccess);
        }
      );
    }
  }




  ProductInfoSearch() {
    this.ProductInfoService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.ProductInfoService.SearchByParentIDNotEmpty(this.ProductInfoSort, this.ProductInfoPaginator);
  }
  ProductInfoDelete(element: ProductInfo) {
    this.ProductInfoService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
    this.ProductInfoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProductInfoService.ComponentDeleteByParentIDNotEmpty(this.ProductInfoSort, this.ProductInfoPaginator));
  }

  ProductInfoAdd(ID: number) {
    this.CompanyInfoService.IsShowLoading = true;
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
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }

  CompanyLakeAdd(ID: number) {
    this.CompanyInfoService.IsShowLoading = true;
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
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
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
  GetPosition() {
    this.DownloadService.GetPosition().then(pos => {
      this.CompanyInfoService.FormData.longitude = pos.lng;
      this.CompanyInfoService.FormData.latitude = pos.lat;
      this.MapLoad();
    });
  }


  map: maplibregl.Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {

  }

  ngOnDestroy() {
    this.map?.remove();
  }

  MapInitialization(longitude, latitude) {
    let zoom = 12;
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
    this.CompanyInfoSave();
    if (this.CompanyInfoService.FormData) {
      if (this.CompanyInfoService.FormData.ID > 0) {
        let latitude = environment.Latitude;
        let longitude = environment.Longitude;
        if (this.CompanyInfoService.FormData.longitude > 0) {
          if (this.CompanyInfoService.FormData.latitude > 0) {
            latitude = Number(this.CompanyInfoService.FormData.latitude);
            longitude = Number(this.CompanyInfoService.FormData.longitude);
          }
        }
        this.MapInitialization(longitude, latitude);
        if (latitude <= 90) {
          let popupContent = "<div style='opacity: 0.8; background-color: transparent;'>";
          popupContent = popupContent + "<a style='text-align: center;' class='link-primary form-label' href='#'><h1>" + this.CompanyInfoService.FormData.Name + " [" + this.CompanyInfoService.FormData.ID + "]</h1></a>";
          popupContent = popupContent + "<div>Chủ cơ sở: <b>" + this.CompanyInfoService.FormData.fullname + "</b></div>";
          popupContent = popupContent + "<div>Điện thoại: <b>" + this.CompanyInfoService.FormData.phone + "</b></div>";
          popupContent = popupContent + "<div>Địa chỉ: <b>" + this.CompanyInfoService.FormData.address + "</b></div>";
          popupContent = popupContent + "<div>Ấp thôn: <b>" + this.CompanyInfoService.FormData.hamlet + "</b></div>";
          popupContent = popupContent + "<div>Xã phường: <b>" + this.CompanyInfoService.FormData.WardDataName + "</b></div>";
          popupContent = popupContent + "<div>Quận huyện: <b>" + this.CompanyInfoService.FormData.DistrictDataName + "</b></div>";
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
}

