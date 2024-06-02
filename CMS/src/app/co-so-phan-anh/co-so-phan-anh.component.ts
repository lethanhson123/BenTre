import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { PhanAnh } from 'src/app/shared/PhanAnh.model';
import { PhanAnhService } from 'src/app/shared/PhanAnh.service';
import { PhanAnhDetailComponent } from '../phan-anh-detail/phan-anh-detail.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-phan-anh',
  templateUrl: './co-so-phan-anh.component.html',
  styleUrls: ['./co-so-phan-anh.component.css']
})
export class CoSoPhanAnhComponent implements OnInit {

  @ViewChild('PhanAnhSort') PhanAnhSort: MatSort;
  @ViewChild('PhanAnhPaginator') PhanAnhPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public PhanAnhService: PhanAnhService,

    public ThanhVienService: ThanhVienService,
  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }

  PhanAnhSearch() {
    this.PhanAnhService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.PhanAnhService.SearchByParentID(this.PhanAnhSort, this.PhanAnhPaginator);
  }
  PhanAnhSave(element: PhanAnh) {
    element.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.PhanAnhService.FormData = element;
    this.NotificationService.warn(this.PhanAnhService.ComponentSaveByParentID(this.PhanAnhSort, this.PhanAnhPaginator));
  }
  PhanAnhDelete(element: PhanAnh) {
    this.PhanAnhService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.PhanAnhService.ComponentDeleteByParentID(this.PhanAnhSort, this.PhanAnhPaginator));
  }


}
