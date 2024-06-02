import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienThietBi } from 'src/app/shared/ThanhVienThietBi.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienThietBiService extends BaseService{
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVienThietBi";
    }
    PushNotification() {
        let url = this.APIURL + this.Controller + '/PushNotification';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));       
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

