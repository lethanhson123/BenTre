import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { UploadService } from 'src/app/shared/Upload.service';

@Component({
  selector: 'app-upload-ma-so-co-so-nuoi',
  templateUrl: './upload-ma-so-co-so-nuoi.component.html',
  styleUrls: ['./upload-ma-so-co-so-nuoi.component.css']
})
export class UploadMaSoCoSoNuoiComponent implements OnInit {

  isUploadMaSoCoSoNuoi: boolean = false;
  excelUploadMaSoCoSoNuoiURL: string = environment.APIUploadRootURL + environment.Download + "/MaSoCoSoNuoi.xlsx";
  @ViewChild('uploadUploadMaSoCoSoNuoi') uploadUploadMaSoCoSoNuoi!: ElementRef;

  constructor(
    public NotificationService: NotificationService,
        public UploadService: UploadService,
  ) { }

  ngOnInit(): void {
   
  }

  ChangeUploadMaSoCoSoNuoi(files: FileList) {
    if (files) {
      this.isUploadMaSoCoSoNuoi = true;
    }
  }
  SubmitUploadMaSoCoSoNuoi() {
    this.UploadService.IsShowLoading = true;
    this.UploadService.File = this.uploadUploadMaSoCoSoNuoi.nativeElement.files[0];
    this.UploadService.PostMaSoCoSoNuoiByExcelFileAsync().subscribe(
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
