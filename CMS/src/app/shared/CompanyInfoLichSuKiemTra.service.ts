import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoLichSuKiemTra } from 'src/app/shared/CompanyInfoLichSuKiemTra.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoLichSuKiemTraService extends BaseService{

    List: CompanyInfoLichSuKiemTra[] | undefined;
    ListFilter: CompanyInfoLichSuKiemTra[] | undefined;
    FormData!: CompanyInfoLichSuKiemTra;    

    DisplayColumns001: string[] = ['STT', 'ID', 'DanhMucDangKyCapGiayID', 'DanhMucXepLoaiID', 'SoLan', 'NgayGhiNhan', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoLichSuKiemTra";
    }

    GetByParentID_NamToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentID_NamToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

}

