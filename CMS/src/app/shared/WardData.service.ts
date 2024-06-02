import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { WardData } from 'src/app/shared/WardData.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class WardDataService extends BaseService {

  List: WardData[] | undefined;
  ListFilter: WardData[] | undefined;
  FormData!: WardData;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "WardData";
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

