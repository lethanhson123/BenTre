import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhDistrictDataService extends BaseService{

    List: PlanThamDinhDistrictData[] | undefined;
    ListFilter: PlanThamDinhDistrictData[] | undefined;
    FormData!: PlanThamDinhDistrictData;

    DisplayColumns001: string[] = ['DistrictDataID', 'Save'];
    DisplayColumns002: string[] = ['DistrictDataID', 'NgayGhiNhan', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhDistrictData";
    }
}

