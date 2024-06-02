import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CauHoiATTP } from 'src/app/shared/CauHoiATTP.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CauHoiATTPService extends BaseService {

    List: CauHoiATTP[] | undefined;
    ListFilter: CauHoiATTP[] | undefined;
    FormData!: CauHoiATTP;

    DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Name', 'SortOrder', 'Active', 'Save'];
    DisplayColumns002: string[] = ['STT', 'Description', 'Name', 'Note'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CauHoiATTP";
    }

    GetByParentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentIDToListAsync';
        if (this.BaseParameter.ParentID == 0) {
            return this.GetAllToListAsync();
        }
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

