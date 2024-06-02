import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Report } from 'src/app/shared/Report.model';
import { BaseService } from './Base.service';

@Injectable({
  providedIn: 'root'
})

export class ReportService extends BaseService {

  DisplayColumns0001: string[] = ['STT', 'Name', 'ThongKe001', 'ThongKe002', 'ThongKe003', 'ThongKe004', 'ThongKe005', 'ThongKe006', 'ThongKe007', 'ThongKe008', 'ThongKe009'];
  DisplayColumns0002: string[] = ['STT', 'Name', 'NgayBatDau', 'NgayKetThuc', 'ThongKe001', 'ThongKe002', 'ThongKe003'];
  DisplayColumns0003: string[] = ['STT', 'Name', 'ThongKe001', 'ThongKe002', 'ThongKe003', 'Code', 'ThongKe004', 'ThongKe005', 'ThongKe006'];
  DisplayColumns0004: string[] = ['STT', 'Name', 'ThongKe001', 'ThongKe002', 'ThongKe003'];
  DisplayColumns00040005: string[] = ['STT', 'Name', 'TyLe001', 'ThongKe001', 'ThongKe005', 'ThongKe004', 'TyLe002', 'ThongKe007', 'ThongKe006', 'TyLe003'];
  DisplayColumns0007: string[] = ['STT', 'CompanyInfoName', 'SpeciesName', 'NgayBatDau', 'NgayKetThuc', 'Code', 'NgayGhiNhan', 'ThongKe001', 'ThongKe002'];
  DisplayColumns0008: string[] = ['STT', 'DistrictDataName', 'SpeciesName', 'ThongKe001', 'ThongKe002'];
  DisplayColumns0009: string[] = ['Nam', 'ThongKe001', 'ThongKe002', 'ThongKe003', 'ThongKe004', 'ThongKe005', 'ThongKe006', 'ThongKe007', 'ThongKe008', 'ThongKe009', 'ThongKe010', 'ThongKe011', 'ThongKe012', 'ThongKe101', 'ThongKe102', 'ThongKe103', 'ThongKe104', 'ThongKe105', 'ThongKe106', 'ThongKe107', 'ThongKe108', 'ThongKe109', 'ThongKe110', 'ThongKe111', 'ThongKe112', 'ThongKe201', 'ThongKe202', 'ThongKe203', 'ThongKe204', 'ThongKe205', 'ThongKe206', 'ThongKe207', 'ThongKe208', 'ThongKe209', 'ThongKe210', 'ThongKe211', 'ThongKe212'];
  DisplayColumns0010: string[] = ['STT', 'Name', 'ThongKe002', 'ThongKe003', 'ThongKe001'];
  DisplayColumns0015: string[] = ['STT', 'Name', 'ThongKe001'];
  DisplayColumns0016: string[] = ['STT', 'DistrictDataName', 'ThongKe001', 'ThongKe002', 'ThongKe003'];
  DisplayColumns0017: string[] = ['STT', 'DistrictDataName', 'WardDataName', 'ThongKe001', 'ThongKe002', 'ThongKe003'];



  DisplayColumnsPushNotification0000001: string[] = ['STT', 'PushNotificationTieuDe', 'PushNotificationNoiDung', 'PushNotificationTongTinDaGui', 'PushNotificationTongTinDaNhan'];


  List: Report[] | undefined;
  ListFilter: Report[] | undefined;
  FormData!: Report;

  ListReport0009: Report[] | undefined;

  ListReportDashboard0002: Report[] | undefined;
  ListReportDashboard0003: Report[] | undefined;
  ListReportDashboard0004: Report[] | undefined;
  ListReportDashboard0005: Report[] | undefined;

  APIURL: string = environment.APIUploadURL;
  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "Report";   
  }
 

  Report0001ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0001ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0002ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0002ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0003ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0003ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0004_0005ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0004_0005ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0007ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0007ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0008ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0008ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportPushNotification0000001Async() {
    let url = this.APIURL + this.Controller + '/ReportPushNotification0000001Async';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0009ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0009ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0010ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0010ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0011ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0011ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0012ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0012ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0013ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0013ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0014ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0014ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0015ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0015ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0016ToListAsync() {    
    let url = this.APIURL + this.Controller + '/Report0016ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  Report0017ToListAsync() {
    let url = this.APIURL + this.Controller + '/Report0017ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportDashboard0001Async() {
    let url = this.APIURL + this.Controller + '/ReportDashboard0001Async';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportDashboard0002ToListAsync() {
    let url = this.APIURL + this.Controller + '/ReportDashboard0002ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportDashboard0003ToListAsync() {
    let url = this.APIURL + this.Controller + '/ReportDashboard0003ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportDashboard0004ToListAsync() {
    let url = this.APIURL + this.Controller + '/ReportDashboard0004ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ReportDashboard0005ToListAsync() {
    let url = this.APIURL + this.Controller + '/ReportDashboard0005ToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
}

