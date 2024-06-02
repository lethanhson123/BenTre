import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class DistrictDataService extends BaseService {

  List: DistrictData[] | undefined;
  ListFilter: DistrictData[] | undefined;
  FormData!: DistrictData;

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "DistrictData";
  }
}

