import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPInfoService extends BaseService {

  List: ATTPInfo[] | undefined;
  ListFilter: ATTPInfo[] | undefined;
  FormData!: ATTPInfo;

  DisplayColumns001: string[] = ['STT', 'ID', 'Code', 'Name', 'ParentID', 'StateAgencyID', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'NgayGhiNhan', 'Note', 'cer_code', 'cer_notes', 'Save'];
  DisplayColumns003: string[] = ['STT', 'ID', 'NgayGhiNhan', 'cer_code', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns004: string[] = ['STT', 'ID', 'NgayGhiNhan', 'Display', 'cer_code', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'Save'];
  DisplayColumns005: string[] = ['STT', 'ID', 'NgayGhiNhan', 'CompanyInfoName', 'cer_code', 'DanhMucATTPLoaiHoSoName', 'Save'];
  DisplayColumns006: string[] = ['STT', 'ID', 'NgayGhiNhan', 'CompanyInfoName', 'cer_code', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPInfo";
  }

  GetBySearchString_DanhMucATTPTinhTrangIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetBySearchString_DanhMucATTPTinhTrangIDToListAsync';    
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }

  GetByDanhMucATTPTinhTrangID_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDanhMucATTPTinhTrangID_ActiveToListAsync';    
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

