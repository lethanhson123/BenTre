import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { ThanhVienDetail001Component } from '../thanh-vien-detail001/thanh-vien-detail001.component';

@Component({
  selector: 'app-plan-tham-dinh-detail-nhuyen-the-hai-manh-vo',
  templateUrl: './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo.component.html',
  styleUrls: ['./plan-tham-dinh-detail-nhuyen-the-hai-manh-vo.component.css']
})
export class PlanThamDinhDetailNhuyenTheHaiManhVoComponent implements OnInit {



  @ViewChild('PlanThamDinhThanhVienSort') PlanThamDinhThanhVienSort: MatSort;
  @ViewChild('PlanThamDinhThanhVienPaginator') PlanThamDinhThanhVienPaginator: MatPaginator;



  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;


  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailNhuyenTheHaiManhVoComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,


    public DistrictDataService: DistrictDataService,

    public ThanhVienService: ThanhVienService,


    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,

  ) { }

  ngOnInit(): void {
    this.ThanhVienSearch();
    this.DistrictDataSearch();
    this.PlanThamDinhThanhVienSearch();
    this.PlanThamDinhCompanyDocumentSearch();

  }

  DateNgayBatDau(value) {
    this.PlanThamDinhService.FormData.NgayBatDau = new Date(value);
  }
  DateNgayKetThuc(value) {
    this.PlanThamDinhService.FormData.NgayKetThuc = new Date(value);
  }

  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }

  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }
  PlanThamDinhCompanyDocumentSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhIDAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.List = (res as PlanThamDinhCompanyDocument[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyDocumentService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.List);
        this.PlanThamDinhCompanyDocumentService.DataSource.sort = this.PlanThamDinhCompanyDocumentSort;
        this.PlanThamDinhCompanyDocumentService.DataSource.paginator = this.PlanThamDinhCompanyDocumentPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSave(element: PlanThamDinhCompanyDocument) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.FormData = element;
    this.PlanThamDinhCompanyDocumentService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentDelete(element: PlanThamDinhCompanyDocument) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompanyDocumentService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhThanhVienSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienService.List = (res as PlanThamDinhThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhThanhVienService.DataSource = new MatTableDataSource(this.PlanThamDinhThanhVienService.List);
        this.PlanThamDinhThanhVienService.DataSource.sort = this.PlanThamDinhThanhVienSort;
        this.PlanThamDinhThanhVienService.DataSource.paginator = this.PlanThamDinhThanhVienPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienSave(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhThanhVienService.FormData = element;
    this.PlanThamDinhThanhVienService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhThanhVienDelete(element: PlanThamDinhThanhVien) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhThanhVienService.BaseParameter.ID = element.ID;
    this.PlanThamDinhThanhVienService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDNhuyenTheHaiManhVo;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData=res as PlanThamDinh;
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }

}