import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyUser } from 'src/app/shared/CompanyUser.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyUserService extends BaseService{

    List: CompanyUser[] | undefined;
    ListFilter: CompanyUser[] | undefined;
    FormData!: CompanyUser;    

    DisplayColumns001: string[] = ['STT', 'ID', 'fullname', 'email', 'phone', 'Note', 'SortOrder', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyUser";
    }
}

