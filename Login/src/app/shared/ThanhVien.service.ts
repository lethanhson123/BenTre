import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ThanhVienService extends BaseService{
    displayColumns: string[] = ['DanhMucThanhVienID', 'TaiKhoan', 'HoTen', 'DienThoai', 'Active', 'Save']; 
    list: ThanhVien[] | undefined;                  
    formData!: ThanhVien;
    formDataLogin!: ThanhVien;
    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.controller = "ThanhVien";
    }
    QuenMatKhauAsync(email: string) {
        let url = this.aPIURL + this.controller + '/QuenMatKhauAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('email', JSON.stringify(email));        
        return this.httpClient.post(url, formUpload);
    }
    CheckEmailExistAsync(email: string) {
        let url = this.aPIURL + this.controller + '/CheckEmailExistAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('email', JSON.stringify(email));        
        return this.httpClient.post(url, formUpload);
    }
    AuthenticationAsync(formData: ThanhVien) {
        let url = this.aPIURL + this.controller + '/AuthenticationAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));        
        return this.httpClient.post(url, formUpload);
    }   
    SaveAndUploadFileAsync(formData: ThanhVien, fileToUpload: FileList) {
        let url = this.aPIURL + this.controller + '/SaveAndUploadFileAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('data', JSON.stringify(formData));
        if (fileToUpload) {
            if (fileToUpload.length > 0) {
                for (var i = 0; i < fileToUpload.length; i++) {
                    formUpload.append('file[]', fileToUpload[i]);
                }
            }
        }
        return this.httpClient.post(url, formUpload);
    }
    GetByIDStringAsync(ID: string) {
        let url = this.aPIURL + this.controller + '/GetByIDStringAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('ID', JSON.stringify(ID));
        return this.httpClient.post(url, formUpload);
    }
    GetBySearchStringOrDanhMucThanhVienIDToListAsync(searchString: string, danhMucThanhVienID: number) {
        let url = this.aPIURL + this.controller + '/GetBySearchStringOrDanhMucThanhVienIDToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('searchString', JSON.stringify(searchString));
        formUpload.append('danhMucThanhVienID', JSON.stringify(danhMucThanhVienID));
        return this.httpClient.post(url, formUpload);
    }
    GetByAllOrSearchStringToListAsync(searchString: string) {
        let url = this.aPIURL + this.controller + '/GetByAllOrSearchStringToListAsync';
        const formUpload: FormData = new FormData();
        formUpload.append('searchString', JSON.stringify(searchString));        
        return this.httpClient.post(url, formUpload);
    }
}

