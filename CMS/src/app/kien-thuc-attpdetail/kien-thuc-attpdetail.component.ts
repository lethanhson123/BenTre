import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';


import { KienThucATTP } from 'src/app/shared/KienThucATTP.model';
import { KienThucATTPService } from 'src/app/shared/KienThucATTP.service';

@Component({
  selector: 'app-kien-thuc-attpdetail',
  templateUrl: './kien-thuc-attpdetail.component.html',
  styleUrls: ['./kien-thuc-attpdetail.component.css']
})
export class KienThucATTPDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<KienThucATTPDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CauHoiNhomService: CauHoiNhomService,    

    public KienThucATTPService: KienThucATTPService,
  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
  }
  DateNgayGhiNhan(value) {
    this.KienThucATTPService.FormData.NgayGhiNhan = new Date(value);
  }
  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }

  fileToUpload0: File = null;
  ChangeFileName(files: FileList) {
    if (files) {
      this.KienThucATTPService.FileToUpload = files;
      this.fileToUpload0 = files.item(0);
      var reader = new FileReader();
      reader.onload = (event: any) => {
        this.KienThucATTPService.FormData.FileName = event.target.result;
      };
      reader.readAsDataURL(this.fileToUpload0);
    }
  }

  KienThucATTPSave() {
    this.NotificationService.warn(this.KienThucATTPService.ComponentSaveAndUploadFileAsync());
  }

  Close() {
    this.dialogRef.close();
  }

}
