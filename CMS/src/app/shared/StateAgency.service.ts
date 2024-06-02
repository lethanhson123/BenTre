import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { StateAgency } from 'src/app/shared/StateAgency.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class StateAgencyService extends BaseService {

    List: StateAgency[] | undefined;
    ListFilter: StateAgency[] | undefined;
    FormData!: StateAgency;

    DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'ParentID', 'SortOrder', 'Active', 'Save'];
    DisplayColumns002: string[] = ['STT', 'ID', 'Name', 'Note', 'ParentID', 'SortOrder', 'Active', 'Save'];
    DisplayColumns003: string[] = ['STT', 'ID', 'Name', 'Display', 'Note', 'ParentID', 'SortOrder', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "StateAgency";
    }
}

