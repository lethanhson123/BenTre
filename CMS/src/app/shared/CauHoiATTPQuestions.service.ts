import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CauHoiATTPQuestions } from 'src/app/shared/CauHoiATTPQuestions.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CauHoiATTPQuestionsService extends BaseService{

    List: CauHoiATTPQuestions[] | undefined;
    ListFilter: CauHoiATTPQuestions[] | undefined;
    FormData!: CauHoiATTPQuestions;    

    DisplayColumns001: string[] = ['Name', 'SortOrder', 'is_ans', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CauHoiATTPQuestions";
    }
}

