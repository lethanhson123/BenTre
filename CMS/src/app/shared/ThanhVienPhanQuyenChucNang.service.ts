import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienPhanQuyenChucNang } from 'src/app/shared/ThanhVienPhanQuyenChucNang.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienPhanQuyenChucNangService extends BaseService{

    List: ThanhVienPhanQuyenChucNang[] | undefined;
    ListFilter: ThanhVienPhanQuyenChucNang[] | undefined;
    FormData!: ThanhVienPhanQuyenChucNang;     

    DisplayColumns001: string[] = ['STT', 'Name', 'Active'];   
    DisplayColumns002: string[] = ['DanhMucThanhVienID', 'Save'];   
    DisplayColumns003: string[] = ['StateAgencyID', 'Save'];   

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVienPhanQuyenChucNang";
    }

    GetSQLByParentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByParentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByDanhMucThanhVienIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByDanhMucThanhVienIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByAgencyDepartmentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByAgencyDepartmentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetSQLByDanhMucChucDanhIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByDanhMucChucDanhIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByDanhMucChucNangID_001AndEmptyToListAsync() {      
        let url = this.APIURL + this.Controller + '/GetByDanhMucChucNangID_001AndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByDanhMucChucNangID_002AndEmptyToListAsync() {      
        let url = this.APIURL + this.Controller + '/GetByDanhMucChucNangID_002AndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

