import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyStaffExam } from 'src/app/shared/CompanyStaffExam.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyStaffExamService extends BaseService{

    List: CompanyStaffExam[] | undefined;
    ListFilter: CompanyStaffExam[] | undefined;
    FormData!: CompanyStaffExam;

    DisplayColumns001: string[] = ['STT', 'ThanhVienID', 'Note', 'Save'];
    DisplayColumns002: string[] = ['STT', 'ThanhVienID', 'point', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyStaffExam";
    }
}

