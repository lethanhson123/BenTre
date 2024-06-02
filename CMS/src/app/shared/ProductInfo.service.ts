import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductInfo } from 'src/app/shared/ProductInfo.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ProductInfoService extends BaseService {

  List: ProductInfo[] | undefined;
  ListFilter: ProductInfo[] | undefined;
  FormData!: ProductInfo;

  DisplayColumns001: string[] = ['STT', 'ID', 'Code', 'Name', 'congbo_date', 'price_min', 'price_max','DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'Code', 'Name', 'congbo_date', 'price_min', 'price_max', 'Save'];
  DisplayColumns003: string[] = ['STT', 'ID', 'Code', 'Name', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns004: string[] = ['STT', 'ID', 'CompanyInfoName', 'Code', 'Name', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'Save'];
  DisplayColumns005: string[] = ['STT', 'ID', 'CompanyInfoName', 'Code', 'Name', 'NgayGhiNhan', 'DanhMucATTPXepLoaiName', 'Active', 'Save'];
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ProductInfo";
  }

  GetByBatDau_KetThucToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByBatDau_KetThucToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

