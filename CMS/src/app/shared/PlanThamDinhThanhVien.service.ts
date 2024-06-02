import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhThanhVienService extends BaseService {

    List: PlanThamDinhThanhVien[] | undefined;
    ListFilter: PlanThamDinhThanhVien[] | undefined;
    FormData!: PlanThamDinhThanhVien;

    DisplayColumns001: string[] = ['ThanhVienID', 'DanhMucChucDanhID', 'Save'];
    DisplayColumns002: string[] = ['ThanhVienID', 'DistrictDataID', 'SoLuongLayMau', 'Description', 'NuocRong', 'NuocLon', 'Save'];
    DisplayColumns003: string[] = ['ThanhVienID', 'DistrictDataID', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhThanhVien";
    }

    GetByListParentIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByListParentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

