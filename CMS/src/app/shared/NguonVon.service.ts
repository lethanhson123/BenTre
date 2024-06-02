import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { NguonVon } from 'src/app/shared/NguonVon.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class NguonVonService extends BaseService {

  List: NguonVon[] | undefined;
  ListFilter: NguonVon[] | undefined;
  FormData!: NguonVon;
  
  

  DisplayColumns001: string[] = ['STT', 'Name', 'Description', 'Nam', 'StateAgencyName001', 'StateAgencyName002', 'AgencyDepartmentName', 'TongCong', 'DaChi', 'ConLai',  'Save'];
  
  
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "NguonVon";
  }

  GetByNam_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByNam_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }

}

