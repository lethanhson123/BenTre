import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucCompanyPhanLoai } from 'src/app/shared/DanhMucCompanyPhanLoai.model';
import { DanhMucCompanyPhanLoaiService } from 'src/app/shared/DanhMucCompanyPhanLoai.service';

import { UploadService } from 'src/app/shared/Upload.service';

@Component({
  selector: 'app-upload-tham-dinh-an-toan-thuc-pham',
  templateUrl: './upload-tham-dinh-an-toan-thuc-pham.component.html',
  styleUrls: ['./upload-tham-dinh-an-toan-thuc-pham.component.css']
})
export class UploadThamDinhAnToanThucPhamComponent implements OnInit {

  isCompanyInfo: boolean = false;
  excelCompanyInfoURL: string = environment.APIUploadRootURL + environment.Download + "/CompanyInfo.xlsx";
  @ViewChild('uploadCompanyInfo') uploadCompanyInfo!: ElementRef;

  constructor(
    public NotificationService: NotificationService,

    public DanhMucCompanyPhanLoaiService: DanhMucCompanyPhanLoaiService,

    public UploadService: UploadService,
  ) { }

  ngOnInit(): void {
    this.DanhMucCompanyPhanLoaiSearch();
  }

  DanhMucCompanyPhanLoaiSearch() {
    this.DanhMucCompanyPhanLoaiService.ComponentGetAllToListAsync();
  }

  ChangeCompanyInfo(files: FileList) {
    if (files) {
      this.isCompanyInfo = true;
    }
  }
  SubmitCompanyInfo() {
    this.UploadService.IsShowLoading = true;
    this.UploadService.File = this.uploadCompanyInfo.nativeElement.files[0];
    this.UploadService.PostCompanyInfo_CompanyInfoLichSuKiemTraByExcelFileAsync().subscribe(
      res => {
        this.UploadService.IsShowLoading = false;
        this.NotificationService.warn(environment.UploadSuccess);
      },
      err => {
        this.UploadService.IsShowLoading = false;
        this.NotificationService.warn(environment.UploadNotSuccess);
      }
    );
  }
}