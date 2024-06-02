import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienThongBao } from 'src/app/shared/ThanhVienThongBao.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienThongBaoService extends BaseService {

    DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'Note', 'SortOrder', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVienThongBao";
    }
    GetByThanhVienID_ReadJSONFileToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByThanhVienID_ReadJSONFileToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

