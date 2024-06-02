import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CauHoiNhomService extends BaseService{
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CauHoiNhom";
    }
}

