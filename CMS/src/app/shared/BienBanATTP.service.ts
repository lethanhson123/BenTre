import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { BienBanATTP } from 'src/app/shared/BienBanATTP.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class BienBanATTPService extends BaseService {
  List: BienBanATTP[] | undefined;
  ListFilter: BienBanATTP[] | undefined;
  FormData!: BienBanATTP;

  DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'Description', 'SortOrder', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "BienBanATTP";
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

