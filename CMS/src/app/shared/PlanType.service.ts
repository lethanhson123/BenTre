import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { PlanType } from 'src/app/shared/PlanType.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class PlanTypeService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "PlanType";
  }  
}

