import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoDonViDongGoiNongHo } from 'src/app/shared/CompanyInfoDonViDongGoiNongHo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoDonViDongGoiNongHoService extends BaseService{

    List: CompanyInfoDonViDongGoiNongHo[] | undefined;
    ListFilter: CompanyInfoDonViDongGoiNongHo[] | undefined;
    FormData!: CompanyInfoDonViDongGoiNongHo;

    DisplayColumns001: string[] = ['ThanhVienID','CCCD','DienThoai','Email', 'Note', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoDonViDongGoiNongHo";
    }
}

