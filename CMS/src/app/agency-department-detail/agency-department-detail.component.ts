import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { AgencyDepartment } from 'src/app/shared/AgencyDepartment.model';
import { AgencyDepartmentService } from 'src/app/shared/AgencyDepartment.service';


import { ThanhVienPhanQuyenChucNang } from 'src/app/shared/ThanhVienPhanQuyenChucNang.model';
import { ThanhVienPhanQuyenChucNangService } from 'src/app/shared/ThanhVienPhanQuyenChucNang.service';

@Component({
  selector: 'app-agency-department-detail',
  templateUrl: './agency-department-detail.component.html',
  styleUrls: ['./agency-department-detail.component.css']
})
export class AgencyDepartmentDetailComponent implements OnInit {

  @ViewChild('ThanhVienPhanQuyenChucNangSort') ThanhVienPhanQuyenChucNangSort: MatSort;
  @ViewChild('ThanhVienPhanQuyenChucNangPaginator') ThanhVienPhanQuyenChucNangPaginator: MatPaginator;

  ActiveAllThanhVienPhanQuyenChucNang: boolean = false;
  constructor(
    public dialogRef: MatDialogRef<AgencyDepartmentDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public AgencyDepartmentService: AgencyDepartmentService,

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
    this.AgencyDepartmentService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.BaseParameter.AgencyDepartmentID = this.AgencyDepartmentService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.GetSQLByAgencyDepartmentIDToListAsync().subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangService.List = (res as ThanhVienPhanQuyenChucNang[]);
        this.ThanhVienPhanQuyenChucNangService.DataSource = new MatTableDataSource(this.ThanhVienPhanQuyenChucNangService.List);
        this.ThanhVienPhanQuyenChucNangService.DataSource.sort = this.ThanhVienPhanQuyenChucNangSort;
        this.ThanhVienPhanQuyenChucNangService.DataSource.paginator = this.ThanhVienPhanQuyenChucNangPaginator;
        this.AgencyDepartmentService.IsShowLoading = false;
      },
      err => {
        this.AgencyDepartmentService.IsShowLoading = false;
      }
    );
  }

  ThanhVienPhanQuyenChucNangActiveChange(element: ThanhVienPhanQuyenChucNang) {
    this.AgencyDepartmentService.IsShowLoading = true;
    this.ThanhVienPhanQuyenChucNangService.FormData = element;
    this.ThanhVienPhanQuyenChucNangService.FormData.AgencyDepartmentID = this.AgencyDepartmentService.FormData.ID;
    this.ThanhVienPhanQuyenChucNangService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.AgencyDepartmentService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.AgencyDepartmentService.IsShowLoading = false;
      }
    );
  }
  ThanhVienPhanQuyenChucNangActiveAllChange() {
    this.AgencyDepartmentService.IsShowLoading = true;
    for (let i = 0; i < this.ThanhVienPhanQuyenChucNangService.List.length; i++) {
      this.ThanhVienPhanQuyenChucNangService.FormData = this.ThanhVienPhanQuyenChucNangService.List[i];
      this.ThanhVienPhanQuyenChucNangService.FormData.AgencyDepartmentID = this.AgencyDepartmentService.FormData.ID;
      this.ThanhVienPhanQuyenChucNangService.FormData.Active = this.ActiveAllThanhVienPhanQuyenChucNang;
    }
    this.ThanhVienPhanQuyenChucNangService.SaveListAsync(this.ThanhVienPhanQuyenChucNangService.List).subscribe(
      res => {
        this.ThanhVienPhanQuyenChucNangSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.AgencyDepartmentService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.AgencyDepartmentService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }

}