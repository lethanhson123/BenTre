import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucChucDanh } from 'src/app/shared/DanhMucChucDanh.model';
import { DanhMucChucDanhService } from 'src/app/shared/DanhMucChucDanh.service';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { DanhMucThoiGianLayMau } from 'src/app/shared/DanhMucThoiGianLayMau.model';
import { DanhMucThoiGianLayMauService } from 'src/app/shared/DanhMucThoiGianLayMau.service';
import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';
import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhCompanies } from 'src/app/shared/PlanThamDinhCompanies.model';
import { PlanThamDinhCompaniesService } from 'src/app/shared/PlanThamDinhCompanies.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { PlanThamDinhDistrictDataService } from 'src/app/shared/PlanThamDinhDistrictData.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';


import { DanhMucLayMauChiTieuDetailComponent } from '../danh-muc-lay-mau-chi-tieu-detail/danh-muc-lay-mau-chi-tieu-detail.component';
import { DanhMucLayMauDetailComponent } from '../danh-muc-lay-mau-detail/danh-muc-lay-mau-detail.component';
import { PlanThamDinhDanhMucLayMauDetailGiamSatDuLuongComponent } from '../plan-tham-dinh-danh-muc-lay-mau-detail-giam-sat-du-luong/plan-tham-dinh-danh-muc-lay-mau-detail-giam-sat-du-luong.component';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';
import { PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent } from '../plan-tham-dinh-danh-muc-lay-mau-detail-nhuyen-the-hai-manh-vo/plan-tham-dinh-danh-muc-lay-mau-detail-nhuyen-the-hai-manh-vo.component';


@Component({
  selector: 'app-plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001',
  templateUrl: './plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component.html',
  styleUrls: ['./plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component.css']
})
export class PlanThamDinhDetailNhuyenTheHaiManhVo001Component implements OnInit {

