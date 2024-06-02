import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BaseParameter } from './BaseParameter.model';
import { NamThang } from './NamThang.model';

@Injectable({
    providedIn: 'root'
})
export class DownloadService {

    ListNam001: NamThang[] | undefined;
    ListThang001: NamThang[] | undefined;

    BaseParameter!: BaseParameter;
    APIURL: string = environment.APIUploadURL;
    Controller: string = "Download";
    Headers: HttpHeaders = new HttpHeaders();


    IPAddress: string = environment.InitializationString;


    constructor(private httpClient: HttpClient) {
        this.InitializationFormData();
        this.GetIPAddress();
    }
    InitializationFormData() {
        this.BaseParameter = {
        };

        let token = localStorage.getItem(environment.Token);
        this.Headers = this.Headers.append('Authorization', 'Bearer ' + token);
    }
    GetRandomColor(count) {
        var arr = [];
        for (var i = 0; i < count; i++) {
            var letters = '0123456789ABCDEF'.split('');
            var color = '#';
            for (var x = 0; x < 6; x++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
        }
        return color;
    }
    GetIPAddress() {
        // if (this.IPAddress.length == 0) {
        //     this.httpClient.get(environment.IPRegistry).toPromise().then(res => {
        //         this.IPAddress = res["ip"];
        //     });
        // }      

        return this.httpClient.get(environment.IPRegistry).toPromise();
    }
    GetPosition(): Promise<any> {
        return new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resp => {
                resolve({ lng: resp.coords.longitude, lat: resp.coords.latitude });
            },
            err => {
                reject(err);
            });
        });
    }
    ComponentGetListNam() {
        this.ListNam().subscribe(
            res => {
                this.ListNam001 = (res as NamThang[]).sort((a, b) => (a.ID > b.ID ? 1 : -1));
            },
            err => {
            }
        );
    }
    ComponentGetListThang() {
        this.ListThang().subscribe(
            res => {
                this.ListThang001 = (res as NamThang[]).sort((a, b) => (a.ID > b.ID ? 1 : -1));
            },
            err => {
            }
        );
    }
    NamBatDau() {
        let url = this.APIURL + this.Controller + '/NamBatDau';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    NamKeThuc() {
        let url = this.APIURL + this.Controller + '/NamKeThuc';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ListNam() {
        let url = this.APIURL + this.Controller + '/ListNam';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ListThang() {
        let url = this.APIURL + this.Controller + '/ListThang';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }

    ExportGiamSatDuLuong001ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportGiamSatDuLuong001ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportAnToanThucPhamSauThuHoach001ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportAnToanThucPhamSauThuHoach001ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportCamKet17001ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportCamKet17001ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport00040005ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport00040005ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportCamKet17002PhuLucIIToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportCamKet17002PhuLucIIToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0009ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0009ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0010ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0010ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0011ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0011ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0012ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0012ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0013ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0013ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0014ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0014ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0015ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0015ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0016ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0016ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ExportReport0017ToExcelAsync() {
        let url = this.APIURL + this.Controller + '/ExportReport0017ToExcelAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

