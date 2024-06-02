import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';
import { DanhMucLayMauPhanLoai } from 'src/app/shared/DanhMucLayMauPhanLoai.model';
import { DanhMucLayMauPhanLoaiService } from 'src/app/shared/DanhMucLayMauPhanLoai.service';

import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';

@Component({
  selector: 'app-danh-muc-lay-mau-detail',
  templateUrl: './danh-muc-lay-mau-detail.component.html',
  styleUrls: ['./danh-muc-lay-mau-detail.component.css']
})
export class DanhMucLayMauDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DanhMucLayMauDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,  

    public PlanTypeService: PlanTypeService,
    public DanhMucLayMauPhanLoaiService: DanhMucLayMauPhanLoaiService,

    public DanhMucLayMauService: DanhMucLayMauService,    
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
    this.DanhMucLayMauPhanLoaiSearch();
  }

  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }  
  DanhMucLayMauPhanLoaiSearch() {
    this.DanhMucLayMauPhanLoaiService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListRefreshAsync();
  }
  
  DanhMucLayMauSave() {
    this.DanhMucLayMauService.IsShowLoading = true;
    this.DanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.DanhMucLayMauService.FormData = res as DanhMucLayMau; 
        this.DanhMucLayMauSearch();          
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucLayMauService.IsShowLoading = false;
      }
    );
  }    
  Close() {
    this.dialogRef.close();
  }

}