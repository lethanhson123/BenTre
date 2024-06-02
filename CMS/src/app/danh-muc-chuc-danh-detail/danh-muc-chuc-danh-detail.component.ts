import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';


import { ThanhVienPhanQuyenChucNang } from 'src/app/shared/ThanhVienPhanQuyenChucNang.model';
import { ThanhVienPhanQuyenChucNangService } from 'src/app/shared/ThanhVienPhanQuyenChucNang.service';

@Component({
  selector: 'app-danh-muc-chuc-danh-detail',
  templateUrl: './danh-muc-chuc-danh-detail.component.html',
  styleUrls: ['./danh-muc-chuc-danh-detail.component.css']
})
export class DanhMucChucDanhDetailComponent implements OnInit {

  @ViewChild('ThanhVienPhanQuyenChucNangSort') ThanhVienPhanQuyenChucNangSort: MatSort;
  @ViewChild('ThanhVienPhanQuyenChucNangPaginator') ThanhVienPhanQuyenChucNangPaginator: MatPaginator;

  ActiveAllThanhVienPhanQuyenChucNang: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<DanhMucChucDanhDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,

    public ThanhVienPhanQuyenChucNangService: ThanhVienPhanQuyenChucNangService,
  ) {
  }

  ngOnInit(): void {    
    this.ThanhVienPhanQuyenChucNangSearch();
  }

  ThanhVienPhanQuyenChucNangSearch() {
    if (this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.length > 0) {
      this.ThanhVienPhanQuyenChucNangService.DataSource.filter = this.ThanhVienPhanQuyenChucNangService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.ThanhVienPhanQuyenChucNangGetToList();
    }
  }

  ThanhVienPhanQuyenChucNangGetToList() {
    this.DanhMucChucDanhService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.DanhMucChucDanhID = this.DanhMucChucDanhService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.GetSQLByDanhMucChucDanhIDToListAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangService.List = (res as ThanhVienPhanQuyenChucNang[]);
        this.ThanhVienPhanQuyenChucNangService.DataSource = new MatTableDataSource(this.ThanhVienPhanQuyenChucNangService.List);
        this.ThanhVienPhanQuyenChucNangService.DataSource.sort = this.ThanhVienPhanQuyenChucNangSort;
        this.ThanhVienPhanQuyenChucNangService.DataSource.paginator = this.ThanhVienPhanQuyenChucNangPaginator;
        this.DanhMucChucDanhService.IsShowLoading = false;
      },
      err => {
        this.DanhMucChucDanhService.IsShowLoading = false;
      }
    );
  }

  ThanhVienPhanQuyenChucNangActiveChange(element: ThanhVienPhanQuyenChucNang) {
    this.DanhMucChucDanhService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.FormData = element;
    this.ThanhVienPhanQuyenChucNangService.FormData.DanhMucChucDanhID = this.DanhMucChucDanhService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucChucDanhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucChucDanhService.IsShowLoading = false;
      }
    );
  }
  ThanhVienPhanQuyenChucNangActiveAllChange() {
    this.DanhMucChucDanhService.IsShowLoading = true;
    for (let i = 0; i < this.ThanhVienPhanQuyenChucNangService.List.length; i++) {
      this.ThanhVienPhanQuyenChucNangService.FormData = this.ThanhVienPhanQuyenChucNangService.List[i];
      this.ThanhVienPhanQuyenChucNangService.FormData.DanhMucChucDanhID = this.DanhMucChucDanhService.FormData.ID;
      this.ThanhVienPhanQuyenChucNangService.FormData.Active = this.ActiveAllThanhVienPhanQuyenChucNang;
    }
    this.ThanhVienPhanQuyenChucNangService.SaveListAsync(this.ThanhVienPhanQuyenChucNangService.List).subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.DanhMucChucDanhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.DanhMucChucDanhService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }

}
