import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ATTPInfoDocuments } from 'src/app/shared/ATTPInfoDocuments.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class ATTPInfoDocumentsService extends BaseService {

  List: ATTPInfoDocuments[] | undefined;
  ListFilter: ATTPInfoDocuments[] | undefined;
  FormData!: ATTPInfoDocuments;

  DisplayColumns001: string[] = ['Name', 'Display', 'FileName'];
  DisplayColumns002: string[] = ['Name', 'Display'];
  DisplayColumns003: string[] = ['Name', 'FileName'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "ATTPInfoDocuments";
  }
}

