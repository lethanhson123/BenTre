import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CKEditorModule } from 'ngx-ckeditor';
import { ChartsModule } from 'ng2-charts';
import { CookieService } from 'ngx-cookie-service';
import { MAT_DATE_LOCALE } from '@angular/material/core';
import { MaterialModule } from './material/material.module';
import { GoogleMapsModule } from '@angular/google-maps';

import { NotificationService } from './shared/Notification.service';


import { AppComponent } from './app.component';
import { LoadingComponent } from './loading/loading.component';
import { HomepageComponent } from './homepage/homepage.component';
import { ThanhVienThongTinComponent } from './thanh-vien-thong-tin/thanh-vien-thong-tin.component';
import { DanhMucThanhVienComponent } from './danh-muc-thanh-vien/danh-muc-thanh-vien.component';
import { PhanAnhComponent } from './phan-anh/phan-anh.component';
import { AgencyMenuComponent } from './agency-menu/agency-menu.component';
import { DanhMucUngDungComponent } from './danh-muc-ung-dung/danh-muc-ung-dung.component';
import { DanhMucChucNangComponent } from './danh-muc-chuc-nang/danh-muc-chuc-nang.component';
import { ThanhVienComponent } from './thanh-vien/thanh-vien.component';
import { ThanhVienDetailComponent } from './thanh-vien-detail/thanh-vien-detail.component';
import { CompanyInfoGroupsComponent } from './company-info-groups/company-info-groups.component';
import { CompanyGroupComponent } from './company-group/company-group.component';
import { CompanyInfoComponent } from './company-info/company-info.component';
import { CompanyInfoDetailComponent } from './company-info-detail/company-info-detail.component';
import { SpeciesComponent } from './species/species.component';
import { CompanyScopeComponent } from './company-scope/company-scope.component';
import { CompanyFieldsComponent } from './company-fields/company-fields.component';
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
import { ATTPInfoDocumentsComponent } from './attpinfo-documents/attpinfo-documents.component';
import { ATTPTiepNhanProductGroupsComponent } from './attptiep-nhan-product-groups/attptiep-nhan-product-groups.component';
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
import { CauHoiNhomComponent } from './cau-hoi-nhom/cau-hoi-nhom.component';
import { CauHoiATTPComponent } from './cau-hoi-attp/cau-hoi-attp.component';
import { CauHoiATTPDetailComponent } from './cau-hoi-attpdetail/cau-hoi-attpdetail.component';
import { CompanyExaminationComponent } from './company-examination/company-examination.component';
import { CompanyExaminationDetailComponent } from './company-examination-detail/company-examination-detail.component';
import { NguonVonComponent } from './nguon-von/nguon-von.component';
import { CoSoNuoiDocumentComponent } from './co-so-nuoi-document/co-so-nuoi-document.component';
import { KienThucATTPComponent } from './kien-thuc-attp/kien-thuc-attp.component';
import { GiaoTrinhATTPComponent } from './giao-trinh-attp/giao-trinh-attp.component';
import { ProductInfoDetailComponent } from './product-info-detail/product-info-detail.component';
import { RegisterCoSoNuoiComponent } from './register-co-so-nuoi/register-co-so-nuoi.component';
import { RegisterCoSoNuoiDocumentsComponent } from './register-co-so-nuoi-documents/register-co-so-nuoi-documents.component';
import { RegisterCoSoNuoiLakesComponent } from './register-co-so-nuoi-lakes/register-co-so-nuoi-lakes.component';
import { RegisterHarvestComponent } from './register-harvest/register-harvest.component';
import { RegisterHarvestItemsComponent } from './register-harvest-items/register-harvest-items.component';

import { DocumentTemplateComponent } from './document-template/document-template.component';
import { CamKet17Component } from './cam-ket17/cam-ket17.component';
import { PlanThamDinhComponent } from './plan-tham-dinh/plan-tham-dinh.component';

