import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoVungTrong } from 'src/app/shared/CompanyInfoVungTrong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoVungTrongService extends BaseService{

    List: CompanyInfoVungTrong[] | undefined;
    ListFilter: CompanyInfoVungTrong[] | undefined;
    FormData!: CompanyInfoVungTrong;

    DisplayColumns001: string[] = ['STT', 'ID', 'NgayGhiNhan', 'MaHoSo', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'DanhMucATTPXepLoaiName', 'Save'];

    DisplayColumns004: string[] = ['STT', 'ID', 'NgayGhiNhan', 'CompanyInfoName', 'MaHoSo', 'DanhMucATTPLoaiHoSoName', 'DanhMucATTPTinhTrangName', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoVungTrong";
    }
}

