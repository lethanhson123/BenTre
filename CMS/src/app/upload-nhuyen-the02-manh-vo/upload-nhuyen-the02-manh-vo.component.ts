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
  selector: 'app-upload-nhuyen-the02-manh-vo',
  templateUrl: './upload-nhuyen-the02-manh-vo.component.html',
  styleUrls: ['./upload-nhuyen-the02-manh-vo.component.css']
})
export class UploadNhuyenThe02ManhVoComponent implements OnInit {

  isNhuyenThe02ManhVo: boolean = false;
  excelNhuyenThe02ManhVoURL: string = environment.APIUploadRootURL + environment.Download + "/NhuyenThe02ManhVo.xlsx";
  @ViewChild('uploadNhuyenThe02ManhVo') uploadNhuyenThe02ManhVo!: ElementRef;

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

  ChangeNhuyenThe02ManhVo(files: FileList) {
    if (files) {
      this.isNhuyenThe02ManhVo = true;
    }
  }
  SubmitNhuyenThe02ManhVo() {
    this.UploadService.IsShowLoading = true;
    this.UploadService.File = this.uploadNhuyenThe02ManhVo.nativeElement.files[0];
    this.UploadService.PostNhuyenThe02ManhVoByExcelFileAsync().subscribe(
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