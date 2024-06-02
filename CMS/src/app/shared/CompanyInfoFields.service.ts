import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoFields } from 'src/app/shared/CompanyInfoFields.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoFieldsService extends BaseService{  

    List: CompanyInfoFields[] | undefined;
    ListFilter: CompanyInfoFields[] | undefined;
    FormData!: CompanyInfoFields;    

    DisplayColumns001: string[] = ['STT', 'ID', 'CompanyFieldID', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoFields";
    }
}

