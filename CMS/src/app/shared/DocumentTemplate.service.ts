import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DocumentTemplate } from 'src/app/shared/DocumentTemplate.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class DocumentTemplateService extends BaseService {

  List: DocumentTemplate[] | undefined;
  ListFilter: DocumentTemplate[] | undefined;
  FormData!: DocumentTemplate;

  DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Code', 'Name', 'Note', 'SortOrder', 'Active', 'FileName', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'Name', 'ParentID'];
  DisplayColumns003: string[] = ['STT', 'ID', 'ParentID', 'Name', 'Note', 'SortOrder', 'Active', 'Save'];
  DisplayColumns004: string[] = ['STT', 'ID', 'ParentID', 'Name', 'SortOrder', 'Active', 'Save'];
  DisplayColumns005: string[] = ['STT', 'ID', 'ParentID', 'Name', 'Save'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "DocumentTemplate";
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

