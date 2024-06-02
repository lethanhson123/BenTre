import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoVungTrongNongHo } from 'src/app/shared/CompanyInfoVungTrongNongHo.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoVungTrongNongHoService extends BaseService{

    List: CompanyInfoVungTrongNongHo[] | undefined;
    ListFilter: CompanyInfoVungTrongNongHo[] | undefined;
    FormData!: CompanyInfoVungTrongNongHo;

    DisplayColumns001: string[] = ['ThanhVienID','CCCD','DienThoai','Email','NamSinh','DiaChi','KinhDo','ViDo','Giong','NamTrong','ChungNhanVietGap', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoVungTrongNongHo";
    }
}

