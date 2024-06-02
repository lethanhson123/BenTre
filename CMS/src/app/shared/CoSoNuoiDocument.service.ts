import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CoSoNuoiDocument } from 'src/app/shared/CoSoNuoiDocument.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class CoSoNuoiDocumentService extends BaseService {
  List: CoSoNuoiDocument[] | undefined;
  ListFilter: CoSoNuoiDocument[] | undefined;
  FormData!: CoSoNuoiDocument;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "CoSoNuoiDocument";
  }
}

