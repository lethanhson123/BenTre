import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyFields } from 'src/app/shared/CompanyFields.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyFieldsService extends BaseService{
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyFields";
    }
}

