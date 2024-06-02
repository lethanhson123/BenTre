import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienToken } from 'src/app/shared/ThanhVienToken.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienTokenService extends BaseService{
    displayColumns: string[] = ['Token', 'NgayBatDau', 'NgayKetThuc'];
    list: ThanhVienToken[] | undefined;                  
    formData!: ThanhVienToken;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.controller = "ThanhVienToken";
    }
    AuthenticationByTokenAsync(token: string) {
        let url = this.aPIURL + this.controller + '/AuthenticationByTokenAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('token', JSON.stringify(token));       
        return this.httpClient.post(url, formUpload);
    }
}

