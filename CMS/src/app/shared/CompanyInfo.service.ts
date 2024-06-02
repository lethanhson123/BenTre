import { browser } from 'protractor';
import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { BaseService } from './Base.service';
@Injectable({
  providedIn: 'root'
})
export class CompanyInfoService extends BaseService {

  List: CompanyInfo[] | undefined;
  ListFilter: CompanyInfo[] | undefined;
  FormData!: CompanyInfo;

  DisplayColumns001: string[] = ['STT', 'ID', 'DanhMucCompanyTinhTrangName', 'DistrictDataName', 'WardDataName', 'Name', 'fullname', 'phone', 'DKKD'];
  DisplayColumns002: string[] = ['STT', 'ID', 'Name', 'DistrictDataName', 'WardDataName', 'DanhMucCompanyTinhTrangName'];
  DisplayColumns003: string[] = ['Save', 'STT', 'Display', 'CoSoNuoiMa', 'Name', 'DistrictDataName', 'WardDataName'];

  constructor(public httpClient: HttpClient) {
    super(httpClient);
    this.Controller = "CompanyInfo";
  }

  Filter(searchString: string) {
    if (searchString.length > 0) {
      searchString = searchString.trim();
      searchString = searchString.toLocaleLowerCase();
      this.ListFilter = this.List.filter((item: any) =>
        (item.ID.toString().indexOf(searchString) !== -1)
        || (item.Name && item.Name.length > 0 && item.Name.toLocaleLowerCase().indexOf(searchString) !== -1)
        || (item.phone && item.phone.length > 0 && item.phone.toLocaleLowerCase().indexOf(searchString) !== -1)
        || (item.DKKD && item.DKKD.length > 0 && item.DKKD.toLocaleLowerCase().indexOf(searchString) !== -1)
      );
    }
    else {
      this.ListFilter = this.List;
    }
  }

  GetByParentIDOrSearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentIDOrSearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_DistrictDataID_WardDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDanhMucCompanyTinhTrangID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByDistrictDataID_ActiveToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDistrictDataID_ActiveToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByDistrictDataIDToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDistrictDataIDToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_Active_Page_PageSizeToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_Active_Page_PageSizeToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByParentID_Active_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByParentID_Active_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByActive_Page_PageSizeToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByActive_Page_PageSizeToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByActive_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByActive_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByDistrictDataID_Page_PageSizeToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDistrictDataID_Page_PageSizeToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByDistrictDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByDistrictDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanTypeID_DanhMucATTPXepLoaiID_DistrictDataID_WardDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByPlanTypeID_DanhMucATTPTinhTrangID_DistrictDataID_WardDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_Page_PageSizeToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync() {
    let url = this.APIURL + this.Controller + '/GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync';
    const formUpload: FormData = new FormData();
    formUpload.append('data', JSON.stringify(this.BaseParameter));
    return this.httpClient.post(url, formUpload, { headers: this.Headers });
  }
  ComponentGet100ToListAsync() {
    this.IsShowLoading = true;
    this.BaseParameter.Page = environment.InitializationNumber;
    this.BaseParameter.PageSize = environment.PageSize;
    if (this.BaseParameter.ID == null) {
      this.BaseParameter.ID = environment.InitializationNumber;
    }
    this.GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchString_ID_Page_PageSizeToListAsync().subscribe(
      res => {
        this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ListFilter = this.List;
        this.IsShowLoading = false;
      },
      err => {
        this.IsShowLoading = false;
      }
    );
  }
  ComponentGet000ToListAsync() {
    this.IsShowLoading = true;
    this.BaseParameter.Page = environment.InitializationNumber;
    this.BaseParameter.PageSize = environment.PageSize;
    this.GetByPageAndPageSizeToListAsync().subscribe(
      res => {
        this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ListFilter = this.List;
        this.IsShowLoading = false;
      },
      err => {
        this.IsShowLoading = false;
      }
    );
  }
  ComponentGet001ToListAsync() {
    this.IsShowLoading = true;
    this.BaseParameter.Active = true;
    this.BaseParameter.Page = environment.InitializationNumber;
    this.BaseParameter.PageSize = environment.PageSize;
    this.GetByActive_Page_PageSizeToListAsync().subscribe(
      res => {
        this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ListFilter = this.List;
        this.IsShowLoading = false;
      },
      err => {
        this.IsShowLoading = false;
      }
    );
  }
  ComponentGet002ToListAsync() {
    this.IsShowLoading = true;
    this.BaseParameter.Page = environment.InitializationNumber;
    this.BaseParameter.PageSize = environment.PageSize;
    this.GetByDistrictDataID_Page_PageSizeToListAsync().subscribe(
      res => {
        this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ListFilter = this.List;
        this.IsShowLoading = false;
      },
      err => {
        this.IsShowLoading = false;
      }
    );
  }
  Filter100(searchString: string) {
    if (searchString.length > 0) {
      searchString = searchString.trim();
      searchString = searchString.toLocaleLowerCase();
      this.IsShowLoading = true;
      this.BaseParameter.SearchString = searchString;
      this.GetByActive_PlanTypeID_DistrictDataID_WardDataID_SearchStringToListAsync().subscribe(
        res => {
          this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.ListFilter = this.List;
          this.IsShowLoading = false;
        },
        err => {
          this.IsShowLoading = false;
        }
      );
    }
    else {
      this.ListFilter = this.List;
    }
  }
  Filter000(searchString: string) {
    if (searchString.length > 0) {
      searchString = searchString.trim();
      searchString = searchString.toLocaleLowerCase();
      this.IsShowLoading = true;
      this.BaseParameter.SearchString = searchString;
      this.GetBySearchStringToListAsync().subscribe(
        res => {
          this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.ListFilter = this.List;
          this.IsShowLoading = false;
        },
        err => {
          this.IsShowLoading = false;
        }
      );
    }
    else {
      this.ListFilter = this.List;
    }
  }
  Filter001(searchString: string) {
    if (searchString.length > 0) {
      searchString = searchString.trim();
      searchString = searchString.toLocaleLowerCase();
      this.IsShowLoading = true;
      this.BaseParameter.Active = true;
      this.BaseParameter.SearchString = searchString;
      this.GetByActive_SearchStringToListAsync().subscribe(
        res => {
          this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.ListFilter = this.List;
          this.IsShowLoading = false;
        },
        err => {
          this.IsShowLoading = false;
        }
      );
    }
    else {
      this.ListFilter = this.List;
    }
  }
  Filter002(searchString: string) {
    if (searchString.length > 0) {
      searchString = searchString.trim();
      searchString = searchString.toLocaleLowerCase();
      this.IsShowLoading = true;
      this.BaseParameter.SearchString = searchString;
      this.GetByDistrictDataID_SearchStringToListAsync().subscribe(
        res => {
          this.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.ListFilter = this.List;
          this.IsShowLoading = false;
        },
        err => {
          this.IsShowLoading = false;
        }
      );
    }
    else {
      this.ListFilter = this.List;
    }
  }
}

