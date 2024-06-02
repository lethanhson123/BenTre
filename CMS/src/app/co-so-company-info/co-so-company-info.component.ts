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
import { DanhMucCompanyTrangThai } from 'src/app/shared/DanhMucCompanyTrangThai.model';
import { DanhMucCompanyTrangThaiService } from 'src/app/shared/DanhMucCompanyTrangThai.service';
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

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-company-info',
  templateUrl: './co-so-company-info.component.html',
  styleUrls: ['./co-so-company-info.component.css']
})
export class CoSoCompanyInfoComponent implements OnInit {

  constructor(
    private dialog: MatDialog,        

    public NotificationService: NotificationService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,
    public DanhMucChuongTrinhQuanLyChatLuongService: DanhMucChuongTrinhQuanLyChatLuongService,
    public DanhMucCompanyTinhTrangService: DanhMucCompanyTinhTrangService,
    public DanhMucThiTruongService: DanhMucThiTruongService,
    public DanhMucDangKyCapGiayService: DanhMucDangKyCapGiayService,
    public DanhMucXepLoaiService: DanhMucXepLoaiService,
    public DanhMucCompanyTrangThaiService: DanhMucCompanyTrangThaiService,
    public DanhMucHinhThucNuoiService: DanhMucHinhThucNuoiService,

    public CompanyScopeService: CompanyScopeService,
    public CompanyGroupService: CompanyGroupService,
    public SpeciesService: SpeciesService,
    public CompanyFieldsService: CompanyFieldsService,

    public CompanyInfoService: CompanyInfoService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
    this.DanhMucHinhThucNuoiSearch();
    this.DanhMucCompanyTrangThaiSearch();
    this.CompanyScopeSearch();
    this.CompanyGroupSearch();
    this.SpeciesSearch();
    this.CompanyFieldsSearch();
    this.DistrictDataSearch();
    this.DanhMucChuongTrinhQuanLyChatLuongSearch();
    this.DanhMucCompanyTinhTrangSearch();
    this.DanhMucThiTruongSearch();
    this.DanhMucDangKyCapGiaySearch();
    this.DanhMucXepLoaiSearch();
    this.CompanyInfoGetData();
    
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
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
  DanhMucHinhThucNuoiSearch() {
    this.DanhMucHinhThucNuoiService.ComponentGetAllToListAsync();
  }
  DanhMucCompanyTrangThaiSearch() {
    this.DanhMucCompanyTrangThaiService.ComponentGetAllToListAsync();
  }

  DanhMucDangKyCapGiaySearch() {
    this.DanhMucDangKyCapGiayService.ComponentGetAllToListAsync();
  }
  DanhMucXepLoaiSearch() {
    this.DanhMucXepLoaiService.ComponentGetAllToListAsync();
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
  CompanyInfoGetData() {
    this.CompanyInfoService.IsShowLoading = true;
    console.log(this.ThanhVienService.FormDataLogin);
    this.CompanyInfoService.BaseParameter.ID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;        
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  } 
  CompanyInfoSave() {
    this.NotificationService.warn(this.CompanyInfoService.ComponentSaveForm());
  }  
}