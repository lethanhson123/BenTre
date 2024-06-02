import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DanhMucUngDung } from 'src/app/shared/DanhMucUngDung.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class DanhMucUngDungService extends BaseService {
  List: DanhMucUngDung[] | undefined;
  ListFilter: DanhMucUngDung[] | undefined;
  FormData!: DanhMucUngDung;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "DanhMucUngDung";
  }
}

