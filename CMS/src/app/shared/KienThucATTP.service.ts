import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { KienThucATTP } from 'src/app/shared/KienThucATTP.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class KienThucATTPService extends BaseService {

  List: KienThucATTP[] | undefined;
  ListFilter: KienThucATTP[] | undefined;
  FormData!: KienThucATTP;

  DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Name', 'SortOrder', 'Active', 'FileName', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'FileName', 'ParentID', 'Name', 'Save'];
  DisplayColumns003: string[] = ['STT', 'ID', 'FileName', 'NgayGhiNhan', 'Name', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "KienThucATTP";
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

