import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class PlanThamDinhCompaniesService extends BaseService {

  List: PlanThamDinhCompanies[] | undefined;
  ListFilter: PlanThamDinhCompanies[] | undefined;
  ListQuaHan: PlanThamDinhCompanies[] | undefined;
  List001: PlanThamDinhCompanies[] | undefined;
  FormData!: PlanThamDinhCompanies;

  DisplayColumns001: string[] = ['CompanyInfoID', 'DanhMucATTPLoaiHoSoID', 'NgayGhiNhan', 'Save'];
  DisplayColumns002: string[] = ['STT', 'CompanyInfoName', 'Name', 'Code', 'NgayGhiNhan', 'Save'];
  DisplayColumns003: string[] = ['Active', 'CompanyInfoName', 'Name', 'Display', 'DanhMucATTPXepLoaiName', 'Dat_Ac_Count', 'Nhe_Mi_Count', 'Nang_Ma_Count', 'NghiemTrong_Se_Count', 'NgayGhiNhan', 'NgayHetHan', 'Description'];
  DisplayColumns004: string[] = ['STT', 'CompanyInfoName', 'DanhMucATTPXepLoaiName', 'NgayGhiNhan', 'NgayHetHan'];
  DisplayColumns005: string[] = ['CompanyInfoID', 'NgayGhiNhan', 'Save'];
  DisplayColumns006: string[] = ['STT', 'ID','CompanyInfoName', 'MaSo', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'HTMLContent', 'Save'];
  DisplayColumns007: string[] = ['CompanyInfoName', 'CompanyLakeName', 'DanhMucLayMauName', 'DanhMucLayMauChiTieuName', 'SoLuongLayMau', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns008: string[] = ['STT', 'ID', 'CompanyInfoName', 'CompanyLakeName', 'DanhMucLayMauName', 'DanhMucLayMauChiTieuName', 'SoLuongLayMau', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns009: string[] = ['NgayGhiNhan', 'CompanyInfoName', 'DanhMucLayMauName', 'DanhMucLayMauChiTieuName', 'SoLuongLayMau', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns010: string[] = ['STT', 'ID', 'CompanyInfoID', 'CompanyInfoName', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'FileName', 'Save'];
  DisplayColumns011: string[] = ['STT', 'CompanyInfoName', 'HTMLContent', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'Note', 'Save'];
  DisplayColumns012: string[] = ['STT', 'CompanyInfoName', 'NgayGhiNhan', 'Code',  'Save'];
  DisplayColumns013: string[] = ['Active', 'CompanyInfoName', 'NgayGhiNhan', 'NgayHetHan', 'SortOrder', 'DanhMucATTPXepLoaiName',];
  DisplayColumns014: string[] = ['Save', 'STT', 'CompanyInfoName', 'NgayGhiNhan', 'Code'];
  DisplayColumns015: string[] = ['CompanyInfoName', 'Description', 'HTMLContent', 'Active', 'Save'];
  DisplayColumns016: string[] = ['CompanyInfoName', 'Note', 'HTMLContent', 'Description', 'Active', 'Save'];
  DisplayColumns017: string[] = ['CompanyInfoID', 'Note', 'Save'];
  DisplayColumns018: string[] = ['STT', 'CompanyInfoName', 'HTMLContent', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'Note', 'FileName', 'Save'];
  DisplayColumns019: string[] = ['Save', 'CompanyInfoName', 'NgayGhiNhan', 'Code'];
  DisplayColumns020: string[] = ['STT', 'CompanyInfoName', 'HTMLContent', 'NgayGhiNhan', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'FileName', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "PlanThamDinhCompanies";
  }

  GetByListParentIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByListParentIDToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLByDistrictDataID_DanhMucATTPXepLoaiID_SoThangToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLByPlanTypeID_DistrictDataID_Nam_ThangToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLByPlanTypeID_DistrictDataID_Nam_Thang001ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLByPlanTypeID_DistrictDataID_Nam_Thang002ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByCompanyInfoIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByCompanyInfoIDToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanThamDinhParentID_Nam_SoDot_Active_DanhMucATTPXepLoaiIDToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanThamDinhParentID_Nam_Thang_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanThamDinhParentID_DistrictDataID_WardDataID_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanThamDinhParentID_DistrictDataID_WardDataID_Active_EmptyToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLByPlanTypeID_DistrictDataIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLByPlanTypeID_DistrictDataIDToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

