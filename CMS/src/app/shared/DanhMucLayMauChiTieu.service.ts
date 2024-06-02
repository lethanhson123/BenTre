import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucLayMauChiTieuService extends BaseService {

    List: DanhMucLayMauChiTieu[] | undefined;
    ListFilter: DanhMucLayMauChiTieu[] | undefined;
    FormData!: DanhMucLayMauChiTieu;

    DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Code', 'Name', 'Note', 'SortOrder', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucLayMauChiTieu";
    }
    GetByParentIDAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentIDAndEmptyToListAsync';
        if (this.BaseParameter.ParentID == 0) {
            return this.GetAllAndEmptyToListAsync();
        }
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

