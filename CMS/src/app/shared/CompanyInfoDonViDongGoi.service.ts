import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoDonViDongGoi } from 'src/app/shared/CompanyInfoDonViDongGoi.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoDonViDongGoiService extends BaseService{

    List: CompanyInfoDonViDongGoi[] | undefined;
    ListFilter: CompanyInfoDonViDongGoi[] | undefined;
    FormData!: CompanyInfoDonViDongGoi;

    DisplayColumns001: string[] = ['STT', 'ID', 'NgayGhiNhan', 'MaHoSo', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'DanhMucATTPXepLoaiName', 'Save'];

    DisplayColumns004: string[] = ['STT', 'ID', 'NgayGhiNhan', 'CompanyInfoName', 'MaHoSo', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoDonViDongGoi";
    }

    GetBySearchString_DanhMucATTPTinhTrangIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetBySearchString_DanhMucATTPTinhTrangIDToListAsync';    
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload);
      }
    
      GetByDanhMucATTPTinhTrangID_ActiveToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByDanhMucATTPTinhTrangID_ActiveToListAsync';    
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload);
      }
}

