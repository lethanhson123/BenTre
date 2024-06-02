import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NguonVonChiTiet } from 'src/app/shared/NguonVonChiTiet.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class NguonVonChiTietService extends BaseService {

    List: NguonVonChiTiet[] | undefined;
    ListFilter: NguonVonChiTiet[] | undefined;
    FormData!: NguonVonChiTiet;
    
    DisplayColumns001: string[] = ['NgayBatDau', 'Name', 'DaChi', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "NguonVonChiTiet";
    }
}

