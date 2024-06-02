import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfoDonViDongGoiThiTruong } from 'src/app/shared/CompanyInfoDonViDongGoiThiTruong.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class CompanyInfoDonViDongGoiThiTruongService extends BaseService{

    List: CompanyInfoDonViDongGoiThiTruong[] | undefined;
    ListFilter: CompanyInfoDonViDongGoiThiTruong[] | undefined;
    FormData!: CompanyInfoDonViDongGoiThiTruong;

    DisplayColumns001: string[] = ['STT', 'Name', 'Note', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "CompanyInfoDonViDongGoiThiTruong";
    }
}

