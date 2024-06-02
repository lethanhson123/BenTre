import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { HuongDanSuDungComponent } from './huong-dan-su-dung/huong-dan-su-dung.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { DanhMucThanhVienComponent } from './danh-muc-thanh-vien/danh-muc-thanh-vien.component';
import { PhanAnhComponent } from './phan-anh/phan-anh.component';
import { AgencyMenuComponent } from './agency-menu/agency-menu.component';
import { DanhMucUngDungComponent } from './danh-muc-ung-dung/danh-muc-ung-dung.component';
import { DanhMucChucNangComponent } from './danh-muc-chuc-nang/danh-muc-chuc-nang.component';
import { ThanhVienComponent } from './thanh-vien/thanh-vien.component';
import { ThanhVienThongTinComponent } from './thanh-vien-thong-tin/thanh-vien-thong-tin.component';
import { CompanyGroupComponent } from './company-group/company-group.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { SpeciesComponent } from './species/species.component';
import { CompanyFieldsComponent } from './company-fields/company-fields.component';
import { CompanyScopeComponent } from './company-scope/company-scope.component';
import { DanhMucSanPhamPhanLoaiComponent } from './danh-muc-san-pham-phan-loai/danh-muc-san-pham-phan-loai.component';
import { DanhMucChuongTrinhQuanLyChatLuongComponent } from './danh-muc-chuong-trinh-quan-ly-chat-luong/danh-muc-chuong-trinh-quan-ly-chat-luong.component';
import { DanhMucCompanyTinhTrangComponent } from './danh-muc-company-tinh-trang/danh-muc-company-tinh-trang.component';
import { DanhMucXepLoaiComponent } from './danh-muc-xep-loai/danh-muc-xep-loai.component';
import { DanhMucDangKyCapGiayComponent } from './danh-muc-dang-ky-cap-giay/danh-muc-dang-ky-cap-giay.component';
import { DanhMucThiTruongComponent } from './danh-muc-thi-truong/danh-muc-thi-truong.component';
import { WardDataComponent } from './ward-data/ward-data.component';
import { DistrictDataComponent } from './district-data/district-data.component';
import { ProvinceDataComponent } from './province-data/province-data.component';
import { AgencyDepartmentComponent } from './agency-department/agency-department.component';
import { AgencyUserComponent } from './agency-user/agency-user.component';

import { ATTPInfoComponent } from './attpinfo/attpinfo.component';
import { ATTPTiepNhanProductGroupsComponent } from './attptiep-nhan-product-groups/attptiep-nhan-product-groups.component';
import { ATTPInfoDocumentsComponent } from './attpinfo-documents/attpinfo-documents.component';
import { ATTPTiepNhanDocumentsComponent } from './attptiep-nhan-documents/attptiep-nhan-documents.component';
import { ATTPTiepNhanComponent } from './attptiep-nhan/attptiep-nhan.component';
import { ATTPInfoTimelinesComponent } from './attpinfo-timelines/attpinfo-timelines.component';
import { ATTPInfoProductGroupsComponent } from './attpinfo-product-groups/attpinfo-product-groups.component';
import { ATTPInfoProductGoodsComponent } from './attpinfo-product-goods/attpinfo-product-goods.component';
import { ATTPInfoProductBadsComponent } from './attpinfo-product-bads/attpinfo-product-bads.component';
import { AgencyDepartmentMenusComponent } from './agency-department-menus/agency-department-menus.component';
import { BienBanATTPComponent } from './bien-ban-attp/bien-ban-attp.component';
import { ProductUnitComponent } from './product-unit/product-unit.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductGroupComponent } from './product-group/product-group.component';

