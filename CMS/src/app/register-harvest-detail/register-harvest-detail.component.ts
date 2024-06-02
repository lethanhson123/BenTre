import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';
import { ProductUnit } from 'src/app/shared/ProductUnit.model';
import { ProductUnitService } from 'src/app/shared/ProductUnit.service';

import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';

import { Species } from 'src/app/shared/Species.model';
import { SpeciesService } from 'src/app/shared/Species.service';

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { RegisterHarvest } from 'src/app/shared/RegisterHarvest.model';
import { RegisterHarvestService } from 'src/app/shared/RegisterHarvest.service';

import { RegisterHarvestItems } from 'src/app/shared/RegisterHarvestItems.model';
import { RegisterHarvestItemsService } from 'src/app/shared/RegisterHarvestItems.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';

@Component({
  selector: 'app-register-harvest-detail',
  templateUrl: './register-harvest-detail.component.html',
  styleUrls: ['./register-harvest-detail.component.css']
})
export class RegisterHarvestDetailComponent implements OnInit {
  @ViewChild('RegisterHarvestItemsSort') RegisterHarvestItemsSort: MatSort;
  @ViewChild('RegisterHarvestItemsPaginator') RegisterHarvestItemsPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;


  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<RegisterHarvestDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,
    public ProductUnitService: ProductUnitService,

    public SpeciesService: SpeciesService,

    public DanhMucLayMauService: DanhMucLayMauService,

    public StateAgencyService: StateAgencyService,

    public RegisterHarvestService: RegisterHarvestService,

    public RegisterHarvestItemsService: RegisterHarvestItemsService,

    public ThanhVienService: ThanhVienService,

    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,

  ) { }

  ngOnInit(): void {
    this.ThanhVienGetLogin();
    this.DanhMucLayMauSearch();    
    this.PlanThamDinhCompanyDocumentSearch();
    this.RegisterHarvestItemsSearch();

  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  DateRegisterHarvestItemsNgayGhiNhan(element: RegisterHarvestItems, value) {
    element.NgayGhiNhan = new Date(value);
  }
  DateBatDau(value) {
    this.RegisterHarvestService.FormData.NgayBatDau = new Date(value);

  }
  DateKetThuc(value) {
    this.RegisterHarvestService.FormData.NgayKetThuc = new Date(value);
  }
  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListAsync();
  }
  SpeciesSearch() {
    this.SpeciesService.ComponentGetAllToListAsync();
  }
  SpeciesFilter(searchString: string) {
    this.SpeciesService.Filter(searchString);
  }

  RegisterHarvestItemsSearch() {
    this.RegisterHarvestService.IsShowLoading = true;
    this.RegisterHarvestItemsService.BaseParameter.SearchString = this.RegisterHarvestService.FormData.Code;
    this.RegisterHarvestItemsService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.RegisterHarvestItemsService.List = (res as RegisterHarvestItems[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.RegisterHarvestItemsService.DataSource = new MatTableDataSource(this.RegisterHarvestItemsService.List);
        this.RegisterHarvestItemsService.DataSource.sort = this.RegisterHarvestItemsSort;
        this.RegisterHarvestItemsService.DataSource.paginator = this.RegisterHarvestItemsPaginator;
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  RegisterHarvestItemsSave(element: RegisterHarvestItems) {
    this.RegisterHarvestService.IsShowLoading = true;
    element.ParentID = this.RegisterHarvestService.FormData.ID;
    element.Code = this.RegisterHarvestService.FormData.Code;
    element.ProductUnitID = environment.ProductUnitIDTan;
    this.RegisterHarvestItemsService.FormData = element;
    this.RegisterHarvestItemsService.SaveAsync().subscribe(
      res => {
        this.RegisterHarvestItemsService.FormData = (res as RegisterHarvestItems);
        this.RegisterHarvestItemsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  RegisterHarvestItemsDelete(element: RegisterHarvestItems) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.RegisterHarvestItemsService.BaseParameter.ID = element.ID;
    this.RegisterHarvestItemsService.RemoveAsync().subscribe(
      res => {
        this.RegisterHarvestItemsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }

  RegisterHarvestSave() {
    this.RegisterHarvestService.IsShowLoading = true;
    this.RegisterHarvestService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.RegisterHarvestService.FormData.PlanTypeID = environment.PlanTypeIDNhuyenTheHaiManhVo;
    this.RegisterHarvestService.SaveAsync().subscribe(
      res => {
        this.RegisterHarvestItemsSearch();
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSearch() {
    this.RegisterHarvestService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.RegisterHarvestID = this.RegisterHarvestService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.GetByRegisterHarvestIDAndEmptyToListAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.List = (res as PlanThamDinhCompanyDocument[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.PlanThamDinhCompanyDocumentService.DataSource = new MatTableDataSource(this.PlanThamDinhCompanyDocumentService.List);
        this.PlanThamDinhCompanyDocumentService.DataSource.sort = this.PlanThamDinhCompanyDocumentSort;
        this.PlanThamDinhCompanyDocumentService.DataSource.paginator = this.PlanThamDinhCompanyDocumentPaginator;
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentSave(element: PlanThamDinhCompanyDocument) {
    this.RegisterHarvestService.IsShowLoading = true;
    element.RegisterHarvestID = this.RegisterHarvestService.FormData.ID;
    element.Code = this.RegisterHarvestService.FormData.Code;
    this.PlanThamDinhCompanyDocumentService.FormData = element;
    this.PlanThamDinhCompanyDocumentService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentDelete(element: PlanThamDinhCompanyDocument) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.ID = element.ID;
    this.PlanThamDinhCompanyDocumentService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.RegisterHarvestID = this.RegisterHarvestService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByRegisterHarvestID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        this.PlanThamDinhCompanyDocumentService.FormData.Active = true;
        this.PlanThamDinhCompanyDocumentService.SaveAsync().subscribe(
          res => {
            this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
            this.NotificationService.OpenWindowByURL(this.PlanThamDinhCompanyDocumentService.FormData.FileName);
            this.RegisterHarvestService.IsShowLoading = false;
          },
          err => {
            this.RegisterHarvestService.IsShowLoading = false;
          }
        );
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }

}
