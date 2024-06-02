import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Base } from 'src/app/shared/Base.model';
@Injectable({
    providedIn: 'root'
})
export class BaseService {
    displayColumns: string[] = ['Name', 'Note', 'SortOrder', 'Active', 'Save'];
    list: Base[] | undefined;
    listSearch: Base[] | undefined;
    listSearch001: Base[] | undefined;
    formData!: Base;
    aPIURL: string = environment.APIURL;
    controller: string = "Base";
    constructor(public httpClient: HttpClient) {
        this.initializationFormData();
    }
    initializationFormData() {
        this.formData = {
        }
        this.list = [];
        this.listSearch = [];
        this.listSearch001 = [];
    }
    SaveList(list: Base[]) {
        let url = this.aPIURL + this.controller + '/SaveList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(list));
        return this.httpClient.post(url, formUpload);
    }
    SaveListAsync(list: Base[]) {
        let url = this.aPIURL + this.controller + '/SaveListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(list));
        return this.httpClient.post(url, formUpload);
    }
    Save(formData: Base) {
        let url = this.aPIURL + this.controller + '/Save';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    SaveAsync(formData: Base) {
        let url = this.aPIURL + this.controller + '/SaveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        return this.httpClient.post(url, formUpload);
    }
    Remove(ID: number) {
        let url = this.aPIURL + this.controller + '/Remove';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(ID));
        return this.httpClient.post(url, formUpload);
    }
    RemoveAsync(ID: number) {
        let url = this.aPIURL + this.controller + '/RemoveAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(ID));
        return this.httpClient.post(url, formUpload);
    }
    GetByID(ID: number) {
        let url = this.aPIURL + this.controller + '/GetByID';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(ID));
        return this.httpClient.post(url, formUpload);
    }
    GetByIDAsync(ID: number) {
        let url = this.aPIURL + this.controller + '/GetByIDAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(ID));
        return this.httpClient.post(url, formUpload);
    }
    GetAllToList() {
        let url = this.aPIURL + this.controller + '/GetAllToList';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload);
    }
    GetAllToListAsync() {
        let url = this.aPIURL + this.controller + '/GetAllToListAsync';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload);
    }
    GetAllAndEmptyToList() {
        let url = this.aPIURL + this.controller + '/GetAllAndEmptyToList';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload);
    }
    GetAllAndEmptyToListAsync() {
        let url = this.aPIURL + this.controller + '/GetAllAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        return this.httpClient.post(url, formUpload);
    }
    GetByActiveToList(active: boolean) {
        let url = this.aPIURL + this.controller + '/GetByActiveToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(active));
        return this.httpClient.post(url, formUpload);
    }
    GetByActiveToListAsync(active: boolean) {
        let url = this.aPIURL + this.controller + '/GetByActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(active));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDToList(parentID: number) {
        let url = this.aPIURL + this.controller + '/GetByParentIDToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(parentID));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDToListAsync(parentID: number) {
        let url = this.aPIURL + this.controller + '/GetByParentIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(parentID));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDAndEmptyToList(parentID: number) {
        let url = this.aPIURL + this.controller + '/GetByParentIDAndEmptyToList';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(parentID));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDAndEmptyToListAsync(parentID: number) {
        let url = this.aPIURL + this.controller + '/GetByParentIDAndEmptyToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(parentID));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDAndActiveToList(parentID: number, active: boolean) {
        let url = this.aPIURL + this.controller + '/GetByParentIDAndActiveToList';
        const formUpload: FormData = new FormData();
        formUpload.append('parentID', JSON.stringify(parentID));
        formUpload.append('active', JSON.stringify(active));
        return this.httpClient.post(url, formUpload);
    }
    GetByParentIDAndActiveToListAsync(parentID: number, active: boolean) {
        let url = this.aPIURL + this.controller + '/GetByParentIDAndActiveToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('parentID', JSON.stringify(parentID));
        formUpload.append('active', JSON.stringify(active));
        return this.httpClient.post(url, formUpload);
    }
    GetByPageAndPageSizeToList(page: number, pageSize: number) {
        let url = this.aPIURL + this.controller + '/GetByPageAndPageSizeToList';
        const formUpload: FormData = new FormData();
        formUpload.append('page', JSON.stringify(page));
        formUpload.append('pageSize', JSON.stringify(pageSize));
        return this.httpClient.post(url, formUpload);
    }
    GetByPageAndPageSizeToListAsync(page: number, pageSize: number) {
        let url = this.aPIURL + this.controller + '/GetByPageAndPageSizeToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('page', JSON.stringify(page));
        formUpload.append('pageSize', JSON.stringify(pageSize));
        return this.httpClient.post(url, formUpload);
    }
}

