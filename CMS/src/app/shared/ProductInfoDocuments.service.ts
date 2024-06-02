import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { ProductInfoDocuments } from 'src/app/shared/ProductInfoDocuments.model';
import { BaseService } from './Base.service';
@Injectable({
    providedIn: 'root'
})
export class ProductInfoDocumentsService extends BaseService{

    List: ProductInfoDocuments[] | undefined;
    ListFilter: ProductInfoDocuments[] | undefined;
    FormData!: ProductInfoDocuments;

    DisplayColumns001: string[] = ['LastUpdatedDate', 'Name', 'FileName', 'Save'];

    constructor(public httpClient: HttpClient) {
        super(httpClient);
        this.Controller = "ProductInfoDocuments";
    }
    
}

