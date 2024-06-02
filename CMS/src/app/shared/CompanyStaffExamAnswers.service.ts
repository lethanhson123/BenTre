import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyStaffExamAnswers } from 'src/app/shared/CompanyStaffExamAnswers.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyStaffExamAnswersService extends BaseService{

    List: CompanyStaffExamAnswers[] | undefined;
    ListFilter: CompanyStaffExamAnswers[] | undefined;
    FormData!: CompanyStaffExamAnswers;

    DisplayColumns001: string[] = ['STT', 'Name', 'Note', 'Code'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyStaffExamAnswers";
    }

    GetSQLByCompanyExaminationID_ThanhVienIDToListAsync() {        
        let url = this.APIURL + this.Controller + '/GetSQLByCompanyExaminationID_ThanhVienIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

