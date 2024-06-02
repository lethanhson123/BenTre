import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CamKet17 } from 'src/app/shared/CamKet17.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class CamKet17Service extends BaseService {

  List: CamKet17[] | undefined;
  ListFilter: CamKet17[] | undefined;
  FormData!: CamKet17;
  
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "CamKet";
  }
}

