import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPTiepNhanDocuments } from 'src/app/shared/ATTPTiepNhanDocuments.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPTiepNhanDocumentsService extends BaseService {
  List: ATTPTiepNhanDocuments[] | undefined;
  ListFilter: ATTPTiepNhanDocuments[] | undefined;
  FormData!: ATTPTiepNhanDocuments;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPTiepNhanDocuments";
  }
}

