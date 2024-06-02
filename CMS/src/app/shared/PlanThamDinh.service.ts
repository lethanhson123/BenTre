import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class PlanThamDinhService extends BaseService {

  List: PlanThamDinh[] | undefined;
  ListFilter: PlanThamDinh[] | undefined;
  FormData!: PlanThamDinh;

  DisplayColumns001: string[] = ['STT', 'ID', 'NgayBatDau', 'NgayKetThuc', 'Name', 'Description', 'HTMLContent', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'Nam', 'SoDot', 'NgayBatDau', 'NgayKetThuc', 'Name', 'Description', 'HTMLContent', 'Save'];
  DisplayColumns003: string[] = ['STT', 'Nam', 'Name', 'Display', 'Description', 'HTMLContent', 'Save'];
  DisplayColumns004: string[] = ['STT', 'ID', 'Nam', 'SoDot', 'NgayBatDau', 'NgayKetThuc', 'Name', 'Display', 'Description', 'HTMLContent', 'Save'];
  DisplayColumns005: string[] = ['STT', 'ID', 'NgayBatDau', 'NgayKetThuc', 'Name', 'Description', 'Save'];
  DisplayColumns006: string[] = ['Save', 'STT', 'Name', 'Description', 'HTMLContent'];
  DisplayColumns007: string[] = ['STT', 'Nam', 'Name', 'Save'];
  DisplayColumns008: string[] = ['Save', 'STT', 'Nam', 'Name'];
  DisplayColumns009: string[] = ['Save', 'STT', 'NgayBatDau', 'NgayKetThuc', 'Name', 'CompanyInfoName'];
  DisplayColumns010: string[] = ['Save', 'STT', 'NgayBatDau', 'NgayKetThuc', 'CompanyInfoName'];
  DisplayColumns011: string[] = ['Save', 'STT', 'Name', 'Code', 'Description', 'HTMLContent'];
  DisplayColumns012: string[] = ['Save', 'STT', 'Name', 'Description'];
  DisplayColumns013: string[] = ['Save', 'STT', 'NgayBatDau', 'NgayKetThuc', 'CompanyInfoName', 'DanhMucATTPXepLoaiName'];


  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "PlanThamDinh";
  }

  CopyAsync() {
    var lastUpdatedMembershipID = localStorage.getItem(environment.ThanhVienID);
    if (lastUpdatedMembershipID) {
      this.FormData.LastUpdatedMembershipID = Number(lastUpdatedMembershipID);
    }
    let url = this.APIURL + this.Controller + '/CopyAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.FormData));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetBySearchString_NgayBatDau_NgayKetThucToListAsync() {
    let url = this.APIURL + this.Controller + '/GetBySearchString_NgayBatDau_NgayKetThucToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetBySearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_SearchString_NgayBatDau_NgayKetThuc_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_Nam_SoDot_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_Nam_SoDot_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_Nam_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_Nam_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync() {
    let url = this.APIURL + this.Controller + '/GetSQLKeHoachTongHopByThanhVienID_Nam_ThangToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

