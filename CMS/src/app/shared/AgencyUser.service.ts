import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgencyUser } from 'src/app/shared/AgencyUser.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class AgencyUserService extends BaseService {
  List: AgencyUser[] | undefined;
  ListFilter: AgencyUser[] | undefined;
  FormData!: AgencyUser;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "AgencyUser";
  }
}

