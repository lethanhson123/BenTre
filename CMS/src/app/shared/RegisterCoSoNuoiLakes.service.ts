import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterCoSoNuoiLakes } from 'src/app/shared/RegisterCoSoNuoiLakes.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterCoSoNuoiLakesService extends BaseService {
  List: RegisterCoSoNuoiLakes[] | undefined;
  ListFilter: RegisterCoSoNuoiLakes[] | undefined;
  FormData!: RegisterCoSoNuoiLakes;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "RegisterCoSoNuoiLakes";
  }
}

