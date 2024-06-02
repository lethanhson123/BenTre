import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoVungTrongToaDo } from 'src/app/shared/CompanyInfoVungTrongToaDo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoVungTrongToaDoService extends BaseService{

    List: CompanyInfoVungTrongToaDo[] | undefined;
    ListFilter: CompanyInfoVungTrongToaDo[] | undefined;
    FormData!: CompanyInfoVungTrongToaDo;

    DisplayColumns001: string[] = ['Name','KinhDo','ViDo','IsTrungTam', 'Save'];


    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoVungTrongToaDo";
    }
}

