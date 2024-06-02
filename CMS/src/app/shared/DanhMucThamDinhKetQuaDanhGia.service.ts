import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucThamDinhKetQuaDanhGia } from 'src/app/shared/DanhMucThamDinhKetQuaDanhGia.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucThamDinhKetQuaDanhGiaService extends BaseService{
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucThamDinhKetQuaDanhGia";
    }
}

