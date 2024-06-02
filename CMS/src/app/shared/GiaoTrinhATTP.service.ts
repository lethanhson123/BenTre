import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { GiaoTrinhATTP } from 'src/app/shared/GiaoTrinhATTP.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class GiaoTrinhATTPService extends BaseService {

  List: GiaoTrinhATTP[] | undefined;
  ListFilter: GiaoTrinhATTP[] | undefined;
  FormData!: GiaoTrinhATTP;

  DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Name', 'SortOrder', 'Active', 'FileName', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'ParentID', 'Name', 'NgayGhiNhan', 'SortOrder', 'Active', 'FileName', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "GiaoTrinhATTP";
  }
  GetByParentIDAndEmptyToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentIDAndEmptyToListAsync';
    if (this.BaseParameter.ParentID == 0) {
      return this.GetAllAndEmptyToListAsync();
    }
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

