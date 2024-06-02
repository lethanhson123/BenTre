import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { AgencyMenu } from 'src/app/shared/AgencyMenu.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class AgencyMenuService extends BaseService {
  List: AgencyMenu[] | undefined;
  ListFilter: AgencyMenu[] | undefined;
  FormData!: AgencyMenu;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "AgencyMenu";
  }
}

