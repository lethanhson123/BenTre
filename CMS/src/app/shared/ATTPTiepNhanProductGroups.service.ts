import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPTiepNhanProductGroups } from 'src/app/shared/ATTPTiepNhanProductGroups.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPTiepNhanProductGroupsService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPTiepNhanProductGroups";
  }
}

