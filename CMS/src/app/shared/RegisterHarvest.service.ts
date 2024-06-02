import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { RegisterHarvest } from 'src/app/shared/RegisterHarvest.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class RegisterHarvestService extends BaseService {

  List: RegisterHarvest[] | undefined;
  ListFilter: RegisterHarvest[] | undefined;
  FormData!: RegisterHarvest;

  DisplayColumns001: string[] = ['STT', 'ID', 'Name', 'NgayBatDau', 'NgayKetThuc', 'Save'];
  DisplayColumns002: string[] = ['STT', 'ID', 'NgayBatDau', 'NgayKetThuc', 'Name', 'CompanyInfoID', 'SpeciesID', 'Save'];
  DisplayColumns003: string[] = ['STT', 'ID', 'DanhMucLayMauName', 'NgayBatDau', 'NgayKetThuc'];
  DisplayColumns004: string[] = ['STT', 'ID', 'NgayBatDau', 'NgayKetThuc', 'CompanyInfoName', 'DanhMucLayMauName', 'Save'];
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "RegisterHarvest";
  }
}

