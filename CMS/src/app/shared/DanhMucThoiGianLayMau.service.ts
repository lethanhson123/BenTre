import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucThoiGianLayMau } from 'src/app/shared/DanhMucThoiGianLayMau.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucThoiGianLayMauService extends BaseService {
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucThoiGianLayMau";
    }
}

