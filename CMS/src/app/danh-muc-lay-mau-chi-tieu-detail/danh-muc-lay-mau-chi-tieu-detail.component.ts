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

import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';




@Component({
  selector: 'app-danh-muc-lay-mau-chi-tieu-detail',
  templateUrl: './danh-muc-lay-mau-chi-tieu-detail.component.html',
  styleUrls: ['./danh-muc-lay-mau-chi-tieu-detail.component.css']
})
export class DanhMucLayMauChiTieuDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DanhMucLayMauChiTieuDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
  ) { }

  ngOnInit(): void {
    this.PlanTypeSearch();
  }

  PlanTypeSearch() {
    this.PlanTypeService.ComponentGetAllToListAsync();
  }

  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListRefreshAsync();
  }
  DanhMucLayMauChiTieuSave() {
    this.DanhMucLayMauChiTieuService.IsShowLoading = true;
    this.DanhMucLayMauChiTieuService.SaveAsync().subscribe(
      res => {
        this.DanhMucLayMauChiTieuService.FormData = res as DanhMucLayMauChiTieu;
        this.DanhMucLayMauChiTieuSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucLayMauChiTieuService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucLayMauChiTieuService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}
