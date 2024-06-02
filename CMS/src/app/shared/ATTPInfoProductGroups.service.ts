import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPInfoProductGroups } from 'src/app/shared/ATTPInfoProductGroups.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPInfoProductGroupsService extends BaseService {

  List: ATTPInfoProductGroups[] | undefined;
  ListFilter: ATTPInfoProductGroups[] | undefined;
  FormData!: ATTPInfoProductGroups;

  DisplayColumns001: string[] = ['ProductGroupID', 'Save'];
  DisplayColumns002: string[] = ['ProductGroupID'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPInfoProductGroups";
  }
}

