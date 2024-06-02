import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

import { UploadService } from 'src/app/shared/Upload.service';

@Component({
  selector: 'app-upload-giam-sat-du-luong',
  templateUrl: './upload-giam-sat-du-luong.component.html',
  styleUrls: ['./upload-giam-sat-du-luong.component.css']
})
export class UploadGiamSatDuLuongComponent implements OnInit {

  isGiamSatDuLuong: boolean = false;
  excelGiamSatDuLuongURL: string = environment.APIUploadRootURL + environment.Download + "/GiamSatDuLuong.xlsx";
  @ViewChild('uploadGiamSatDuLuong') uploadGiamSatDuLuong!: ElementRef;

  constructor(
    public NotificationService: NotificationService,  
    
    public DownloadService: DownloadService,

    public UploadService: UploadService,
  ) { }

  ngOnInit(): void {    
    this.ComponentGetListNam();
  }

  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }

  ChangeGiamSatDuLuong(files: FileList) {
    if (files) {
      this.isGiamSatDuLuong = true;
    }
  }
  SubmitGiamSatDuLuong() {
    this.UploadService.IsShowLoading = true;
    this.UploadService.File = this.uploadGiamSatDuLuong.nativeElement.files[0];
    this.UploadService.PostGiamSatDuLuongByExcelFileAsync().subscribe(
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