  @ViewChild('PlanThamDinhDanhMucLayMauSort') PlanThamDinhDanhMucLayMauSort: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator') PlanThamDinhDanhMucLayMauPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDanhMucLayMauSort001') PlanThamDinhDanhMucLayMauSort001: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator001') PlanThamDinhDanhMucLayMauPaginator001: MatPaginator;

  @ViewChild('PlanThamDinhDanhMucLayMauSort002') PlanThamDinhDanhMucLayMauSort002: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauPaginator002') PlanThamDinhDanhMucLayMauPaginator002: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailNhuyenTheHaiManhVo001Component>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
    public DanhMucThoiGianLayMauService: DanhMucThoiGianLayMauService,
    public DistrictDataService: DistrictDataService,
    public DanhMucLayMauService: DanhMucLayMauService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,

    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhDistrictDataService: PlanThamDinhDistrictDataService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,

  ) { }

  ngOnInit(): void {
    this.DanhMucThoiGianLayMauSearch();
    this.DanhMucLayMauSearch();
    this.DanhMucLayMauChiTieuSearch();
    this.DistrictDataSearch();
    this.ThanhVienSearch();

    this.PlanThamDinhDanhMucLayMauSearch();
    this.PlanThamDinhCompanyDocumentSearch();
  }

  DateNgayBatDau(value) {
    this.PlanThamDinhService.FormData.NgayBatDau = new Date(value);
  }
  DateNgayKetThuc(value) {
    this.PlanThamDinhService.FormData.NgayKetThuc = new Date(value);
  }
  DateNgayGuiMau(value) {
    this.PlanThamDinhService.FormData.NgayGuiMau = new Date(value);
  }

  DatePlanThamDinhCompaniesNgayGhiNhan(element: PlanThamDinhCompanies, value) {
    element.NgayGhiNhan = new Date(value);
  }
  DanhMucThoiGianLayMauSearch() {
    this.DanhMucThoiGianLayMauService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListRefreshAsync();
  }
  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListRefreshAsync();
  }
  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }
  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }
  DanhMucLayMauAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DanhMucLayMauService.BaseParameter.ID = ID;
    this.DanhMucLayMauService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauService.FormData = res as DanhMucLayMau;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }
  DanhMucLayMauChiTieuAdd(ID: number) {
    this.PlanThamDinhCompaniesService.IsShowLoading = true;
    this.DanhMucLayMauChiTieuService.BaseParameter.ID = ID;
    this.DanhMucLayMauChiTieuService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauChiTieuService.FormData = res as DanhMucLayMauChiTieu;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauChiTieuDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauChiTieuSearch();
        });
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhCompaniesService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhDanhMucLayMauSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDanhMucLayMauService.DataSource = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.List);
        this.PlanThamDinhDanhMucLayMauService.DataSource.sort = this.PlanThamDinhDanhMucLayMauSort;
        this.PlanThamDinhDanhMucLayMauService.DataSource.paginator = this.PlanThamDinhDanhMucLayMauPaginator;

        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
    this.PlanThamDinhDanhMucLayMauService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.ListFilter = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDanhMucLayMauService.ListDistrictData = [];
        this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMau = [];
        this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMauChiTieu = [];

        for (let i = 0; i < this.PlanThamDinhDanhMucLayMauService.ListFilter.length; i++) {
          let PlanThamDinhDanhMucLayMau = this.PlanThamDinhDanhMucLayMauService.ListFilter[i];
          if (PlanThamDinhDanhMucLayMau.ID > 0) {
            let ListDistrictData = this.PlanThamDinhDanhMucLayMauService.ListDistrictData.filter(item => item.DistrictDataID == PlanThamDinhDanhMucLayMau.DistrictDataID);
            if (ListDistrictData.length == 0) {
              this.PlanThamDinhDanhMucLayMauService.ListDistrictData.push(PlanThamDinhDanhMucLayMau);
            }
            let ListDanhMucLayMau = this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMau.filter(item => item.DanhMucLayMauID == PlanThamDinhDanhMucLayMau.DanhMucLayMauID);
            if (ListDanhMucLayMau.length == 0) {
              this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMau.push(PlanThamDinhDanhMucLayMau);
            }
            let ListDanhMucLayMauChiTieu = this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMauChiTieu.filter(item => item.DanhMucLayMauChiTieuID == PlanThamDinhDanhMucLayMau.DanhMucLayMauChiTieuID);
            if (ListDanhMucLayMauChiTieu.length == 0) {
              this.PlanThamDinhDanhMucLayMauService.ListDanhMucLayMauChiTieu.push(PlanThamDinhDanhMucLayMau);
            }
          }
        }
        this.PlanThamDinhDanhMucLayMauService.DataSource001 = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.ListDistrictData);
        this.PlanThamDinhDanhMucLayMauService.DataSource001.sort = this.PlanThamDinhDanhMucLayMauSort001;
        this.PlanThamDinhDanhMucLayMauService.DataSource001.paginator = this.PlanThamDinhDanhMucLayMauPaginator001;

        this.PlanThamDinhDanhMucLayMauService.DataSource002 = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauService.ListFilter);
        this.PlanThamDinhDanhMucLayMauService.DataSource002.sort = this.PlanThamDinhDanhMucLayMauSort002;
        this.PlanThamDinhDanhMucLayMauService.DataSource002.paginator = this.PlanThamDinhDanhMucLayMauPaginator002;

        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauSave(element: PlanThamDinhDanhMucLayMau) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauService.FormData = element;
    this.PlanThamDinhDanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauDelete(element: PlanThamDinhDanhMucLayMau) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ID = element.ID;
    this.PlanThamDinhDanhMucLayMauService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ID = ID;
    this.PlanThamDinhDanhMucLayMauService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.FormData = res as PlanThamDinhDanhMucLayMau;
        this.PlanThamDinhDanhMucLayMauService.FormData.ParentID = this.PlanThamDinhService.FormData.ID;
        this.PlanThamDinhDanhMucLayMauService.FormData.Code = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhDanhMucLayMauDetailNhuyenTheHaiManhVoComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.PlanThamDinhDanhMucLayMauSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDNhuyenTheHaiManhVo;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
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
  PlanThamDinhCompanyDocumentSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.GetBySearchStringAndEmptyToListAsync().subscribe(
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
  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: DocumentTemplateID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentAdd001(element: PlanThamDinhDanhMucLayMau, DocumentTemplateID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ParentID = element.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByParentID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: DocumentTemplateID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  ChangeFileName(files: FileList) {
    if (files) {
      this.PlanThamDinhCompanyDocumentService.FileToUpload = files;
    }
  }
  Close() {
    this.dialogRef.close();
  }

}
