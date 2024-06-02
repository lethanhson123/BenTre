import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyExaminationService extends BaseService{

    List: CompanyExamination[] | undefined;
    ListFilter: CompanyExamination[] | undefined;
    FormData!: CompanyExamination;

    DisplayColumns001: string[] = ['STT', 'ID', 'Description', 'Name', 'NgayGhiNhan', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyExamination";
    }
}

