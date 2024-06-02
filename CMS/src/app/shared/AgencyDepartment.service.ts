import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgencyDepartment } from 'src/app/shared/AgencyDepartment.model';
import { BaseService } from './Base.service';

@Injectable({
  providedIn: 'root'
})

export class AgencyDepartmentService extends BaseService {

  DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Code', 'Name', 'Note', 'SortOrder', 'Active', 'Save'];
  
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "AgencyDepartment";
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

