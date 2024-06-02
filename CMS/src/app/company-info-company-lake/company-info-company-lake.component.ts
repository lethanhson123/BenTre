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
import { CompanyLakeDetailComponent } from '../company-lake-detail/company-lake-detail.component';
import { CompanyLakeMapComponent } from '../company-lake-map/company-lake-map.component';

@Component({
  selector: 'app-company-info-company-lake',
  templateUrl: './company-info-company-lake.component.html',
  styleUrls: ['./company-info-company-lake.component.css']
})
export class CompanyInfoCompanyLakeComponent implements OnInit {

  @ViewChild('CompanyLakeSort') CompanyLakeSort: MatSort;
  @ViewChild('CompanyLakePaginator') CompanyLakePaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,

    public NotificationService: NotificationService,

    public SpeciesService: SpeciesService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,
  ) {
    this.CompanyInfoSearch();
    this.SpeciesSearch();
  }

  ngOnInit(): void {
  }

  SpeciesSearch() {
    this.SpeciesService.ComponentGetAllToListAsync();
  }


  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }


  CompanyLakeSearch() {
    this.CompanyLakeService.SearchByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator);
  }
  CompanyLakeDelete(element: CompanyLake) {
    this.CompanyLakeService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyLakeService.ComponentDeleteByParentIDNotEmpty(this.CompanyLakeSort, this.CompanyLakePaginator));
  }

  CompanyLakeAdd(ID: number) {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyLakeService.BaseParameter.ID = ID;
    this.CompanyLakeService.GetByIDAsync().subscribe(
      res => {
        this.CompanyLakeService.FormData = res as CompanyLake;        
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyLakeDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyLakeSearch();
        });
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
  CompanyLakeMap() {
    this.CompanyInfoService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.CompanyLakeService.BaseParameter.ParentID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyInfoService.FormData.ID };
        const dialog = this.dialog.open(CompanyLakeMapComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoService.IsShowLoading = false;
      }
    );
  }
}