import { PlanTypeComponent } from './plan-type/plan-type.component';
import { DanhMucCompanyPhanLoaiComponent } from './danh-muc-company-phan-loai/danh-muc-company-phan-loai.component';
import { UploadCompanyInfoComponent } from './upload-company-info/upload-company-info.component';
import { CompanyInfoDanhMucCompanyTinhTrangComponent } from './company-info-danh-muc-company-tinh-trang/company-info-danh-muc-company-tinh-trang.component';
import { CompanyInfoLichSuKiemTraComponent } from './company-info-lich-su-kiem-tra/company-info-lich-su-kiem-tra.component';
import { CompanyInfoCompanyLakeComponent } from './company-info-company-lake/company-info-company-lake.component';
import { CompanyInfoCompanyUserComponent } from './company-info-company-user/company-info-company-user.component';
import { CauHoiATTPComponent } from './cau-hoi-attp/cau-hoi-attp.component';
import { CauHoiNhomComponent } from './cau-hoi-nhom/cau-hoi-nhom.component';
import { CompanyExaminationComponent } from './company-examination/company-examination.component';
import { NguonVonComponent } from './nguon-von/nguon-von.component';
import { CoSoNuoiDocumentComponent } from './co-so-nuoi-document/co-so-nuoi-document.component';
import { KienThucATTPComponent } from './kien-thuc-attp/kien-thuc-attp.component';
import { GiaoTrinhATTPComponent } from './giao-trinh-attp/giao-trinh-attp.component';
import { RegisterCoSoNuoiComponent } from './register-co-so-nuoi/register-co-so-nuoi.component';
import { RegisterCoSoNuoiDocumentsComponent } from './register-co-so-nuoi-documents/register-co-so-nuoi-documents.component';
import { RegisterCoSoNuoiLakesComponent } from './register-co-so-nuoi-lakes/register-co-so-nuoi-lakes.component';
import { RegisterHarvestComponent } from './register-harvest/register-harvest.component';
import { RegisterHarvestItemsComponent } from './register-harvest-items/register-harvest-items.component';
import { DocumentTemplateComponent } from './document-template/document-template.component';
import { CamKet17Component } from './cam-ket17/cam-ket17.component';
import { PlanThamDinhComponent } from './plan-tham-dinh/plan-tham-dinh.component';

