import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucChucNang } from 'src/app/shared/DanhMucChucNang.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class DanhMucChucNangService extends BaseService {

    ListChild: DanhMucChucNang[] | undefined;
    ListParent: DanhMucChucNang[] | undefined;

    DisplayColumns001: string[] = ['STT', 'ParentID', 'Name', 'Code', 'Display', 'SortOrder', 'Active', 'FileName', 'Save'];
    DisplayColumns002: string[] = ['ParentID', 'Name', 'Code', 'Display', 'SortOrder', 'Active', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "DanhMucChucNang";
    }

    GetSQLByThanhVienIDToListAsync() {
        var lastUpdatedMembershipID = localStorage.getItem(environment.ThanhVienID);
        if (lastUpdatedMembershipID) {
            this.BaseParameter.ThanhVienID = Number(lastUpdatedMembershipID);
        }
        let url = this.APIURL + this.Controller + '/GetSQLByThanhVienIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByThanhVienID_ActiveToListAsync() {
        var lastUpdatedMembershipID = localStorage.getItem(environment.ThanhVienID);
        if (lastUpdatedMembershipID) {
            this.BaseParameter.ThanhVienID = Number(lastUpdatedMembershipID);
        }
        this.BaseParameter.Active = true;
        let url = this.APIURL + this.Controller + '/GetSQLByThanhVienID_ActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync() {
        var lastUpdatedMembershipID = localStorage.getItem(environment.ThanhVienID);
        if (lastUpdatedMembershipID) {
            this.BaseParameter.ThanhVienID = Number(lastUpdatedMembershipID);
        }
        this.BaseParameter.Active = true;
        let url = this.APIURL + this.Controller + '/GetSQLByThanhVienID_Active_DanhMucUngDungIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByDanhMucUngDungIDToListAsync() {      
        let url = this.APIURL + this.Controller + '/GetByDanhMucUngDungIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByDanhMucUngDungIDAndEmptyToListAsync() {      
        let url = this.APIURL + this.Controller + '/GetByDanhMucUngDungIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    
}

