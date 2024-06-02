import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoVungTrongDocuments } from 'src/app/shared/CompanyInfoVungTrongDocuments.model';
import { BaseService } from './Base.service';
import { MatTableDataSource } from '@angular/material/table';

@Injectable({
    providedIn: 'root'
})
export class CompanyInfoVungTrongDocumentsService extends BaseService{
    List: CompanyInfoVungTrongDocuments[] | undefined;
    ListFilter: CompanyInfoVungTrongDocuments[] | undefined;
    FormData!: CompanyInfoVungTrongDocuments;

    DisplayColumns001: string[] = ['Name', 'FileName', 'Save'];
    DisplayColumns002: string[] = ['Name', 'Note','FileName', 'Save'];

    DataSource002: MatTableDataSource<any>;

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoVungTrongDocuments";
    }
}

