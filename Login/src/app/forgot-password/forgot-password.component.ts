import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { DownloadService } from 'src/app/shared/Download.service';
import { NotificationService } from 'src/app/shared/Notification.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent implements OnInit {

  isShowLoading: boolean = false;
  domainName = environment.DomainDestination;
  constructor(
    public ThanhVienService: ThanhVienService,
    public DownloadService: DownloadService,
    public NotificationService: NotificationService,
  ) {
  }
  ngOnInit() {
  }
  onSubmit(form: NgForm) {
    this.isShowLoading = true;
    this.ThanhVienService.QuenMatKhauAsync(this.ThanhVienService.formData.Email).subscribe(
      res => {
        alert(res);
        window.location.href = this.domainName + "KhoiPhucMatKhau";        
      },
      err => {
        this.NotificationService.warn(environment.ForgotPassword);
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