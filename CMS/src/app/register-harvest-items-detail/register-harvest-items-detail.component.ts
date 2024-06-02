import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { RegisterHarvestItems } from 'src/app/shared/RegisterHarvestItems.model';
import { RegisterHarvestItemsService } from 'src/app/shared/RegisterHarvestItems.service';

@Component({
  selector: 'app-register-harvest-items-detail',
  templateUrl: './register-harvest-items-detail.component.html',
  styleUrls: ['./register-harvest-items-detail.component.css']
})
export class RegisterHarvestItemsDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterHarvestItemsDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public RegisterHarvestItemsService: RegisterHarvestItemsService,

  ) { }

  ngOnInit(): void {

  }
  DateNgayGhiNhan(value) {
    this.RegisterHarvestItemsService.FormData.NgayGhiNhan = new Date(value);
  }
  RegisterHarvestItemsSave() {
    this.RegisterHarvestItemsService.IsShowLoading = true;
    this.RegisterHarvestItemsService.SaveAndUploadFiles001Async().subscribe(
      res => {
        this.RegisterHarvestItemsService.FormData = res as RegisterHarvestItems;
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestItemsService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestItemsService.IsShowLoading = false;
      }
    );
  }
  ChangeFileName(files: FileList) {
    if (files) {
      this.RegisterHarvestItemsService.FileToUpload = files;
    }
  }
  ChangeFileName001(files: FileList) {
    if (files) {
      this.RegisterHarvestItemsService.FileToUpload001 = files;
    }
  }
  OpenWindowByURL(){
    this.NotificationService.OpenWindowByURL(this.RegisterHarvestItemsService.FormData.FileName);
  }
  OpenWindowByURL001(){
    this.NotificationService.OpenWindowByURL(this.RegisterHarvestItemsService.FormData.FileName001);
  }
  Close() {
    this.dialogRef.close();
  }

}

