import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyLakeService extends BaseService{

    List: CompanyLake[] | undefined;
    ListFilter: CompanyLake[] | undefined;
    FormData!: CompanyLake;    

    DisplayColumns001: string[] = ['STT', 'ID', 'SpeciesID', 'Code', 'Name', 'acreage', 'longitude', 'latitude', 'SortOrder', 'Active', 'Save'];
    DisplayColumns002: string[] = ['STT', 'ID', 'species_name', 'Code', 'Name', 'acreage', 'Save'];
    DisplayColumns003: string[] = ['STT', 'ID', 'species_name', 'Code', 'Name', 'acreage', 'longitude', 'latitude', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyLake";
    }
}

