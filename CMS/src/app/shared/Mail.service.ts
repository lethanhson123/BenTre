import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseParameter } from './BaseParameter.model';

@Injectable({
    providedIn: 'root'
})

export class MailService {

    BaseParameter!: BaseParameter;
    APIURL: string = environment.APIUploadURL;
    Controller: string = "Mail";
    Headers: HttpHeaders = new HttpHeaders();

    constructor(private httpClient: HttpClient) {
        this.InitializationFormData();

    }
    InitializationFormData() {
        this.BaseParameter = {
        };

        let token = localStorage.getItem(environment.Token);
        this.Headers = this.Headers.append('Authorization', 'Bearer ' + token);
    }

    AnToanThucPhamThamDinhThongBaoByPlanThamDinhIDAsync() {
        let url = this.APIURL + this.Controller + '/AnToanThucPhamThamDinhThongBaoByPlanThamDinhIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    AnToanThucPhamThamDinhThongBaoByPlanThamDinhCompaniesIDAsync() {
        let url = this.APIURL + this.Controller + '/AnToanThucPhamThamDinhThongBaoByPlanThamDinhCompaniesIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync() {
        let url = this.APIURL + this.Controller + '/AnToanThucPhamThamDinhKetQuaByPlanThamDinhCompaniesIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}


