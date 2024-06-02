import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhCompanyProductGroup } from 'src/app/shared/PlanThamDinhCompanyProductGroup.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhCompanyProductGroupService extends BaseService{

    List: PlanThamDinhCompanyProductGroup[] | undefined;
    ListFilter: PlanThamDinhCompanyProductGroup[] | undefined;
    FormData!: PlanThamDinhCompanyProductGroup;
  
    DisplayColumns001: string[] = ['ProductGroupID', 'Save'];
    DisplayColumns002: string[] = ['ProductGroupID'];
    DisplayColumns003: string[] = ['ProductGroupID', 'Active', 'Save'];
    DisplayColumns004: string[] = ['ProductGroupID', 'DanhMucProductGroupName', 'Save'];
    DisplayColumns005: string[] = ['ProductGroupID', 'DanhMucProductGroupName','DanhMucATTPXepLoaiName', 'Save'];
    DisplayColumns006: string[] = ['ProductGroupID', 'DanhMucProductGroupName', 'Active', 'Save'];
    DisplayColumns007: string[] = ['ProductGroupID', 'ProductGroupName', 'Save'];
    DisplayColumns008: string[] = ['ProductGroupName', 'Save'];
    DisplayColumns009: string[] = ['ProductGroupID', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhCompanyProductGroup";
    }
    GetByPlanThamDinhIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanThamDinhIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPlanThamDinhIDAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanThamDinhIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

