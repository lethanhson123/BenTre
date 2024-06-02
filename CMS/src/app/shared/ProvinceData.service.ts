import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProvinceData } from 'src/app/shared/ProvinceData.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ProvinceDataService extends BaseService {

  List: ProvinceData[] | undefined;
  ListFilter: ProvinceData[] | undefined;
  FormData!: ProvinceData;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ProvinceData";
  }
}

