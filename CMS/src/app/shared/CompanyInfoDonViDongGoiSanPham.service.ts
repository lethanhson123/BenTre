import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoDonViDongGoiSanPham } from 'src/app/shared/CompanyInfoDonViDongGoiSanPham.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoDonViDongGoiSanPhamService extends BaseService{

    List: CompanyInfoDonViDongGoiSanPham[] | undefined;
    ListFilter: CompanyInfoDonViDongGoiSanPham[] | undefined;
    FormData!: CompanyInfoDonViDongGoiSanPham;

    DisplayColumns001: string[] = ['STT', 'Name', 'Note', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoDonViDongGoiSanPham";
    }
}

