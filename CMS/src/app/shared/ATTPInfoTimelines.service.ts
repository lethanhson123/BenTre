import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPInfoTimelines } from 'src/app/shared/ATTPInfoTimelines.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPInfoTimelinesService extends BaseService {
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPInfoTimelines";
  }
}

