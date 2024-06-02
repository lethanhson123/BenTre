import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { Router, NavigationEnd } from '@angular/router';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';
import { DownloadService } from 'src/app/shared/Download.service';
import { NotificationService } from 'src/app/shared/Notification.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  isShowLoading: boolean = false;
  domainName = environment.DomainDestination;
  constructor(
    public ThanhVienService: ThanhVienService,
    public DanhMucThanhVienService: DanhMucThanhVienService,
    public DownloadService: DownloadService,
    public NotificationService: NotificationService,
  ) {
  }
  ngOnInit() {
    this.DanhMucThanhVienGetToListAsync();
  }
  DanhMucThanhVienGetToListAsync() {    
    this.DanhMucThanhVienService.GetByIDAsync(environment.NguoiDanID).subscribe(
      res => {
        this.DanhMucThanhVienService.formData = (res as DanhMucThanhVien);
        this.DanhMucThanhVienService.list.push(this.DanhMucThanhVienService.formData);
      },
      err => {
      }
    );
    this.DanhMucThanhVienService.GetByIDAsync(environment.DuKhachID).subscribe(
      res => {
        this.DanhMucThanhVienService.formData = (res as DanhMucThanhVien);
        this.DanhMucThanhVienService.list.push(this.DanhMucThanhVienService.formData);
        this.ThanhVienService.formData.DanhMucThanhVienID = environment.DuKhachID;
      },
      err => {
      }
    );    
    this.DanhMucThanhVienService.GetByIDAsync(environment.DonViToChucID).subscribe(
      res => {
        this.DanhMucThanhVienService.formData = (res as DanhMucThanhVien);
        this.DanhMucThanhVienService.list.push(this.DanhMucThanhVienService.formData);
        this.ThanhVienService.formData.DanhMucThanhVienID = environment.DuKhachID;
      },
      err => {
      }
    );  
  }
  onSubmit(form: NgForm) {
    this.isShowLoading = true;
    this.ThanhVienService.CheckEmailExistAsync(this.ThanhVienService.formData.Email).subscribe(
      res => {
        this.isShowLoading = false;
        let isEmailExist = res as boolean;
        if (isEmailExist == true) {
          this.NotificationService.warn(environment.EmailExists);
        }
        else {
          this.ThanhVienService.SaveAsync(this.ThanhVienService.formData).subscribe(
            res => {
              window.location.href = this.domainName + "DangKyThanhCong";
            },
            err => {
              this.NotificationService.warn(environment.RegisterNotSuccess);
              this.isShowLoading = false;
            }
          );
        }
      },
      err => {
        this.NotificationService.warn(environment.EmailExists);
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