import { StateAgencyComponent } from './state-agency/state-agency.component';
import { ATTPInfoDetailComponent } from './attpinfo-detail/attpinfo-detail.component';
import { DanhMucThanhVienDetailComponent } from './danh-muc-thanh-vien-detail/danh-muc-thanh-vien-detail.component';
import { DanhMucChucDanhComponent } from './danh-muc-chuc-danh/danh-muc-chuc-danh.component';
import { CoSoCompanyInfoComponent } from './co-so-company-info/co-so-company-info.component';
import { CoSoCompanyLakeComponent } from './co-so-company-lake/co-so-company-lake.component';
import { CoSoProductInfoComponent } from './co-so-product-info/co-so-product-info.component';
import { CoSoThanhVienComponent } from './co-so-thanh-vien/co-so-thanh-vien.component';
import { DanhMucChucDanhDetailComponent } from './danh-muc-chuc-danh-detail/danh-muc-chuc-danh-detail.component';
import { AgencyDepartmentDetailComponent } from './agency-department-detail/agency-department-detail.component';
import { PhanAnhDetailComponent } from './phan-anh-detail/phan-anh-detail.component';
import { CoSoPhanAnhComponent } from './co-so-phan-anh/co-so-phan-anh.component';
import { CoSoMapComponent } from './co-so-map/co-so-map.component';
import { CoSoDocumentTemplateComponent } from './co-so-document-template/co-so-document-template.component';
import { CompanyInfoThanhVienComponent } from './company-info-thanh-vien/company-info-thanh-vien.component';
import { CoSoCauHoiATTPComponent } from './co-so-cau-hoi-attp/co-so-cau-hoi-attp.component';
import { CoSoCompanyExaminationComponent } from './co-so-company-examination/co-so-company-examination.component';
import { CoSoCompanyExaminationDetailComponent } from './co-so-company-examination-detail/co-so-company-examination-detail.component';
import { CoSoCompanyStaffExamDetailComponent } from './co-so-company-staff-exam-detail/co-so-company-staff-exam-detail.component';
import { CoSoQuyTrinhCapGiayChungNhanATTPComponent } from './co-so-quy-trinh-cap-giay-chung-nhan-attp/co-so-quy-trinh-cap-giay-chung-nhan-attp.component';
import { CoSoATTPInfoComponent } from './co-so-attpinfo/co-so-attpinfo.component';
import { CoSoATTPInfoDetailComponent } from './co-so-attpinfo-detail/co-so-attpinfo-detail.component';
import { KienThucATTPDetailComponent } from './kien-thuc-attpdetail/kien-thuc-attpdetail.component';
import { DanhMucCompanyTrangThaiComponent } from './danh-muc-company-trang-thai/danh-muc-company-trang-thai.component';
import { CompanyInfoStateAgencyComponent } from './company-info-state-agency/company-info-state-agency.component';
import { CompanyLakeDetailComponent } from './company-lake-detail/company-lake-detail.component';
import { CompanyLakeMapComponent } from './company-lake-map/company-lake-map.component';
import { CompanyInfoFieldsComponent } from './company-info-fields/company-info-fields.component';
import { CoSoCompanyInfoStateAgencyComponent } from './co-so-company-info-state-agency/co-so-company-info-state-agency.component';
import { CoSoCompanyInfoGroupsComponent } from './co-so-company-info-groups/co-so-company-info-groups.component';
import { CoSoCompanyInfoFieldsComponent } from './co-so-company-info-fields/co-so-company-info-fields.component';
import { CompanyInfoMapComponent } from './company-info-map/company-info-map.component';
import { DanhMucATTPLoaiHoSoComponent } from './danh-muc-attploai-ho-so/danh-muc-attploai-ho-so.component';
import { DanhMucATTPTinhTrangComponent } from './danh-muc-attptinh-trang/danh-muc-attptinh-trang.component';
import { DanhMucATTPXepLoaiComponent } from './danh-muc-attpxep-loai/danh-muc-attpxep-loai.component';
import { CoSoATTPInfoViewComponent } from './co-so-attpinfo-view/co-so-attpinfo-view.component';
import { ATTPInfoDetailByIDComponent } from './attpinfo-detail-by-id/attpinfo-detail-by-id.component';
import { PlanThamDinhDetailComponent } from './plan-tham-dinh-detail/plan-tham-dinh-detail.component';
import { CoSoMapDetailComponent } from './co-so-map-detail/co-so-map-detail.component';
import { PlanThamDinhCompaniesComponent } from './plan-tham-dinh-companies/plan-tham-dinh-companies.component';
import { PlanThamDinhCompaniesDetailComponent } from './plan-tham-dinh-companies-detail/plan-tham-dinh-companies-detail.component';
import { DanhMucBienBanATTPComponent } from './danh-muc-bien-ban-attp/danh-muc-bien-ban-attp.component';
import { BienBanATTPDetailComponent } from './bien-ban-attpdetail/bien-ban-attpdetail.component';
import { DanhMucThamDinhKetQuaDanhGiaComponent } from './danh-muc-tham-dinh-ket-qua-danh-gia/danh-muc-tham-dinh-ket-qua-danh-gia.component';
import { PlanThamDinhCompanyDocumentDetailComponent } from './plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { DocumentTemplateDetailComponent } from './document-template-detail/document-template-detail.component';
import { DanhMucCompanyInfoComponent } from './danh-muc-company-info/danh-muc-company-info.component';
import { PlanThamDinhCompaniesQuaHanComponent } from './plan-tham-dinh-companies-qua-han/plan-tham-dinh-companies-qua-han.component';
import { Report0001Component } from './report0001/report0001.component';
import { PlanThamDinhCompaniesLichSuComponent } from './plan-tham-dinh-companies-lich-su/plan-tham-dinh-companies-lich-su.component';
import { CoSoRegisterHarvestComponent } from './co-so-register-harvest/co-so-register-harvest.component';
import { RegisterHarvestDetailComponent } from './register-harvest-detail/register-harvest-detail.component';
import { RegisterHarvestDetailByIDComponent } from './register-harvest-detail-by-id/register-harvest-detail-by-id.component';
import { DanhMucLayMauComponent } from './danh-muc-lay-mau/danh-muc-lay-mau.component';
import { DanhMucLayMauChiTieuComponent } from './danh-muc-lay-mau-chi-tieu/danh-muc-lay-mau-chi-tieu.component';
import { DanhMucLayMauPhanLoaiComponent } from './danh-muc-lay-mau-phan-loai/danh-muc-lay-mau-phan-loai.component';
import { PlanThamDinhChuoiCungUngComponent } from './plan-tham-dinh-chuoi-cung-ung/plan-tham-dinh-chuoi-cung-ung.component';
import { PlanThamDinhDetailChuoiCungUngComponent } from './plan-tham-dinh-detail-chuoi-cung-ung/plan-tham-dinh-detail-chuoi-cung-ung.component';
import { ThanhVienDetail001Component } from './thanh-vien-detail001/thanh-vien-detail001.component';
import { PlanThamDinhDanhMucLayMauDetailComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail/plan-tham-dinh-danh-muc-lay-mau-detail.component';
import { DanhMucLayMauChiTieuDetailComponent } from './danh-muc-lay-mau-chi-tieu-detail/danh-muc-lay-mau-chi-tieu-detail.component';
import { DanhMucLayMauDetailComponent } from './danh-muc-lay-mau-detail/danh-muc-lay-mau-detail.component';
import { PlanThamDinhCompaniesDetailChuoiCungUngComponent } from './plan-tham-dinh-companies-detail-chuoi-cung-ung/plan-tham-dinh-companies-detail-chuoi-cung-ung.component';
import { PlanThamDinhCompaniesChuoiCungUngComponent } from './plan-tham-dinh-companies-chuoi-cung-ung/plan-tham-dinh-companies-chuoi-cung-ung.component';
import { PlanThamDinhGiamSatDuLuongComponent } from './plan-tham-dinh-giam-sat-du-luong/plan-tham-dinh-giam-sat-du-luong.component';
import { PlanThamDinhDetailGiamSatDuLuongComponent } from './plan-tham-dinh-detail-giam-sat-du-luong/plan-tham-dinh-detail-giam-sat-du-luong.component';
import { DanhMucThoiGianLayMauComponent } from './danh-muc-thoi-gian-lay-mau/danh-muc-thoi-gian-lay-mau.component';
import { PlanThamDinhCompaniesDetailGiamSatDuLuongComponent } from './plan-tham-dinh-companies-detail-giam-sat-du-luong/plan-tham-dinh-companies-detail-giam-sat-du-luong.component';
import { PlanThamDinhCompaniesGiamSatDuLuongComponent } from './plan-tham-dinh-companies-giam-sat-du-luong/plan-tham-dinh-companies-giam-sat-du-luong.component';

import { PlanThamDinhAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-an-toan-thuc-pham-sau-thu-hoach.component';
import { PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach.component';
import { PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-companies-detail-an-toan-thuc-pham-sau-thu-hoach.component';
import { Report0002Component } from './report0002/report0002.component';
import { Report0003Component } from './report0003/report0003.component';
import { GioiThieuComponent } from './gioi-thieu/gioi-thieu.component';
import { HuongDanSuDungComponent } from './huong-dan-su-dung/huong-dan-su-dung.component';
import { PlanThamDinhCompaniesCamKet17Component } from './plan-tham-dinh-companies-cam-ket17/plan-tham-dinh-companies-cam-ket17.component';
import { Report00040005Component } from './report00040005/report00040005.component';
import { UploadCamKet17Component } from './upload-cam-ket17/upload-cam-ket17.component';
import { DanhMucQuocGiaComponent } from './danh-muc-quoc-gia/danh-muc-quoc-gia.component';
import { TuCongBoSanPhamComponent } from './tu-cong-bo-san-pham/tu-cong-bo-san-pham.component';
import { TuCongBoSanPhamDetailComponent } from './tu-cong-bo-san-pham-detail/tu-cong-bo-san-pham-detail.component';
import { DanhMucHanSuDungComponent } from './danh-muc-han-su-dung/danh-muc-han-su-dung.component';
import { LoginComponent } from './login/login.component';
import { PlanThamDinhNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-nhuyen-the-hai-manh-vo/plan-tham-dinh-nhuyen-the-hai-manh-vo.component';
import { PlanThamDinhDetailNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo/plan-tham-dinh-detail-nhuyen-the-hai-manh-vo.component';

import { RegisterHarvestItemsDetailComponent } from './register-harvest-items-detail/register-harvest-items-detail.component';
import { Report0007Component } from './report0007/report0007.component';
import { Report0008Component } from './report0008/report0008.component';
import { PushNotificationComponent } from './push-notification/push-notification.component';
import { ThanhVienLichSuThongBaoComponent } from './thanh-vien-lich-su-thong-bao/thanh-vien-lich-su-thong-bao.component';
import { ThanhVienLichSuThongBaoViewComponent } from './thanh-vien-lich-su-thong-bao-view/thanh-vien-lich-su-thong-bao-view.component';
import { ProductGroupDetailComponent } from './product-group-detail/product-group-detail.component';
import { PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent } from './plan-tham-dinh-companies-tham-dinh-an-toan-thuc-pham/plan-tham-dinh-companies-tham-dinh-an-toan-thuc-pham.component';
import { DanhMucProductGroupComponent } from './danh-muc-product-group/danh-muc-product-group.component';
import { Report0009Component } from './report0009/report0009.component';
import { UploadThamDinhAnToanThucPhamComponent } from './upload-tham-dinh-an-toan-thuc-pham/upload-tham-dinh-an-toan-thuc-pham.component';
import { Report0010Component } from './report0010/report0010.component';
import { Report0011Component } from './report0011/report0011.component';
import { Report0012Component } from './report0012/report0012.component';
import { Report0013Component } from './report0013/report0013.component';
import { Report0014Component } from './report0014/report0014.component';
import { Report0015Component } from './report0015/report0015.component';
import { UploadGiamSatDuLuongComponent } from './upload-giam-sat-du-luong/upload-giam-sat-du-luong.component';
import { PlanThamDinhDetailGiamSatDuLuong001Component } from './plan-tham-dinh-detail-giam-sat-du-luong001/plan-tham-dinh-detail-giam-sat-du-luong001.component';
import { PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-giam-sat-du-luong/plan-tham-dinh-danh-muc-lay-mau-detail-giam-sat-du-luong.component';
import { PlanThamDinhDetailNhuyenTheHaiManhVo001Component } from './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001/plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component';
import { PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component } from './plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach001/plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach001.component';
import { PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-danh-muc-lay-mau-detail-an-toan-thuc-pham-sau-thu-hoach.component';
import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from './plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham/plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';
import { CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent } from './co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham/co-so-plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham.component';
import { CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from './co-so-plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham/co-so-plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';
import { CoSoProductInfoDetailComponent } from './co-so-product-info-detail/co-so-product-info-detail.component';
import { ProductInfoDetail001Component } from './product-info-detail001/product-info-detail001.component';
import { ProductInfo001Component } from './product-info001/product-info001.component';
import { PlanThamDinhThanhTraChuyenNganhComponent } from './plan-tham-dinh-thanh-tra-chuyen-nganh/plan-tham-dinh-thanh-tra-chuyen-nganh.component';
import { PlanThamDinhDetailThanhTraChuyenNganhComponent } from './plan-tham-dinh-detail-thanh-tra-chuyen-nganh/plan-tham-dinh-detail-thanh-tra-chuyen-nganh.component';
import { PlanThamDinhDetailKiemTraTapChatComponent } from './plan-tham-dinh-detail-kiem-tra-tap-chat/plan-tham-dinh-detail-kiem-tra-tap-chat.component';
import { PlanThamDinhKiemTraTapChatComponent } from './plan-tham-dinh-kiem-tra-tap-chat/plan-tham-dinh-kiem-tra-tap-chat.component';
import { PlanThamDinhKeHoachTongHop001Component } from './plan-tham-dinh-ke-hoach-tong-hop001/plan-tham-dinh-ke-hoach-tong-hop001.component';
import { PlanThamDinhKeHoachTongHop002Component } from './plan-tham-dinh-ke-hoach-tong-hop002/plan-tham-dinh-ke-hoach-tong-hop002.component';
import { ThanhVien001Component } from './thanh-vien001/thanh-vien001.component';
import { ThanhVienThongBaoComponent } from './thanh-vien-thong-bao/thanh-vien-thong-bao.component';
import { CoSoCompanyLakeDetailComponent } from './co-so-company-lake-detail/co-so-company-lake-detail.component';
import { NguonVonDetailComponent } from './nguon-von-detail/nguon-von-detail.component';
import { CompanyInfoCoSoNuoiDetailComponent } from './company-info-co-so-nuoi-detail/company-info-co-so-nuoi-detail.component';
import { CompanyInfoCoSoNuoiComponent } from './company-info-co-so-nuoi/company-info-co-so-nuoi.component';
import { DanhMucHinhThucNuoiComponent } from './danh-muc-hinh-thuc-nuoi/danh-muc-hinh-thuc-nuoi.component';
import { PlanThamDinhDetailCoSoNuoiComponent } from './plan-tham-dinh-detail-co-so-nuoi/plan-tham-dinh-detail-co-so-nuoi.component';
import { CoSoCompanyInfoDonViDongGoiComponent } from './co-so-company-info-don-vi-dong-goi/co-so-company-info-don-vi-dong-goi.component';
import { CoSoCompanyInfoDonViDongGoiDetailComponent } from './co-so-company-info-don-vi-dong-goi-detail/co-so-company-info-don-vi-dong-goi-detail.component';
import { CoSoCompanyInfoDonViDongGoiViewComponent } from './co-so-company-info-don-vi-dong-goi-view/co-so-company-info-don-vi-dong-goi-view.component';
import { CompanyInfoDonViDongGoiComponent } from './company-info-don-vi-dong-goi/company-info-don-vi-dong-goi.component';
import { CompanyInfoDonViDongGoiDetailComponent } from './company-info-don-vi-dong-goi-detail/company-info-don-vi-dong-goi-detail.component';
import { PlanThamDinhMaSoCoSoNuoiComponent } from './plan-tham-dinh-ma-so-co-so-nuoi/plan-tham-dinh-ma-so-co-so-nuoi.component';
import { PlanThamDinhDetailMaSoCoSoNuoiComponent } from './plan-tham-dinh-detail-ma-so-co-so-nuoi/plan-tham-dinh-detail-ma-so-co-so-nuoi.component';
import { UploadMaSoCoSoNuoiComponent } from './upload-ma-so-co-so-nuoi/upload-ma-so-co-so-nuoi.component';
import { Report0016Component } from './report0016/report0016.component';
import { Report0017Component } from './report0017/report0017.component';
import { Dashboard001Component } from './dashboard001/dashboard001.component';
import { PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-nhuyen-the-hai-manh-vo/plan-tham-dinh-danh-muc-lay-mau-detail-nhuyen-the-hai-manh-vo.component';
import { DanhMucChucNangDetailComponent } from './danh-muc-chuc-nang-detail/danh-muc-chuc-nang-detail.component';
import { Dashboard002Component } from './dashboard002/dashboard002.component';

import { PlanThamDinhCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-company-info-don-vi-dong-goi/plan-tham-dinh-company-info-don-vi-dong-goi.component';
import { PlanThamDinhDetailCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-detail-company-info-don-vi-dong-goi/plan-tham-dinh-detail-company-info-don-vi-dong-goi.component';
import { PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-companies-company-info-don-vi-dong-goi/plan-tham-dinh-companies-company-info-don-vi-dong-goi.component';
import { PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent } from './plan-tham-dinh-companies-detail-company-info-don-vi-dong-goi/plan-tham-dinh-companies-detail-company-info-don-vi-dong-goi.component';
import { CompanyInfoDonViDongGoiDocumentsDetailComponent } from './company-info-don-vi-dong-goi-documents-detail/company-info-don-vi-dong-goi-documents-detail.component';
import { CoSoThanhVienDetailComponent } from './co-so-thanh-vien-detail/co-so-thanh-vien-detail.component';
import { CompanyInfoVungTrongComponent } from './company-info-vung-trong/company-info-vung-trong.component';
import { CompanyInfoVungTrongDetailComponent } from './company-info-vung-trong-detail/company-info-vung-trong-detail.component';
import { CompanyInfoVungTrongDocumentsDetailComponent } from './company-info-vung-trong-documents-detail/company-info-vung-trong-documents-detail.component';
import { CoSoCompanyInfoVungTrongComponent } from './co-so-company-info-vung-trong/co-so-company-info-vung-trong.component';
import { CoSoCompanyInfoVungTrongDetailComponent } from './co-so-company-info-vung-trong-detail/co-so-company-info-vung-trong-detail.component';
import { CoSoCompanyInfoVungTrongViewComponent } from './co-so-company-info-vung-trong-view/co-so-company-info-vung-trong-view.component';
import { PlanThamDinhCompanyInfoVungTrongComponent } from './plan-tham-dinh-company-info-vung-trong/plan-tham-dinh-company-info-vung-trong.component';
import { PlanThamDinhDetailCompanyInfoVungTrongComponent } from './plan-tham-dinh-detail-company-info-vung-trong/plan-tham-dinh-detail-company-info-vung-trong.component';
import { PlanThamDinhCompaniesCompanyInfoVungTrongComponent } from './plan-tham-dinh-companies-company-info-vung-trong/plan-tham-dinh-companies-company-info-vung-trong.component';
import { PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent } from './plan-tham-dinh-companies-detail-company-info-vung-trong/plan-tham-dinh-companies-detail-company-info-vung-trong.component';
import { UploadNhuyenThe02ManhVoComponent } from './upload-nhuyen-the02-manh-vo/upload-nhuyen-the02-manh-vo.component';
import { PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau/plan-tham-dinh-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';
import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau/plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';
import { PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent } from './plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau/plan-tham-dinh-danh-muc-lay-mau-detail-chuoi-cung-ung-an-toan-thuc-pham-ke-hoach-lay-mau.component';


@NgModule({
  declarations: [
    AppComponent,
    LoadingComponent,
    HomepageComponent,
    ThanhVienThongTinComponent,
    DanhMucThanhVienComponent,
    PhanAnhComponent,
    AgencyMenuComponent,
    DanhMucUngDungComponent,
    DanhMucChucNangComponent,
    ThanhVienComponent,
    ThanhVienDetailComponent,
    CompanyInfoGroupsComponent,
    CompanyGroupComponent,
    CompanyInfoComponent,
    CompanyInfoDetailComponent,
    SpeciesComponent,
    CompanyScopeComponent,
    CompanyFieldsComponent,
    DanhMucSanPhamPhanLoaiComponent,
    DanhMucChuongTrinhQuanLyChatLuongComponent,
    DanhMucCompanyTinhTrangComponent,
    DanhMucXepLoaiComponent,
    DanhMucDangKyCapGiayComponent,
    DanhMucThiTruongComponent,
    DanhMucCompanyPhanLoaiComponent,
    UploadCompanyInfoComponent,
    CompanyInfoDanhMucCompanyTinhTrangComponent,    
    CompanyInfoLichSuKiemTraComponent,
    CompanyInfoCompanyLakeComponent,
    CompanyInfoCompanyUserComponent,
    CauHoiNhomComponent,
    CauHoiATTPComponent,
    CauHoiATTPDetailComponent,
    CompanyExaminationComponent,
    CompanyExaminationDetailComponent,
    WardDataComponent,
    DistrictDataComponent,
    ProvinceDataComponent,
    AgencyDepartmentComponent,
    AgencyUserComponent,
    
    ATTPInfoComponent,
    ATTPInfoDocumentsComponent,
    ATTPTiepNhanProductGroupsComponent,
    ATTPTiepNhanDocumentsComponent,
    ATTPTiepNhanComponent,
    ATTPInfoTimelinesComponent,
    ATTPInfoProductGroupsComponent,
    ATTPInfoProductGoodsComponent,
    ATTPInfoProductBadsComponent,
    AgencyDepartmentMenusComponent,
    BienBanATTPComponent,
    ProductUnitComponent,
    ProductInfoComponent,
    ProductGroupComponent,
    
    PlanTypeComponent,
    NguonVonComponent,
    CoSoNuoiDocumentComponent,
    KienThucATTPComponent,
    GiaoTrinhATTPComponent,
    ProductInfoDetailComponent,
    RegisterCoSoNuoiComponent,
    RegisterCoSoNuoiDocumentsComponent,
    RegisterCoSoNuoiLakesComponent,
    RegisterHarvestComponent,
    RegisterHarvestItemsComponent,   
    DocumentTemplateComponent,
    CamKet17Component,
    PlanThamDinhComponent,
    
    StateAgencyComponent,
    ATTPInfoDetailComponent,
    DanhMucThanhVienDetailComponent,
    DanhMucChucDanhComponent,    
    CoSoCompanyInfoComponent, 
    CoSoCompanyLakeComponent, 
    CoSoProductInfoComponent, 
    CoSoThanhVienComponent, 
    DanhMucChucDanhDetailComponent, 
    AgencyDepartmentDetailComponent, 
    PhanAnhDetailComponent, 
    CoSoPhanAnhComponent, 
    CoSoMapComponent,     
    CoSoDocumentTemplateComponent, 
    CompanyInfoThanhVienComponent, 
    CoSoCauHoiATTPComponent, 
    CoSoCompanyExaminationComponent, 
    CoSoCompanyExaminationDetailComponent, 
    CoSoCompanyStaffExamDetailComponent, 
    CoSoQuyTrinhCapGiayChungNhanATTPComponent, 
    CoSoATTPInfoComponent, 
    CoSoATTPInfoDetailComponent, 
    KienThucATTPDetailComponent, 
    DanhMucCompanyTrangThaiComponent, 
    CompanyInfoStateAgencyComponent, 
    CompanyLakeDetailComponent, 
    CompanyLakeMapComponent, 
    CompanyInfoFieldsComponent, 
    CoSoCompanyInfoStateAgencyComponent, 
    CoSoCompanyInfoGroupsComponent, 
    CoSoCompanyInfoFieldsComponent, 
    CompanyInfoMapComponent, 
    DanhMucATTPLoaiHoSoComponent, 
    DanhMucATTPTinhTrangComponent, 
    DanhMucATTPXepLoaiComponent, 
    CoSoATTPInfoViewComponent, 
    ATTPInfoDetailByIDComponent, 
    PlanThamDinhDetailComponent, 
    CoSoMapDetailComponent, 
    PlanThamDinhCompaniesComponent,  
    PlanThamDinhCompaniesDetailComponent, 
    DanhMucBienBanATTPComponent, 
    BienBanATTPDetailComponent, 
    DanhMucThamDinhKetQuaDanhGiaComponent, 
    PlanThamDinhCompanyDocumentDetailComponent, 
    DocumentTemplateDetailComponent, 
    DanhMucCompanyInfoComponent, 
    PlanThamDinhCompaniesQuaHanComponent, 
    Report0001Component, 
    PlanThamDinhCompaniesLichSuComponent, 
    DanhMucLayMauComponent, 
    DanhMucLayMauChiTieuComponent, 
    DanhMucLayMauPhanLoaiComponent, 
    PlanThamDinhChuoiCungUngComponent, 
    PlanThamDinhDetailChuoiCungUngComponent, 
    ThanhVienDetail001Component, 
    PlanThamDinhDanhMucLayMauDetailComponent, 
    DanhMucLayMauChiTieuDetailComponent, 
    DanhMucLayMauDetailComponent, 
    PlanThamDinhCompaniesDetailChuoiCungUngComponent, 
    PlanThamDinhCompaniesChuoiCungUngComponent, 
    PlanThamDinhGiamSatDuLuongComponent, 
    PlanThamDinhDetailGiamSatDuLuongComponent, 
    DanhMucThoiGianLayMauComponent, 
    PlanThamDinhCompaniesDetailGiamSatDuLuongComponent, 
    PlanThamDinhCompaniesGiamSatDuLuongComponent,
    DocumentTemplateDetailComponent, 
    DanhMucCompanyInfoComponent, 
    PlanThamDinhCompaniesQuaHanComponent, 
    Report0001Component, 
    PlanThamDinhCompaniesLichSuComponent,

    CoSoRegisterHarvestComponent,
    RegisterHarvestDetailComponent,
    RegisterHarvestDetailByIDComponent,
    PlanThamDinhAnToanThucPhamSauThuHoachComponent,
    PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent,
    PlanThamDinhCompaniesDetailAnToanThucPhamSauThuHoachComponent,
    Report0002Component,
    Report0003Component,
    GioiThieuComponent,
    HuongDanSuDungComponent,
    PlanThamDinhCompaniesCamKet17Component,
    Report00040005Component,
    UploadCamKet17Component,     
    DanhMucQuocGiaComponent,
    TuCongBoSanPhamComponent,
    TuCongBoSanPhamDetailComponent,
    DanhMucHanSuDungComponent,
    LoginComponent,
    PlanThamDinhNhuyenTheHaiManhVoComponent,
    PlanThamDinhDetailNhuyenTheHaiManhVoComponent,
    RegisterHarvestItemsDetailComponent,
    Report0007Component,
    Report0008Component,
    PushNotificationComponent,
    ThanhVienLichSuThongBaoComponent,
    ThanhVienLichSuThongBaoViewComponent,
    ProductGroupDetailComponent,
    PlanThamDinhCompaniesThamDinhAnToanThucPhamComponent,
    DanhMucProductGroupComponent,
    Report0009Component,
    UploadThamDinhAnToanThucPhamComponent,
    Report0010Component,
    Report0011Component,
    Report0012Component,
    Report0013Component,
    Report0014Component,
    Report0015Component,
    UploadGiamSatDuLuongComponent,
    PlanThamDinhDetailGiamSatDuLuong001Component,
    PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent,
    PlanThamDinhDetailNhuyenTheHaiManhVo001Component,
    PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component,
    PlanThamDinhDanhMucLayMauDetailAnToanThucPhamSauThuHoachComponent,
    PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent,
    CoSoPlanThamDinhChuoiCungUngAnToanThucPhamComponent,
    CoSoPlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent,
    CoSoProductInfoDetailComponent,
    ProductInfoDetail001Component,
    ProductInfo001Component,
    PlanThamDinhThanhTraChuyenNganhComponent,
    PlanThamDinhDetailThanhTraChuyenNganhComponent,
    PlanThamDinhDetailKiemTraTapChatComponent,
    PlanThamDinhKiemTraTapChatComponent,
    PlanThamDinhKeHoachTongHop001Component,
    PlanThamDinhKeHoachTongHop002Component,
    ThanhVien001Component,
    ThanhVienThongBaoComponent,
    CoSoCompanyLakeDetailComponent,
    NguonVonDetailComponent,
    CompanyInfoCoSoNuoiDetailComponent,
    CompanyInfoCoSoNuoiComponent,
    DanhMucHinhThucNuoiComponent,
    PlanThamDinhDetailCoSoNuoiComponent,
    CoSoCompanyInfoDonViDongGoiComponent,
    CoSoCompanyInfoDonViDongGoiDetailComponent,
    CoSoCompanyInfoDonViDongGoiViewComponent,
    CompanyInfoDonViDongGoiComponent,
    CompanyInfoDonViDongGoiDetailComponent,
    PlanThamDinhMaSoCoSoNuoiComponent,
    PlanThamDinhDetailMaSoCoSoNuoiComponent,
    UploadMaSoCoSoNuoiComponent,
    Report0016Component,
    Report0017Component,
    Dashboard001Component,    
    PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent, DanhMucChucNangDetailComponent, Dashboard002Component,
    PlanThamDinhCompanyInfoDonViDongGoiComponent,
    PlanThamDinhDetailCompanyInfoDonViDongGoiComponent,
    PlanThamDinhCompaniesCompanyInfoDonViDongGoiComponent,
    PlanThamDinhCompaniesDetailCompanyInfoDonViDongGoiComponent,
    CompanyInfoDonViDongGoiDocumentsDetailComponent,
    CoSoThanhVienDetailComponent,
    CompanyInfoVungTrongComponent,
    CompanyInfoVungTrongDetailComponent,
    CompanyInfoVungTrongDocumentsDetailComponent,
    CoSoCompanyInfoVungTrongComponent,
    CoSoCompanyInfoVungTrongDetailComponent,
    CoSoCompanyInfoVungTrongViewComponent,
    PlanThamDinhCompanyInfoVungTrongComponent,
    PlanThamDinhDetailCompanyInfoVungTrongComponent,
    PlanThamDinhCompaniesCompanyInfoVungTrongComponent,
    PlanThamDinhCompaniesDetailCompanyInfoVungTrongComponent,
    UploadNhuyenThe02ManhVoComponent,
    PlanThamDinhChuoiCungUngAnToanThucPhamKeHoachLayMauComponent,
    PlanThamDinhDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent,
    PlanThamDinhDanhMucLayMauDetailChuoiCungUngAnToanThucPhamKeHoachLayMauComponent,
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    FormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    GoogleMapsModule,
    ChartsModule,
    CKEditorModule,
  ],
  providers: [
    CookieService,
    NotificationService,
    { provide: MAT_DATE_LOCALE, useValue: 'en-GB' }
  ],
  bootstrap: [AppComponent]   
})
export class AppModule { }
