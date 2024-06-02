import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoGroups } from 'src/app/shared/CompanyInfoGroups.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoGroupsService extends BaseService {

    List: CompanyInfoGroups[] | undefined;
    ListFilter: CompanyInfoGroups[] | undefined;
    FormData!: CompanyInfoGroups;    

    DisplayColumns001: string[] = ['STT', 'ID', 'CompanyGroupID', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoGroups";
    }
}

