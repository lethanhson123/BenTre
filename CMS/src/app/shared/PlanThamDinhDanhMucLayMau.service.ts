import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhDanhMucLayMauService extends BaseService {

    List: PlanThamDinhDanhMucLayMau[] | undefined;
    ListFilter: PlanThamDinhDanhMucLayMau[] | undefined;
    ListDistrictData: PlanThamDinhDanhMucLayMau[] | undefined;
    ListDanhMucLayMau: PlanThamDinhDanhMucLayMau[] | undefined;
    ListDanhMucLayMauChiTieu: PlanThamDinhDanhMucLayMau[] | undefined;
    List2000: PlanThamDinhDanhMucLayMau[] | undefined;
    FormData!: PlanThamDinhDanhMucLayMau;
    DataSource001: MatTableDataSource<any>;
    DataSource002: MatTableDataSource<any>;
    DataSource2000: MatTableDataSource<any>;

    DisplayColumns001: string[] = ['STT', 'DanhMucLayMauName', 'SoLuongLayMau', 'HTMLContent'];
    DisplayColumns002: string[] = ['STT', 'DanhMucLayMauName', 'SoLuongLayMau', 'HTMLContent', 'Save'];
    DisplayColumns003: string[] = ['DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'Save'];
    DisplayColumns004: string[] = ['DistrictDataID', 'ThanhVienID', 'Save'];
    DisplayColumns005: string[] = ['Save', 'DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'CompanyInfoID', 'CompanyLakeID', 'TypeName', 'SoLuongLayMau', 'NgayGhiNhan'];
    DisplayColumns006: string[] = ['DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'SoLuongLayMau', 'Save'];
    DisplayColumns007: string[] = ['Save', 'DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'CompanyInfoID', 'TypeName', 'SoLuongLayMau', 'ChatDocHai','GioiHanToiDa','KetQuaPhanTich', 'NgayGhiNhan', 'Active'];
    DisplayColumns008: string[] = ['DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'SoLuongLayMau', 'NgayGhiNhan', 'Save'];
    DisplayColumns009: string[] = ['NgayGhiNhan', 'CompanyLakeName', 'DanhMucLayMauName', 'DanhMucLayMauChiTieuName', 'SoLuongLayMau', 'KetQuaPhanTich', 'Save'];
    DisplayColumns010: string[] = ['NgayGhiNhan', 'DanhMucLayMauName', 'SoLuongLayMau', 'KetQuaPhanTich', 'Description', 'HTMLContent', 'Save'];
    DisplayColumns011: string[] = ['Save', 'DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'TypeName', 'CompanyInfoID', 'CompanyLakeID', 'SoLuongLayMau', 'NgayGhiNhan'];
    DisplayColumns012: string[] = ['Save', 'DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'Name', 'CompanyInfoID', 'TypeName', 'SoLuongLayMau', 'GioiHanToiDa','KetQuaPhanTich', 'Note', 'NgayGhiNhan', 'Active'];
    DisplayColumns013: string[] = ['Save', 'Active', 'IsGoiY', 'DistrictDataID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'Name', 'CompanyInfoID', 'TypeName', 'SoLuongLayMau', 'GioiHanToiDa','KetQuaPhanTich', 'Note', 'NgayGhiNhan'];
    DisplayColumns014: string[] = ['DistrictDataID', 'DanhMucLayMauPhanLoaiID', 'DanhMucLayMauID', 'DanhMucLayMauChiTieuID', 'SoLuongLayMau', 'NgayGhiNhan', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhDanhMucLayMau";
    }
    GetSQLByParentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetSQLByParentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetBySearchStringAndSortOrderAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetBySearchStringAndSortOrderAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByParentID_IsGoiYToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentID_IsGoiYToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

