import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhCompanyBienBan } from 'src/app/shared/PlanThamDinhCompanyBienBan.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhCompanyBienBanService extends BaseService {

    List: PlanThamDinhCompanyBienBan[] | undefined;
    ListFilter: PlanThamDinhCompanyBienBan[] | undefined;
    FormData!: PlanThamDinhCompanyBienBan;

    DisplayColumns001: string[] = ['STT', 'Name', 'Description', 'DanhMucThamDinhKetQuaDanhGiaID', 'HTMLContent', 'Save'];
    DisplayColumns002: string[] = ['STT', 'Name', 'Description', 'DanhMucThamDinhKetQuaDanhGiaID', 'HTMLContent'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhCompanyBienBan";
    }

    GetSQLByParentID_BienBanATTPParentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByParentID_BienBanATTPParentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByParentID_DanhMucProductGroupIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByParentID_DanhMucProductGroupIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByPlanThamDinhID_DanhMucProductGroupIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    SaveListAsync(list: PlanThamDinhCompanyBienBan[]) {
        let url = this.APIURL + this.Controller + '/SaveListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(list));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

