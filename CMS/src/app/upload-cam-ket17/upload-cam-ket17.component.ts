import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { UploadService } from 'src/app/shared/Upload.service';

@Component({
  selector: 'app-upload-cam-ket17',
  templateUrl: './upload-cam-ket17.component.html',
  styleUrls: ['./upload-cam-ket17.component.css']
})
export class UploadCamKet17Component implements OnInit {

  isUploadCamKet17: boolean = false;
  excelUploadCamKet17URL: string = environment.APIUploadRootURL + environment.Download + "/CamKet17.xlsx";
  @ViewChild('uploadUploadCamKet17') uploadUploadCamKet17!: ElementRef;

  constructor(
    public NotificationService: NotificationService,
        public UploadService: UploadService,
  ) { }

  ngOnInit(): void {
   
  }

  ChangeUploadCamKet17(files: FileList) {
    if (files) {
      this.isUploadCamKet17 = true;
    }
  }
  SubmitUploadCamKet17() {
    this.UploadService.IsShowLoading = true;
    this.UploadService.File = this.uploadUploadCamKet17.nativeElement.files[0];
    this.UploadService.PostCamKet17001ByExcelFileAsync().subscribe(
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