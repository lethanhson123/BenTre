import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhDanhMucLayMauChiTieu } from 'src/app/shared/PlanThamDinhDanhMucLayMauChiTieu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhDanhMucLayMauChiTieuService extends BaseService{

    List: PlanThamDinhDanhMucLayMauChiTieu[] | undefined;
    ListFilter: PlanThamDinhDanhMucLayMauChiTieu[] | undefined;
    FormData!: PlanThamDinhDanhMucLayMauChiTieu;

    DisplayColumns001: string[] = ['STT','DanhMucLayMauChiTieuID','ProductUnitID', 'SoLuongLayMau', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhDanhMucLayMauChiTieu";
    }
}

