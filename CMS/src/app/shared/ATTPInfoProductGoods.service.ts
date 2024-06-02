import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPInfoProductGoods } from 'src/app/shared/ATTPInfoProductGoods.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPInfoProductGoodsService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPInfoProductGoods";
  }
}

