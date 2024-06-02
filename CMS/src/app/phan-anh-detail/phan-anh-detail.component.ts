import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PhanAnh } from 'src/app/shared/PhanAnh.model';
import { PhanAnhService } from 'src/app/shared/PhanAnh.service';

@Component({
  selector: 'app-phan-anh-detail',
  templateUrl: './phan-anh-detail.component.html',
  styleUrls: ['./phan-anh-detail.component.css']
})
export class PhanAnhDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PhanAnhDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,

    public PhanAnhService: PhanAnhService,

  ) { }

  ngOnInit(): void {
    
  }

  DateNgayGhiNhan(value) {
    this.PhanAnhService.FormData.NgayGhiNhan = new Date(value);
  }


  PhanAnhSave() {
    this.NotificationService.warn(this.PhanAnhService.ComponentSaveForm());
  }

  Close() {
    this.dialogRef.close();
  }
}
