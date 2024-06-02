import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterCoSoNuoiDocuments } from 'src/app/shared/RegisterCoSoNuoiDocuments.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterCoSoNuoiDocumentsService extends BaseService {
  List: RegisterCoSoNuoiDocuments[] | undefined;
  ListFilter: RegisterCoSoNuoiDocuments[] | undefined;
  FormData!: RegisterCoSoNuoiDocuments;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "RegisterCoSoNuoiDocuments";
  }
}

