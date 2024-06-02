import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductUnit } from 'src/app/shared/ProductUnit.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ProductUnitService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ProductUnit";
  }
}

