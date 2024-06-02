import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienLichSuThongBao } from 'src/app/shared/ThanhVienLichSuThongBao.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienLichSuThongBaoService extends BaseService{

    DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'Description', 'Active', 'DaGuiThongBao'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVienLichSuThongBao";
    }

    GetByFileNameToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByFileNameToListAsync';   
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

