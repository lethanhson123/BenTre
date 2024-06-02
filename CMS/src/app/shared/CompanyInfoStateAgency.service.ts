import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoStateAgency } from 'src/app/shared/CompanyInfoStateAgency.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoStateAgencyService extends BaseService{

    List: CompanyInfoStateAgency[] | undefined;
    ListFilter: CompanyInfoStateAgency[] | undefined;
    FormData!: CompanyInfoStateAgency;    

    DisplayColumns001: string[] = ['STT', 'ID', 'StateAgencyID', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoStateAgency";
    }
}