import { StateAgencyComponent } from './state-agency/state-agency.component';
import { DanhMucChucDanhComponent } from './danh-muc-chuc-danh/danh-muc-chuc-danh.component';
import { CoSoCompanyInfoComponent } from './co-so-company-info/co-so-company-info.component';
import { CoSoProductInfoComponent } from './co-so-product-info/co-so-product-info.component';
import { CoSoCompanyLakeComponent } from './co-so-company-lake/co-so-company-lake.component';
import { CoSoThanhVienComponent } from './co-so-thanh-vien/co-so-thanh-vien.component';
import { CoSoPhanAnhComponent } from './co-so-phan-anh/co-so-phan-anh.component';
import { CoSoDocumentTemplateComponent } from './co-so-document-template/co-so-document-template.component';
import { CompanyInfoThanhVienComponent } from './company-info-thanh-vien/company-info-thanh-vien.component';
import { CoSoCauHoiATTPComponent } from './co-so-cau-hoi-attp/co-so-cau-hoi-attp.component';
import { CoSoCompanyExaminationComponent } from './co-so-company-examination/co-so-company-examination.component';
import { CoSoQuyTrinhCapGiayChungNhanATTPComponent } from './co-so-quy-trinh-cap-giay-chung-nhan-attp/co-so-quy-trinh-cap-giay-chung-nhan-attp.component';
import { CoSoATTPInfoComponent } from './co-so-attpinfo/co-so-attpinfo.component';
import { DanhMucCompanyTrangThaiComponent } from './danh-muc-company-trang-thai/danh-muc-company-trang-thai.component';
import { CompanyInfoStateAgencyComponent } from './company-info-state-agency/company-info-state-agency.component';
import { CompanyInfoGroupsComponent } from './company-info-groups/company-info-groups.component';
import { CompanyInfoFieldsComponent } from './company-info-fields/company-info-fields.component';
import { CoSoMapComponent } from './co-so-map/co-so-map.component';
import { CoSoCompanyInfoFieldsComponent } from './co-so-company-info-fields/co-so-company-info-fields.component';
import { CoSoCompanyInfoGroupsComponent } from './co-so-company-info-groups/co-so-company-info-groups.component';
import { CoSoCompanyInfoStateAgencyComponent } from './co-so-company-info-state-agency/co-so-company-info-state-agency.component';
import { CoSoRegisterHarvestComponent } from './co-so-register-harvest/co-so-register-harvest.component';
import { CompanyInfoMapComponent } from './company-info-map/company-info-map.component';
import { DanhMucATTPLoaiHoSoComponent } from './danh-muc-attploai-ho-so/danh-muc-attploai-ho-so.component';
import { DanhMucATTPTinhTrangComponent } from './danh-muc-attptinh-trang/danh-muc-attptinh-trang.component';
import { DanhMucATTPXepLoaiComponent } from './danh-muc-attpxep-loai/danh-muc-attpxep-loai.component';
import { DanhMucBienBanATTPComponent } from './danh-muc-bien-ban-attp/danh-muc-bien-ban-attp.component';
import { DanhMucThamDinhKetQuaDanhGiaComponent } from './danh-muc-tham-dinh-ket-qua-danh-gia/danh-muc-tham-dinh-ket-qua-danh-gia.component';
import { DanhMucCompanyInfoComponent } from './danh-muc-company-info/danh-muc-company-info.component';
import { PlanThamDinhCompaniesQuaHanComponent } from './plan-tham-dinh-companies-qua-han/plan-tham-dinh-companies-qua-han.component';
import { Report0001Component } from './report0001/report0001.component';
import { PlanThamDinhCompaniesLichSuComponent } from './plan-tham-dinh-companies-lich-su/plan-tham-dinh-companies-lich-su.component';
import { DanhMucLayMauComponent } from './danh-muc-lay-mau/danh-muc-lay-mau.component';
import { DanhMucLayMauChiTieuComponent } from './danh-muc-lay-mau-chi-tieu/danh-muc-lay-mau-chi-tieu.component';
import { DanhMucLayMauPhanLoaiComponent } from './danh-muc-lay-mau-phan-loai/danh-muc-lay-mau-phan-loai.component';
import { PlanThamDinhChuoiCungUngComponent } from './plan-tham-dinh-chuoi-cung-ung/plan-tham-dinh-chuoi-cung-ung.component';
import { PlanThamDinhCompaniesChuoiCungUngComponent } from './plan-tham-dinh-companies-chuoi-cung-ung/plan-tham-dinh-companies-chuoi-cung-ung.component';
import { PlanThamDinhGiamSatDuLuongComponent } from './plan-tham-dinh-giam-sat-du-luong/plan-tham-dinh-giam-sat-du-luong.component';
import { DanhMucThoiGianLayMauComponent } from './danh-muc-thoi-gian-lay-mau/danh-muc-thoi-gian-lay-mau.component';
import { PlanThamDinhCompaniesGiamSatDuLuongComponent } from './plan-tham-dinh-companies-giam-sat-du-luong/plan-tham-dinh-companies-giam-sat-du-luong.component';
import { PlanThamDinhAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-an-toan-thuc-pham-sau-thu-hoach.component';
import { Report0003Component } from './report0003/report0003.component';
import { Report0002Component } from './report0002/report0002.component';
import { PlanThamDinhCompaniesCamKet17Component } from './plan-tham-dinh-companies-cam-ket17/plan-tham-dinh-companies-cam-ket17.component';
import { Report00040005Component } from './report00040005/report00040005.component';
import { UploadCamKet17Component } from './upload-cam-ket17/upload-cam-ket17.component';
import { LoginComponent } from './login/login.component';

import { DanhMucQuocGiaComponent } from './danh-muc-quoc-gia/danh-muc-quoc-gia.component';
import { TuCongBoSanPhamComponent } from './tu-cong-bo-san-pham/tu-cong-bo-san-pham.component';
import { PlanThamDinhNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-nhuyen-the-hai-manh-vo/plan-tham-dinh-nhuyen-the-hai-manh-vo.component';
import { Report0007Component } from './report0007/report0007.component';
import { Report0008Component } from './report0008/report0008.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { ThanhVienLichSuThongBaoComponent } from './thanh-vien-lich-su-thong-bao/thanh-vien-lich-su-thong-bao.component';
import { PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent } from './plan-tham-dinh-companies-tham-dinh-an-toan-thuc-pham/plan-tham-dinh-companies-tham-dinh-an-toan-thuc-pham.component';
import { DanhMucProductGroupComponent } from './danh-muc-product-group/danh-muc-product-group.component';
import { Report0009Component } from './report0009/report0009.component';
import { Report0010Component } from './report0010/report0010.component';
import { Report0011Component } from './report0011/report0011.component';
import { Report0012Component } from './report0012/report0012.component';
import { Report0013Component } from './report0013/report0013.component';
import { Report0014Component } from './report0014/report0014.component';
import { UploadThamDinhAnToanThucPhamComponent } from './upload-tham-dinh-an-toan-thuc-pham/upload-tham-dinh-an-toan-thuc-pham.component';
import { Report0015Component } from './report0015/report0015.component';
import { UploadGiamSatDuLuongComponent } from './upload-giam-sat-du-luong/upload-giam-sat-du-luong.component';
import { CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent } from './co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham/co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham.component';
import { ProductInfo001Component } from './product-info001/product-info001.component';
import { PlanThamDinhThanhTraChuyenNganhComponent } from './plan-tham-dinh-thanh-tra-chuyen-nganh/plan-tham-dinh-thanh-tra-chuyen-nganh.component';
import { PlanThamDinhKiemTraTapChatComponent } from './plan-tham-dinh-kiem-tra-tap-chat/plan-tham-dinh-kiem-tra-tap-chat.component';
import { PlanThamDinhKeHoachTongHop001Component } from './plan-tham-dinh-ke-hoach-tong-hop001/plan-tham-dinh-ke-hoach-tong-hop001.component';
import { PlanThamDinhKeHoachTongHop002Component } from './plan-tham-dinh-ke-hoach-tong-hop002/plan-tham-dinh-ke-hoach-tong-hop002.component';
import { ThanhVien001Component } from './thanh-vien001/thanh-vien001.component';
import { ThanhVienThongBaoComponent } from './thanh-vien-thong-bao/thanh-vien-thong-bao.component';
import { DanhMucHinhThucNuoiComponent } from './danh-muc-hinh-thuc-nuoi/danh-muc-hinh-thuc-nuoi.component';
import { CompanyInfoCoSoNuoiComponent } from './company-info-co-so-nuoi/company-info-co-so-nuoi.component';
import { CoSoCompanyInfoDonViDongGoiComponent } from './co-so-company-info-don-vi-dong-goi/co-so-company-info-don-vi-dong-goi.component';
import { CompanyInfoDonViDongGoiComponent } from './company-info-don-vi-dong-goi/company-info-don-vi-dong-goi.component';
import { UploadMaSoCoSoNuoiComponent } from './upload-ma-so-co-so-nuoi/upload-ma-so-co-so-nuoi.component';
import { Report0016Component } from './report0016/report0016.component';
import { Report0017Component } from './report0017/report0017.component';
import { Dashboard001Component } from './dashboard001/dashboard001.component';
import { Dashboard002Component } from './dashboard002/dashboard002.component';
import { PlanThamDinhCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-company-info-don-vi-dong-goi/plan-tham-dinh-company-info-don-vi-dong-goi.component';
import { CompanyInfoVungTrongComponent } from './company-info-vung-trong/company-info-vung-trong.component';
import { PlanThamDinhCompanyInfoVungTrongComponent } from './plan-tham-dinh-company-info-vung-trong/plan-tham-dinh-company-info-vung-trong.component';
import { UploadNhuyenThe02ManhVoComponent } from './upload-nhuyen-the02-manh-vo/upload-nhuyen-the02-manh-vo.component';
import { PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau/plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';




const routes: Routes = [
  { path: '', redirectTo: '/Login', pathMatch: 'full' },
  {
    path: 'Homepage', component: HomepageComponent,
  },
  {
    path: 'GioiThieu', component: GioiThieuComponent,
  },
  {
    path: 'HuongDan', component: HuongDanSuDungComponent,
  },
  {
    path: 'AgencyDepartment', component: AgencyDepartmentComponent,
  },
  {
    path: 'AgencyDepartmentMenus', component: AgencyDepartmentMenusComponent,
  },
  {
    path: 'AgencyMenu', component: AgencyMenuComponent,
  },
  {
    path: 'AgencyUser', component: AgencyUserComponent,
  },


  {
    path: 'ATTPInfo', component: ATTPInfoComponent,
  },
  {
    path: 'ATTPInfoDocuments', component: ATTPInfoDocumentsComponent,
  },
  {
    path: 'ATTPInfoProductBads', component: ATTPInfoProductBadsComponent,
  },
  {
    path: 'ATTPInfoProductGoods', component: ATTPInfoProductGoodsComponent,
  },
  {
    path: 'ATTPTiepNhanProductGroups', component: ATTPTiepNhanProductGroupsComponent,
  },
  {
    path: 'ATTPInfoTimelines', component: ATTPInfoTimelinesComponent,
  },
  {
    path: 'ATTPTiepNhan', component: ATTPTiepNhanComponent,
  },
  {
    path: 'ATTPTiepNhanDocuments', component: ATTPTiepNhanDocumentsComponent,
  },
  {
    path: 'ATTPInfoProductGroups', component: ATTPInfoProductGroupsComponent,
  },

  {
    path: 'BienBanATTP', component: BienBanATTPComponent,
  },

  {
    path: 'CamKet17', component: CamKet17Component,
  },
  {
    path: 'CauHoiATTP', component: CauHoiATTPComponent,
  },
  {
    path: 'CauHoiNhom', component: CauHoiNhomComponent,
  },

  {
    path: 'CompanyExamination', component: CompanyExaminationComponent,
  },
  {
    path: 'CompanyFields', component: CompanyFieldsComponent,
  },
  {
    path: 'CompanyGroup', component: CompanyGroupComponent,
  },

  {
    path: 'CompanyInfo', component: CompanyInfoComponent,
  },
  {
    path: 'CompanyInfoLichSuKiemTra', component: CompanyInfoLichSuKiemTraComponent,
  },
  {
    path: 'CompanyInfoCompanyLake', component: CompanyInfoCompanyLakeComponent,
  },
  {
    path: 'CompanyScope', component: CompanyScopeComponent,
  },
  {
    path: 'CompanyInfoDanhMucCompanyTinhTrang', component: CompanyInfoDanhMucCompanyTinhTrangComponent,
  },
  {
    path: 'CompanyInfoStateAgency', component: CompanyInfoStateAgencyComponent,
  },
  {
    path: 'CompanyInfoGroups', component: CompanyInfoGroupsComponent,
  },
  {
    path: 'CompanyInfoFields', component: CompanyInfoFieldsComponent,
  },
  {
    path: 'CompanyInfoMap', component: CompanyInfoMapComponent,
  },

  {
    path: 'CompanyInfoThanhVien', component: CompanyInfoThanhVienComponent,
  },
  {
    path: 'CoSoCompanyInfo', component: CoSoCompanyInfoComponent,
  },
  {
    path: 'CoSoCompanyInfoDonViDongGoi', component: CoSoCompanyInfoDonViDongGoiComponent,
  },
  {
    path: 'CoSoThanhVien', component: CoSoThanhVienComponent,
  },
  {
    path: 'CoSoCompanyLake', component: CoSoCompanyLakeComponent,
  },
  {
    path: 'CoSoProductInfo', component: CoSoProductInfoComponent,
  },
  {
    path: 'CoSoPhanAnh', component: CoSoPhanAnhComponent,
  },
  {
    path: 'CoSoDocumentTemplate', component: CoSoDocumentTemplateComponent,
  },
  {
    path: 'CoSoCauHoiATTP', component: CoSoCauHoiATTPComponent,
  },
  {
    path: 'CoSoCompanyExamination', component: CoSoCompanyExaminationComponent,
  },
  {
    path: 'CoSoQuyTrinhCapGiayChungNhanATTP', component: CoSoQuyTrinhCapGiayChungNhanATTPComponent,
  },
  {
    path: 'CoSoATTPInfo', component: CoSoATTPInfoComponent,
  },
  {
    path: 'CoSoMap', component: CoSoMapComponent,
  },
  {
    path: 'CoSoCompanyInfoFields', component: CoSoCompanyInfoFieldsComponent,
  },
  {
    path: 'CoSoCompanyInfoGroups', component: CoSoCompanyInfoGroupsComponent,
  },
  {
    path: 'CoSoCompanyInfoStateAgency', component: CoSoCompanyInfoStateAgencyComponent,
  },
  {
    path: 'CoSoNuoiDocument', component: CoSoNuoiDocumentComponent,
  },
  {
    path: 'CoSoRegisterHarvest', component: CoSoRegisterHarvestComponent,
  },
  {
    path: 'CoSoPlanThamDinhChuoiCungUngAnToanThucPham', component: CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent,
  },
  {
    path: 'CompanyInfoCoSoNuoi', component: CompanyInfoCoSoNuoiComponent,
  },

  {
    path: 'CompanyInfoDonViDongGoi', component: CompanyInfoDonViDongGoiComponent,
  },
  {
    path: 'CompanyInfoVungTrong', component: CompanyInfoVungTrongComponent,
  },

  {
    path: 'DanhMucChucNang', component: DanhMucChucNangComponent,
  },
  {
    path: 'DanhMucChuongTrinhQuanLyChatLuong', component: DanhMucChuongTrinhQuanLyChatLuongComponent,
  },
  {
    path: 'DanhMucCompanyPhanLoai', component: DanhMucCompanyPhanLoaiComponent,
  },
  {
    path: 'DanhMucCompanyTinhTrang', component: DanhMucCompanyTinhTrangComponent,
  },
  {
    path: 'DanhMucDangKyCapGiay', component: DanhMucDangKyCapGiayComponent,
  },
  {
    path: 'DanhMucSanPhamPhanLoai', component: DanhMucSanPhamPhanLoaiComponent,
  },
  {
    path: 'DanhMucThanhVien', component: DanhMucThanhVienComponent,
  },
  {
    path: 'DanhMucThiTruong', component: DanhMucThiTruongComponent,
  },
  {
    path: 'DanhMucUngDung', component: DanhMucUngDungComponent,
  },
  {
    path: 'DanhMucXepLoai', component: DanhMucXepLoaiComponent,
  },
  {
    path: 'DanhMucCompanyTrangThai', component: DanhMucCompanyTrangThaiComponent,
  },
  {
    path: 'DanhMucATTPLoaiHoSo', component: DanhMucATTPLoaiHoSoComponent,
  },
  {
    path: 'DanhMucATTPTinhTrang', component: DanhMucATTPTinhTrangComponent,
  },
  {
    path: 'DanhMucATTPXepLoai', component: DanhMucATTPXepLoaiComponent,
  },
  {
    path: 'DanhMucBienBanATTP', component: DanhMucBienBanATTPComponent,
  },
  {
    path: 'DanhMucThamDinhKetQuaDanhGia', component: DanhMucThamDinhKetQuaDanhGiaComponent,
  },
  {
    path: 'DanhMucCompanyInfo', component: DanhMucCompanyInfoComponent,
  },
  {
    path: 'DanhMucLayMau', component: DanhMucLayMauComponent,
  },
  {
    path: 'DanhMucLayMauPhanLoai', component: DanhMucLayMauPhanLoaiComponent,
  },
  {
    path: 'DanhMucLayMauChiTieu', component: DanhMucLayMauChiTieuComponent,
  },
  {
    path: 'DanhMucThoiGianLayMau', component: DanhMucThoiGianLayMauComponent,
  },
  {
    path: 'DanhMucProductGroup', component: DanhMucProductGroupComponent,
  },
  {
    path: 'DanhMucHinhThucNuoi', component: DanhMucHinhThucNuoiComponent,
  },


  {
    path: 'DistrictData', component: DistrictDataComponent,
  },
  {
    path: 'DocumentTemplate', component: DocumentTemplateComponent,
  },
  {
    path: 'GiaoTrinhATTP', component: GiaoTrinhATTPComponent,
  },

  {
    path: 'KienThucATTP', component: KienThucATTPComponent,
  },
  {
    path: 'NguonVon', component: NguonVonComponent,
  },
  {
    path: 'PhanAnh', component: PhanAnhComponent,
  },
  {
    path: 'PlanType', component: PlanTypeComponent,
  },
  {
    path: 'PlanThamDinh', component: PlanThamDinhComponent,
  },
  {
    path: 'PlanThamDinhChuoiCungUng', component: PlanThamDinhChuoiCungUngComponent,
  },
  {
    path: 'PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMau', component: PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent,
  },
  {
    path: 'PlanThamDinhCompaniesChuoiCungUng', component: PlanThamDinhCompaniesChuoiCungUngComponent,
  },
  {
    path: 'PlanThamDinhCompaniesGiamSatDuLuong', component: PlanThamDinhCompaniesGiamSatDuLuongComponent,
  },
  {
    path: 'PlanThamDinhAnToanThucPhamSauThuHoach', component: PlanThamDinhAnToanThucPhamSauThuHoachComponent,
  },
  {
    path: 'PlanThamDinhCompaniesCamKet17', component: PlanThamDinhCompaniesCamKet17Component,
  },
  {
    path: 'PlanThamDinhCompaniesQuaHan', component: PlanThamDinhCompaniesQuaHanComponent,
  },
  {
    path: 'PlanThamDinhCompaniesThamDinhAnToanThucPham', component: PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent,
  },
  {
    path: 'PlanThamDinhCompaniesLichSu', component: PlanThamDinhCompaniesLichSuComponent,
  },
  {
    path: 'PlanThamDinhGiamSatDuLuong', component: PlanThamDinhGiamSatDuLuongComponent,
  },
  {
    path: 'PlanThamDinhNhuyenTheHaiManhVo', component: PlanThamDinhNhuyenTheHaiManhVoComponent,
  },
  {
    path: 'PlanThamDinhThanhTraChuyenNganh', component: PlanThamDinhThanhTraChuyenNganhComponent,
  },
  {
    path: 'PlanThamDinhKiemTraTapChat', component: PlanThamDinhKiemTraTapChatComponent,
  },
  {
    path: 'PlanThamDinhKeHoachTongHop001', component: PlanThamDinhKeHoachTongHop001Component,
  },
  {
    path: 'PlanThamDinhKeHoachTongHop002', component: PlanThamDinhKeHoachTongHop002Component,
  },
  {
    path: 'PlanThamDinhCompanyInfoDonViDongGoi', component: PlanThamDinhCompanyInfoDonViDongGoiComponent,
  },
  {
    path: 'PlanThamDinhCompanyInfoVungTrong', component: PlanThamDinhCompanyInfoVungTrongComponent,
  },

  {
    path: 'TuCongBoSanPham', component: TuCongBoSanPhamComponent,
  },

  {
    path: 'ProductGroup', component: ProductGroupComponent,
  },
  {
    path: 'ProductInfo', component: ProductInfoComponent,
  },
  {
    path: 'ProductInfo001', component: ProductInfo001Component,
  },
  {
    path: 'ProductUnit', component: ProductUnitComponent,
  },

  {
    path: 'ProvinceData', component: ProvinceDataComponent,
  },
  {
    path: 'RegisterCoSoNuoi', component: RegisterCoSoNuoiComponent,
  },
  {
    path: 'RegisterCoSoNuoiDocuments', component: RegisterCoSoNuoiDocumentsComponent,
  },
  {
    path: 'RegisterCoSoNuoiLakes', component: RegisterCoSoNuoiLakesComponent,
  },
  {
    path: 'RegisterHarvest', component: RegisterHarvestComponent,
  },
  {
    path: 'RegisterHarvestItems', component: RegisterHarvestItemsComponent,
  },
  {
    path: 'Species', component: SpeciesComponent,
  },

  {
    path: 'PushNotification', component: PushNotificationComponent,
  },
  {
    path: 'ThanhVienLichSuThongBao', component: ThanhVienLichSuThongBaoComponent,
  },
  {
    path: 'ThanhVien', component: ThanhVienComponent,
  },
  {
    path: 'ThanhVien001', component: ThanhVien001Component,
  },
  {
    path: 'ThanhVienThongBao', component: ThanhVienThongBaoComponent,
  },
  {
    path: 'WardData', component: WardDataComponent,
  },
  {
    path: 'ThanhVienThongTin', component: ThanhVienThongTinComponent,
  },
  {
    path: 'StateAgency', component: StateAgencyComponent,
  },
  {
    path: 'DanhMucChucDanh', component: DanhMucChucDanhComponent,
  },
  {
    path: 'DanhMucQuocGia', component: DanhMucQuocGiaComponent,
  },
  {
    path: 'Login', component: LoginComponent,
  },

  {
    path: 'UploadCompanyInfo', component: UploadCompanyInfoComponent,
  },
  {
    path: 'UploadThamDinhAnToanThucPham', component: UploadThamDinhAnToanThucPhamComponent,
  },
  {
    path: 'UploadCamKet17', component: UploadCamKet17Component,
  },
  {
    path: 'UploadMaSoCoSoNuoi', component: UploadMaSoCoSoNuoiComponent,
  },
  {
    path: 'UploadGiamSatDuLuong', component: UploadGiamSatDuLuongComponent,
  },
  {
    path: 'UploadNhuyenThe02ManhVo', component: UploadNhuyenThe02ManhVoComponent,
  },

  {
    path: 'Report0001', component: Report0001Component,
  },
  {
    path: 'Report0002', component: Report0002Component,
  },
  {
    path: 'Report0003', component: Report0003Component,
  },
  {
    path: 'Report00040005', component: Report00040005Component,
  },
  {
    path: 'Report0007', component: Report0007Component,
  },
  {
    path: 'Report0008', component: Report0008Component,
  },
  {
    path: 'Report0009', component: Report0009Component,
  },
  {
    path: 'Report0010', component: Report0010Component,
  },
  {
    path: 'Report0011', component: Report0011Component,
  },
  {
    path: 'Report0012', component: Report0012Component,
  },
  {
    path: 'Report0013', component: Report0013Component,
  },
  {
    path: 'Report0014', component: Report0014Component,
  },
  {
    path: 'Report0015', component: Report0015Component,
  },
  {
    path: 'Report0016', component: Report0016Component,
  },
  {
    path: 'Report0017', component: Report0017Component,
  },

  {
    path: 'Dashboard001', component: Dashboard001Component,
  },
  {
    path: 'Dashboard002', component: Dashboard002Component,
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true, initialNavigation: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }









































































