import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterHarvestItems } from 'src/app/shared/RegisterHarvestItems.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterHarvestItemsService extends BaseService {

  List: RegisterHarvestItems[] | undefined;
  ListFilter: RegisterHarvestItems[] | undefined;
  FormData!: RegisterHarvestItems;
  FileToUpload001: FileList;

  DisplayColumns001: string[] = ['STT', 'ID', 'NgayGhiNhan', 'Name', 'Description', 'SoLuong', 'Note', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'NgayGhiNhan', 'Name', 'Description', 'SoLuong', 'Note', 'DanhMucATTPXepLoaiID', 'Save'];  
  DisplayColumns003: string[] = ['STT', 'NgayGhiNhan', 'SoLuong', 'Name', 'Description', 'HTMLContent', 'Note', 'Save'];
  DisplayColumns004: string[] = ['NgayGhiNhan', 'Name', 'Description', 'HTMLContent', 'Code001', 'SoLuong', 'SoLuong001', 'DanhMucATTPXepLoaiID', 'Note', 'Save'];  
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "RegisterHarvestItems";
  }

  SaveAndUploadFiles001Async() {
    let url = this.APIURL + this.Controller + '/SaveAndUploadFiles001Async';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.FormData));
    if (this.FileToUpload) {
      if (this.FileToUpload.length > 0) {
        for (var i = 0; i < this.FileToUpload.length; i++) {
          formUpload.append('file[]', this.FileToUpload[i]);
        }
      }
    }
    if (this.FileToUpload001) {
      if (this.FileToUpload001.length > 0) {
        for (var i = 0; i < this.FileToUpload001.length; i++) {
          formUpload.append('file[]', this.FileToUpload001[i]);
        }
      }
    }
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

