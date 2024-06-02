import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienService extends BaseService {

    List: ThanhVien[] | undefined;
    ListFilter: ThanhVien[] | undefined;
    FormData!: ThanhVien;
    FormDataLogin!: ThanhVien;

    DisplayColumns001: string[] = ['STT', 'ID', 'Name','CCCD', 'TaiKhoan', 'DienThoai', 'Active'];

    DisplayColumns002: string[] = ['STT', 'ID', 'ParentID', 'Name','CCCD', 'Email', 'DienThoai', 'Save'];

    DisplayColumns003: string[] = ['STT', 'ID', 'TaiKhoan', 'Name', 'StateAgencyName', 'AgencyDepartmentName', 'DanhMucChucDanhName', 'Active'];

    DisplayColumns004: string[] = ['STT', 'ID', 'ParentID', 'Name', 'Email', 'DienThoai', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVien";        
        this.FormDataLogin = {
            Name: environment.InitializationString,
        }; 
    }
    
    GetLogin() {
        this.FormDataLogin = {
        }
        this.FormDataLogin.Name = localStorage.getItem(environment.ThanhVienHoTen);
        var lastUpdatedMembershipID = localStorage.getItem(environment.ThanhVienID);
        if (lastUpdatedMembershipID) {
            this.FormDataLogin.ID = Number(lastUpdatedMembershipID);
        }
        var ThanhVienCompanyInfoID = localStorage.getItem(environment.ThanhVienCompanyInfoID);
        if (ThanhVienCompanyInfoID) {
            this.FormDataLogin.CompanyInfoID = Number(ThanhVienCompanyInfoID);
        }
    }
    GetByParentIDOrSearchStringToListAsync() {        
        let url = this.APIURL + this.Controller + '/GetByParentIDOrSearchStringToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByCompanyInfoIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByCompanyInfoIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByCompanyInfoIDAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByCompanyInfoIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByStateAgencyIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByStateAgencyIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByStateAgencyID_SearchStringToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByStateAgencyID_SearchStringToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByAgencyDepartmentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByAgencyDepartmentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByStateAgencyID_ActiveToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByStateAgencyID_ActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByAgencyDepartmentID_ActiveToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByAgencyDepartmentID_ActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByListParentID_ActiveToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByListParentID_ActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    AuthenticationAsync() {
        let url = this.APIURL + this.Controller + '/AuthenticationAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.FormData));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    ComponentGetByStateAgencyID_ActiveToListAsync() {
        this.IsShowLoading = true;
        this.GetByStateAgencyID_ActiveToListAsync().subscribe(
            res => {
                this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
                this.ListFilter = this.List;
                this.IsShowLoading = false;
            },
            err => {
                this.IsShowLoading = false;
            }
        );
    }
    ComponentGet000ToListAsync() {
        this.IsShowLoading = true;
        this.BaseParameter.Page = 1;
        this.BaseParameter.PageSize = 10;
        this.GetByPageAndPageSizeToListAsync().subscribe(
            res => {
                this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
                this.ListFilter = this.List;
                this.IsShowLoading = false;
            },
            err => {
                this.IsShowLoading = false;
            }
        );
    }
    Filter000(searchString: string) {
        if (searchString.length > 0) {
            searchString = searchString.trim();
            searchString = searchString.toLocaleLowerCase();
            this.IsShowLoading = true;
            this.BaseParameter.SearchString = searchString;
            this.GetBySearchStringToListAsync().subscribe(
                res => {
                    this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
                    this.ListFilter = this.List;
                    this.IsShowLoading = false;
                },
                err => {
                    this.IsShowLoading = false;
                }
            );
        }
        else {
            this.ListFilter = this.List;
        }
    }
}

