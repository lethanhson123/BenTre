import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseParameter } from './BaseParameter.model';

@Injectable({
    providedIn: 'root'
})
export class UploadService {

    Headers: HttpHeaders = new HttpHeaders();
    APIURL: string = environment.APIUploadURL;
    Controller: string = "Upload";
    FileList: FileList;
    File: File;
    IsShowLoading: boolean = false;
    BaseParameter!: BaseParameter;
    constructor(private httpClient: HttpClient) {
        this.InitializationFormData();
    }
    InitializationFormData() {
        this.BaseParameter = {
            SearchString: "",
            ParentID: environment.InitializationNumber,
        };

        let token = localStorage.getItem(environment.Token);
        this.Headers = this.Headers.append('Authorization', 'Bearer ' + token);
    }
    PostCompanyInfo_CompanyInfoLichSuKiemTraByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostCompanyInfo_CompanyInfoLichSuKiemTraByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostCompanyInfo_CompanyInfoLichSuKiemTraNewByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostCompanyInfo_CompanyInfoLichSuKiemTraNewByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostCompanyInfoByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostCompanyInfoByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostCamKet17ByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostCamKet17ByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostCamKet17001ByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostCamKet17001ByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostMaSoCoSoNuoiByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostMaSoCoSoNuoiByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostGiamSatDuLuongByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostGiamSatDuLuongByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    PostNhuyenThe02ManhVoByExcelFileAsync() {
        let url = this.APIURL + this.Controller + '/PostNhuyenThe02ManhVoByExcelFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('file', this.File, this.File.name);
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

