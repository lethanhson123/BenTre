import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyExaminationQuestions } from 'src/app/shared/CompanyExaminationQuestions.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyExaminationQuestionsService extends BaseService{

    List: CompanyExaminationQuestions[] | undefined;
    ListFilter: CompanyExaminationQuestions[] | undefined;
    FormData!: CompanyExaminationQuestions;

    DisplayColumns001: string[] = ['STT', 'CauHoiATTPID', 'Save'];
    DisplayColumns002: string[] = ['STT', 'Name'];
    DisplayColumns003: string[] = ['Name'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyExaminationQuestions";
    }
}

