import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Species } from 'src/app/shared/Species.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class SpeciesService extends BaseService {
  List: Species[] | undefined;
  ListFilter: Species[] | undefined;
  FormData!: Species;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "Species";
  }
}

