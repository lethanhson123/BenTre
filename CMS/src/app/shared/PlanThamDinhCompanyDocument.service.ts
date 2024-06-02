import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { environment } from 'src/environments/environment';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class PlanThamDinhCompanyDocumentService extends BaseService {

    DataSourcePlanThamDinh: MatTableDataSource<any>;

    List: PlanThamDinhCompanyDocument[] | undefined;
    ListFilter: PlanThamDinhCompanyDocument[] | undefined;
    FormData!: PlanThamDinhCompanyDocument;
    
    ListPlanThamDinh: PlanThamDinhCompanyDocument[] | undefined;

    DisplayColumns001: string[] = ['LastUpdatedDate', 'Name', 'FileName', 'Save'];
    DisplayColumns002: string[] = ['Name', 'Display'];
    DisplayColumns003: string[] = ['Name', 'FileName'];
    DisplayColumns004: string[] = ['STT', 'ID', 'Name', 'NgayGhiNhan', 'ThanhVienName', 'Note'];
    DisplayColumns005: string[] = ['STT', 'ID', 'Name', 'NgayGhiNhan', 'ThanhVienName', 'Note', 'Save'];
    DisplayColumns006: string[] = ['STT', 'ID', 'Name', 'NgayGhiNhan', 'ThanhVienName', 'Save'];
    DisplayColumns007: string[] = ['LastUpdatedDate', 'Name', 'TypeName', 'FileName', 'Save'];
    
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "PlanThamDinhCompanyDocument";
    }

    
    GetByParentID_ThanhVienID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentID_ThanhVienID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByParentID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPlanThamDinhIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanThamDinhIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPlanThamDinhIDAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanThamDinhIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByParentID_PlanTypeID_DanhMucProductGroupIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPlanThamDinhID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanThamDinhID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByRegisterHarvestIDToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByRegisterHarvestIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByRegisterHarvestIDAndEmptyToListAsync() {
        let url = this.APIURL + this.Controller + '/GetByRegisterHarvestIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByRegisterHarvestID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByRegisterHarvestID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByRegisterHarvestItemsID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByRegisterHarvestItemsID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
    GetByPlanTypeID_DocumentTemplateIDAsync() {
        let url = this.APIURL + this.Controller + '/GetByPlanTypeID_DocumentTemplateIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(this.BaseParameter));
        return this.httpClient.post(url, formUpload, { headers: this.Headers });
    }
}

