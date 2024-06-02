import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { TapTinDinhKem } from 'src/app/shared/TapTinDinhKem.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class TapTinDinhKemService extends BaseService{
    ListChild: TapTinDinhKem[] | undefined;
    ListParent: TapTinDinhKem[] | undefined;

    DisplayColumns001: string[] = ['STT', 'ParentID', 'Name', 'Code', 'Display', 'SortOrder', 'Active', 'FileName', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "TapTinDinhKem";
    }
}

