import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVienPhanQuyenKhuVuc } from 'src/app/shared/ThanhVienPhanQuyenKhuVuc.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienPhanQuyenKhuVucService extends BaseService {

    List: ThanhVienPhanQuyenKhuVuc[] | undefined;
    ListFilter: ThanhVienPhanQuyenKhuVuc[] | undefined;
    FormData!: ThanhVienPhanQuyenKhuVuc;

    displayColumns001: string[] = ['STT', 'Display', 'Code', 'Name', 'Active'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ThanhVienPhanQuyenKhuVuc";
    }

    GetSQLByParentIDAndDanhMucTinhThanhIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByParentIDAndDanhMucTinhThanhIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

