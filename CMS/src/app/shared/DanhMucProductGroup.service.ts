import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucProductGroupService extends BaseService{

    DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'SortOrder', 'Active', 'Save'];
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucProductGroup";
    }
}

