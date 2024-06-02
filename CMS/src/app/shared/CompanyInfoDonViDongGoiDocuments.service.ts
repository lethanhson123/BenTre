import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoDonViDongGoiDocuments } from 'src/app/shared/CompanyInfoDonViDongGoiDocuments.model';
import { BaseService } from './Base.service';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
    providedIn: 'root'
})
export class CompanyInfoDonViDongGoiDocumentsService extends BaseService {

    List: CompanyInfoDonViDongGoiDocuments[] | undefined;
    ListFilter: CompanyInfoDonViDongGoiDocuments[] | undefined;
    FormData!: CompanyInfoDonViDongGoiDocuments;

    DisplayColumns001: string[] = ['Name', 'FileName', 'Save'];
    DisplayColumns002: string[] = ['Name', 'Note','FileName', 'Save'];

    DataSource002: MatTableDataSource<any>;

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoDonViDongGoiDocuments";
    }
}

