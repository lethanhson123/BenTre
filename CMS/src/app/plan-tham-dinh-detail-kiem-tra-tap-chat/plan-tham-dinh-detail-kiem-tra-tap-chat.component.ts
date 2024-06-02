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
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';
import { PlanThamDinhDistrictData } from 'src/app/shared/PlanThamDinhDistrictData.model';
import { PlanThamDinhDistrictDataService } from 'src/app/shared/PlanThamDinhDistrictData.service';
import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-detail-kiem-tra-tap-chat',
  templateUrl: './plan-tham-dinh-detail-kiem-tra-tap-chat.component.html',
  styleUrls: ['./plan-tham-dinh-detail-kiem-tra-tap-chat.component.css']
})
export class PlanThamDinhDetailKiemTraTapChatComponent implements OnInit {

  @ViewChild('PlanThamDinhCompaniesSort') PlanThamDinhCompaniesSort: MatSort;
  @ViewChild('PlanThamDinhCompaniesPaginator') PlanThamDinhCompaniesPaginator: MatPaginator;

  @ViewChild('PlanThamDinhThanhVienSort') PlanThamDinhThanhVienSort: MatSort;
  @ViewChild('PlanThamDinhThanhVienPaginator') PlanThamDinhThanhVienPaginator: MatPaginator;

  @ViewChild('PlanThamDinhDistrictDataSort') PlanThamDinhDistrictDataSort: MatSort;
  @ViewChild('PlanThamDinhDistrictDataPaginator') PlanThamDinhDistrictDataPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;



  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDetailKiemTraTapChatComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucChucDanhService: DanhMucChucDanhService,
    public DistrictDataService: DistrictDataService,


    public ThanhVienService: ThanhVienService,
    public CompanyInfoService: CompanyInfoService,

    public PlanThamDinhDistrictDataService: PlanThamDinhDistrictDataService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhCompaniesService: PlanThamDinhCompaniesService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,

  ) {
    this.NotificationService.IsSave = false;
  }

  ngOnInit(): void {
    this.DistrictDataSearch();
    this.CompanyInfoSearch();
    this.ThanhVienSearch();
    this.DanhMucChucDanhSearch();
    this.PlanThamDinhCompaniesSearch();
    this.PlanThamDinhThanhVienSearch();
    this.PlanThamDinhDistrictDataSearch();
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
  DatePlanThamDinhDistrictDataNgayGhiNhan(element: PlanThamDinhDistrictData, value) {
    element.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }

  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }
  DanhMucChucDanhSearch() {
    this.DanhMucChucDanhService.ComponentGetAllToListAsync();
  }

  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.StateAgencyID = environment.StateAgencyIDChiCucQLCLNongLamThuySan;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByStateAgencyID_ActiveToListAsync();
  }

  PlanThamDinhDistrictDataSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDistrictDataService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDistrictDataService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataService.List = (res as PlanThamDinhDistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhDistrictDataService.DataSource = new MatTableDataSource(this.PlanThamDinhDistrictDataService.List);
        this.PlanThamDinhDistrictDataService.DataSource.sort = this.PlanThamDinhDistrictDataSort;
        this.PlanThamDinhDistrictDataService.DataSource.paginator = this.PlanThamDinhDistrictDataPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDistrictDataSave(element: PlanThamDinhDistrictData) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhDistrictDataService.FormData = element;
    this.PlanThamDinhDistrictDataService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDistrictDataDelete(element: PlanThamDinhDistrictData) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhDistrictDataService.BaseParameter.ID = element.ID;
    this.PlanThamDinhDistrictDataService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhDistrictDataSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhCompaniesSearch() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.SearchString = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesService.List = (res as PlanThamDinhCompanies[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompaniesService.DataSource = new MatTableDataSource(this.PlanThamDinhCompaniesService.List);
        this.PlanThamDinhCompaniesService.DataSource.sort = this.PlanThamDinhCompaniesSort;
        this.PlanThamDinhCompaniesService.DataSource.paginator = this.PlanThamDinhCompaniesPaginator;
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesSave(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhService.FormData.ID;
    element.Code = this.PlanThamDinhService.FormData.Code;
    this.PlanThamDinhCompaniesService.FormData = element;
    this.PlanThamDinhCompaniesService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompaniesDelete(element: PlanThamDinhCompanies) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompaniesService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompaniesService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompaniesSearch();
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
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDKiemTraTapChat;
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

  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.ID = ID;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.FormData.ParentID = environment.DanhMucThanhVienIDKhachMoi;
        this.ThanhVienService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.ThanhVienService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ThanhVienSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.CompanyInfoService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyInfoSearch();
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
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
        this.PlanThamDinhCompanyDocumentService.ListFilter = [];
        for (let i = 0; i < this.PlanThamDinhCompanyDocumentService.List.length; i++) {
          let item = this.PlanThamDinhCompanyDocumentService.List[i];
          if (item.DocumentTemplateID > 0) {
            this.PlanThamDinhCompanyDocumentService.ListFilter.push(item);
          }
        }

        this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.ListFilter);
        this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh.sort = this.PlanThamDinhCompanyDocumentSort;
        this.PlanThamDinhCompanyDocumentService.DataSourcePlanThamDinh.paginator = this.PlanThamDinhCompanyDocumentPaginator;

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
  PlanThamDinhCompanyDocumentAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = ID;
    this.PlanThamDinhCompanyDocumentService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        this.PlanThamDinhCompanyDocumentService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.PlanThamDinhCompanyDocumentService.FormData.TypeName = this.PlanThamDinhService.FormData.Display;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
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
  PlanThamDinhCompanyDocumentAdd001(element: PlanThamDinhCompanies, DocumentTemplateID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ParentID = element.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByParentID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        this.PlanThamDinhCompanyDocumentService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        this.PlanThamDinhCompanyDocumentService.FormData.TypeName = this.PlanThamDinhService.FormData.Display;        
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: element.ID };
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