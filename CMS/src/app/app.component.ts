import { Component } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { DownloadService } from 'src/app/shared/Download.service';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucChucNang } from 'src/app/shared/DanhMucChucNang.model';
import { DanhMucChucNangService } from 'src/app/shared/DanhMucChucNang.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { ThanhVienToken } from 'src/app/shared/ThanhVienToken.model';
import { ThanhVienTokenService } from 'src/app/shared/ThanhVienToken.service';
import { ThanhVienLichSuTruyCap } from 'src/app/shared/ThanhVienLichSuTruyCap.model';
import { ThanhVienLichSuTruyCapService } from 'src/app/shared/ThanhVienLichSuTruyCap.service';
import { ThanhVienThongBao } from 'src/app/shared/ThanhVienThongBao.model';
import { ThanhVienThongBaoService } from 'src/app/shared/ThanhVienThongBao.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CRM';
  domainName = environment.DomainDestination;
  domainURL = environment.DomainURL;
  queryString: string = environment.InitializationString;
  queryStringSub: string = environment.InitializationString;
  Token: string = environment.InitializationString;
  constructor(
    public router: Router,
    public DownloadService: DownloadService,
    public NotificationService: NotificationService,

    public DanhMucChucNangService: DanhMucChucNangService,

    public ThanhVienService: ThanhVienService,
    public ThanhVienTokenService: ThanhVienTokenService,
    public ThanhVienLichSuTruyCapService: ThanhVienLichSuTruyCapService,
    public ThanhVienThongBaoService: ThanhVienThongBaoService,

  ) {
    this.GetByQueryString();
  }
  ngOnInit(): void {

  }
  ngAfterViewInit() {
  }

  interval;
  StartTimer() {
    this.interval = setInterval(() => {
      this.GetByThanhVienID_ReadJSONFileToListAsync();
    }, 60000)
  }
  GetByQueryString() {
    this.router.events.forEach((event) => {
      if (event instanceof NavigationEnd) {
        this.queryString = event.url;
        if (this.queryString.indexOf(environment.Token) > -1) {
          localStorage.setItem(environment.Token, this.queryString.split('=')[this.queryString.split('=').length - 1]);
        }
        this.AuthenticationToken();
      }
    });
    //this.AuthenticationToken();
  }
  AuthenticationToken() {
    this.Token = localStorage.getItem(environment.Token);
    let isLogin = true;
    if (this.Token == null) {
      isLogin = false;
    }
    else {
      this.ThanhVienTokenService.BaseParameter.Token = this.Token;
      this.ThanhVienTokenService.AuthenticationByTokenAsync().subscribe(
        res => {
          this.ThanhVienTokenService.FormData = res as ThanhVienToken;
          if (this.ThanhVienTokenService.FormData != null) {
            if (this.ThanhVienTokenService.FormData.ParentID > 0) {
              this.ThanhVienService.BaseParameter.ID = this.ThanhVienTokenService.FormData.ParentID;
              let Bearer = this.ThanhVienService.Headers.getAll("Authorization")[0];
              if (Bearer == environment.Bearer) {
                this.ThanhVienService.Headers = new HttpHeaders();
                this.ThanhVienService.Headers = this.ThanhVienService.Headers.append('Authorization', 'Bearer ' + this.Token);
              }
              this.ThanhVienService.GetByIDAsync().subscribe(
                res => {
                  this.ThanhVienService.FormDataLogin = res as ThanhVien;
                  if (this.ThanhVienService.FormDataLogin) {
                    if (this.ThanhVienService.FormDataLogin.ParentID == null) {
                      this.ThanhVienService.FormDataLogin.ParentID = environment.InitializationNumber;
                    }
                    localStorage.setItem(environment.ThanhVienID, this.ThanhVienService.FormDataLogin.ID.toString());
                    localStorage.setItem(environment.ThanhVienParentID, this.ThanhVienService.FormDataLogin.ParentID.toString());
                    localStorage.setItem(environment.ThanhVienTaiKhoan, this.ThanhVienService.FormDataLogin.TaiKhoan);
                    localStorage.setItem(environment.ThanhVienHoTen, this.ThanhVienService.FormDataLogin.Name);
                    localStorage.setItem(environment.ThanhVienFileName, this.ThanhVienService.FormDataLogin.FileName);
                    if (this.ThanhVienService.FormDataLogin.CompanyInfoID) {
                      localStorage.setItem(environment.ThanhVienCompanyInfoID, this.ThanhVienService.FormDataLogin.CompanyInfoID.toString());
                    }
                    else {
                      localStorage.setItem(environment.ThanhVienCompanyInfoID, environment.InitializationNumber.toString());
                    }
                    this.DanhMucChucNangGetByThanhVienIDToListAsync();
                    this.ThanhVienLichSuTruyCapSaveAsync(this.queryString);
                    this.GetByThanhVienID_ReadJSONFileToListAsync();
                    this.StartTimer();
                  }
                  else {
                    isLogin = false;
                    if (isLogin == false) {
                      this.router.navigate(['/' + environment.Login]);
                    }
                  }
                },
                err => {
                  isLogin = false;
                  if (isLogin == false) {
                    this.router.navigate(['/' + environment.Login]);
                  }
                }
              );
            }
            else {
              isLogin = false;
              if (isLogin == false) {
                this.router.navigate(['/' + environment.Login]);
              }
            }
          }
          else {
            isLogin = false;
            if (isLogin == false) {
              this.router.navigate(['/' + environment.Login]);
            }
          }
        },
        err => {
          isLogin = false;
          if (isLogin == false) {
            this.router.navigate(['/' + environment.Login]);
          }
        }
      );
    }
    if (isLogin == false) {
      this.router.navigate(['/' + environment.Login]);
    }
  }
  DanhMucChucNangGetByThanhVienIDToListAsync() {
    if (this.queryString) {
      if (this.queryString.length > 0) {
        this.queryStringSub = this.queryString.substring(1, this.queryString.length);
      }
    }
    let Bearer = this.DanhMucChucNangService.Headers.getAll("Authorization")[0];
    if (Bearer == environment.Bearer) {
      this.DanhMucChucNangService.Headers = new HttpHeaders();
      this.DanhMucChucNangService.Headers = this.DanhMucChucNangService.Headers.append('Authorization', 'Bearer ' + this.Token);
    }
    this.DanhMucChucNangService.GetSQLByThanhVienID_ActiveToListAsync().subscribe(
      res => {
        this.DanhMucChucNangService.ListChild = (res as DanhMucChucNang[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.DanhMucChucNangService.ListParent = [];
        let isLogin = false;
        for (var i = 0; i < this.DanhMucChucNangService.ListChild.length; i++) {
          if (this.queryStringSub == this.DanhMucChucNangService.ListChild[i].Code) {
            this.DanhMucChucNangService.ListChild[i].Active = true;
          }
          else {
            this.DanhMucChucNangService.ListChild[i].Active = false;
          }
          if (this.queryStringSub.indexOf(this.DanhMucChucNangService.ListChild[i].Code) > -1) {
            isLogin = true;
          }
          if (this.DanhMucChucNangService.ListChild[i].Code.indexOf(environment.HTMLExtension) > -1) {
            this.DanhMucChucNangService.ListChild[i].Code = environment.DomainURL + this.DanhMucChucNangService.ListChild[i].Code + "?" + environment.Token + "=" + this.ThanhVienTokenService.BaseParameter.Token;
          }
          else {
            this.DanhMucChucNangService.ListChild[i].Code = environment.DomainDestination + this.DanhMucChucNangService.ListChild[i].Code;
          }
        }
        for (var i = 0; i < this.DanhMucChucNangService.ListChild.length; i++) {
          if (this.DanhMucChucNangService.ListChild[i].ParentID == 0) {
            this.DanhMucChucNangService.ListChild[i].Active = false;
            this.DanhMucChucNangService.ListChild[i].ListChild = [];
            for (var j = 0; j < this.DanhMucChucNangService.ListChild.length; j++) {
              if (this.DanhMucChucNangService.ListChild[i].ID == this.DanhMucChucNangService.ListChild[j].ParentID) {
                this.DanhMucChucNangService.ListChild[i].ListChild.push(this.DanhMucChucNangService.ListChild[j]);
                if (this.DanhMucChucNangService.ListChild[j].Active == true) {
                  this.DanhMucChucNangService.ListChild[i].Active = true;
                }
              }
            }
            this.DanhMucChucNangService.ListParent.push(this.DanhMucChucNangService.ListChild[i]);
          }
        }
        if (this.queryStringSub.indexOf("ThanhVienThongTin") > -1) {
          isLogin = true;
        }
        if (this.queryStringSub.indexOf("Info") > -1) {
          isLogin = true;
        }
        if (this.queryStringSub.indexOf("Homepage") > -1) {
          isLogin = true;
        }
        if (isLogin == false) {
          this.router.navigate(['/' + environment.Login]);
        }
      },
      err => {
      }
    );
  }
  ThanhVienLichSuTruyCapSaveAsync(url: string) {
    url = environment.DomainURL + "#" + url;
    this.ThanhVienLichSuTruyCapService.FormData.URL = url;
    this.ThanhVienLichSuTruyCapService.FormData.Name = this.ThanhVienService.FormDataLogin.Name;
    this.ThanhVienLichSuTruyCapService.FormData.Code = this.ThanhVienService.FormDataLogin.TaiKhoan;
    this.ThanhVienLichSuTruyCapService.FormData.Token = this.Token;
    this.ThanhVienLichSuTruyCapService.FormData.ParentID = this.ThanhVienService.FormDataLogin.ID;


    this.DownloadService.GetIPAddress().then(res => {
      this.DownloadService.IPAddress = res["ip"];
      this.ThanhVienLichSuTruyCapService.FormData.Description = this.DownloadService.IPAddress;

      let Bearer = this.ThanhVienLichSuTruyCapService.Headers.getAll("Authorization")[0];
      if (Bearer == environment.Bearer) {
        this.ThanhVienLichSuTruyCapService.Headers = new HttpHeaders();
        this.ThanhVienLichSuTruyCapService.Headers = this.ThanhVienLichSuTruyCapService.Headers.append('Authorization', 'Bearer ' + this.Token);
      }
      this.ThanhVienLichSuTruyCapService.SaveAsync().subscribe(
        res => {
        },
        err => {
        }
      );
    }).catch(error => {
      this.ThanhVienLichSuTruyCapService.SaveAsync().subscribe(
        res => {
        },
        err => {
        }
      );
    });
  }
  GetByThanhVienID_ReadJSONFileToListAsync() {
    this.ThanhVienThongBaoService.BaseParameter.ThanhVienID = this.ThanhVienService.FormDataLogin.ID;

    let Bearer = this.ThanhVienThongBaoService.Headers.getAll("Authorization")[0];
    if (Bearer == environment.Bearer) {
      this.ThanhVienThongBaoService.Headers = new HttpHeaders();
      this.ThanhVienThongBaoService.Headers = this.ThanhVienThongBaoService.Headers.append('Authorization', 'Bearer ' + this.Token);
    }

    this.ThanhVienThongBaoService.GetByThanhVienID_ReadJSONFileToListAsync().subscribe(
      res => {
        this.ThanhVienThongBaoService.List = (res as ThanhVienThongBao[]);
        if (this.ThanhVienThongBaoService.List) {
          if (this.ThanhVienThongBaoService.List.length > 0) {
            for (let i = 0; i < this.ThanhVienThongBaoService.List.length; i++) {
              if (this.ThanhVienThongBaoService.List[i].TypeName == environment.PlanThamDinh) {
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDThamDinhATTP) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinh";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDAnToanThucPhamSauThuHoach) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhAnToanThucPhamSauThuHoach";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDCamKet17) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhCompaniesCamKet17";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDChuoiCungUng) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhChuoiCungUng";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDGiamSatDuLuong) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhGiamSatDuLuong";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDKiemTraTapChat) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhKiemTraTapChat";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDNhuyenTheHaiManhVo) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhNhuyenTheHaiManhVo";
                }
                if (this.ThanhVienThongBaoService.List[i].ParentID == environment.PlanTypeIDThanhTraChuyenNganh) {
                  this.ThanhVienThongBaoService.List[i].Code = "PlanThamDinhThanhTraChuyenNganh";
                }
              }
            }
            this.ThanhVienThongBaoService.List = this.ThanhVienThongBaoService.List.sort((a, b) => (a.LastUpdatedDate < b.LastUpdatedDate ? 1 : -1))
          }
        }
      },
      err => {
      }
    );
  }
  MenuClick(itemParent: DanhMucChucNang) {
    itemParent.Active = !itemParent.Active;
  }
  Logout() {
    localStorage.setItem(environment.Token, environment.InitializationString);
    localStorage.setItem(environment.ThanhVienID, environment.InitializationString);
    document.getElementById("toggle-sidebar-close-mobile").click();
    this.router.navigate(['/' + environment.Login]);
  }
}
