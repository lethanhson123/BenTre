import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { Species } from 'src/app/shared/Species.model';
import { SpeciesService } from 'src/app/shared/Species.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';
import { CompanyLakeMapComponent } from '../company-lake-map/company-lake-map.component';
import { CompanyLakeDetailComponent } from '../company-lake-detail/company-lake-detail.component';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { CoSoCompanyLakeDetailComponent } from '../co-so-company-lake-detail/co-so-company-lake-detail.component';
@Component({
  selector: 'app-co-so-company-lake',
  templateUrl: './co-so-company-lake.component.html',
  styleUrls: ['./co-so-company-lake.component.css']
})
export class CoSoCompanyLakeComponent implements OnInit {

  @ViewChild('CompanyLakeSort') CompanyLakeSort: MatSort;
  @ViewChild('CompanyLakePaginator') CompanyLakePaginator: MatPaginator;



  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,


    public NotificationService: NotificationService,

    public SpeciesService: SpeciesService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,

    public PlanThamDinhService: PlanThamDinhService,

    public ThanhVienService: ThanhVienService,

  ) {

  }

  ngOnInit(): void {
    this.SpeciesSearch();
    this.ThanhVienGetLogin();
  }

  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  SpeciesSearch() {
    this.SpeciesService.ComponentGetAllToListAsync();
  }

  CompanyLakeSearch() {
    this.CompanyLakeService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyLakeService.SearchByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator);
  }
  CompanyLakeDelete(element: CompanyLake) {
    this.CompanyLakeService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyLakeService.ComponentDeleteByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator));
  }
  CompanyLakeAdd(ID: number) {
    this.CompanyLakeService.IsShowLoading = true;
    this.CompanyLakeService.BaseParameter.ID = ID;
    this.CompanyLakeService.GetByIDAsync().subscribe(
      res => {
        this.CompanyLakeService.FormData = res as CompanyLake;
        this.CompanyLakeService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoCompanyLakeDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyLakeSearch();
        });
        this.CompanyLakeService.IsShowLoading = false;
      },
      err => {
        this.CompanyLakeService.IsShowLoading = false;
      }
    );
  }
  CompanyLakeMap() {
    this.CompanyLakeService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyLakeService.FormData.ID };
        const dialog = this.dialog.open(CompanyLakeMapComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyLakeService.IsShowLoading = false;
      },
      err => {
        this.CompanyLakeService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhSave() {
    this.CompanyLakeService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.CompanyInfoID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.PlanThamDinhService.FormData.StateAgencyID = environment.StateAgencyIDChiCucThuySan;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDCoSoNuoi;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;        
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyLakeService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyLakeService.IsShowLoading = false;
      }
    );   
  }
}