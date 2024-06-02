import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PhanAnh } from 'src/app/shared/PhanAnh.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class PhanAnhService extends BaseService {


  List: PhanAnh[] | undefined;
  ListFilter: PhanAnh[] | undefined;
  FormData!: PhanAnh;

  DisplayColumns001: string[] = ['STT', 'NgayGhiNhan', 'Name', 'Display', 'fullname', 'phone', 'email'];
  DisplayColumns002: string[] = ['STT', 'NgayGhiNhan', 'Name', 'HTMLContent', 'Description', 'Save'];
  DisplayColumns003: string[] = ['STT', 'NgayGhiNhan', 'Display', 'Name', 'HTMLContent', 'Description'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "PhanAnh";
  }

  GetByParentIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentIDToListAsync';
    if (this.BaseParameter.ParentID == 0) {
      return this.GetAllToListAsync();
    }
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

