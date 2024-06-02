import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucBienBanATTP } from 'src/app/shared/DanhMucBienBanATTP.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucBienBanATTPService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucBienBanATTP";
    }
}

