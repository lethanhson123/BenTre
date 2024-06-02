import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPTiepNhan } from 'src/app/shared/ATTPTiepNhan.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPTiepNhanService extends BaseService {
  List: ATTPTiepNhan[] | undefined;
  ListFilter: ATTPTiepNhan[] | undefined;
  FormData!: ATTPTiepNhan;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPTiepNhan";
  }
}

