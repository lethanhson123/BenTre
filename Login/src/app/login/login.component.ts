import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { DownloadService } from 'src/app/shared/Download.service';
import { NotificationService } from 'src/app/shared/Notification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  isShowLoading: boolean = false;
  domainName = environment.DomainDestination;
  constructor(
    public DownloadService: DownloadService,
    public NotificationService: NotificationService,
    public ThanhVienService: ThanhVienService,
  ) {
    this.getByQueryString();
  }
  ngOnInit() {
  }
  getByQueryString() {
    this.isShowLoading = true;
    this.ThanhVienService.GetByIDAsync(environment.InitializationNumber).subscribe(
      res => {
        this.ThanhVienService.formDataLogin = res as ThanhVien;
        this.isShowLoading = false;
      },
      err => {
        this.isShowLoading = false;
      }
    );
  }
  onSubmit(form: NgForm) {
    this.isShowLoading = true;
    this.ThanhVienService.AuthenticationAsync(form.value).subscribe(
      res => {
        this.isShowLoading = false;
        this.ThanhVienService.formDataLogin = res as ThanhVien;
        if (this.ThanhVienService.formDataLogin) {
          if (this.ThanhVienService.formDataLogin.Note) {
            window.location.href = this.ThanhVienService.formDataLogin.Note;
          }
          else {
            this.NotificationService.success(environment.LoginNotSuccess);
          }
        }
      },
      err => {
        this.NotificationService.warn(environment.LoginNotSuccess);
        this.isShowLoading = false;
      }
    );
  }
  onVietNam() {
    this.DownloadService.LanguageID = true;
    this.DownloadService.ChangeLanguage();
  }
  onEnglish() {
    this.DownloadService.LanguageID = false;
    this.DownloadService.ChangeLanguage();
  }
}
