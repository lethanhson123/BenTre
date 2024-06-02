import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ProductGroupService extends BaseService {


  List: ProductGroup[] | undefined;
  ListFilter: ProductGroup[] | undefined;
  FormData!: ProductGroup;

  DisplayColumns001: string[] = ['STT', 'ID', 'ParentID', 'Name', 'SortOrder', 'Active', 'Save'];
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ProductGroup";
  }
}

