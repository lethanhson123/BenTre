import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterCoSoNuoi } from 'src/app/shared/RegisterCoSoNuoi.model';

import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterCoSoNuoiService extends BaseService {
  List: RegisterCoSoNuoi[] | undefined;
  ListFilter: RegisterCoSoNuoi[] | undefined;
  FormData!: RegisterCoSoNuoi;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "RegisterCoSoNuoi";
  }
}

