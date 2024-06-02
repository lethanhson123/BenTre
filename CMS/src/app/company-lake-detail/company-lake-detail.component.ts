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
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';
import { Species } from 'src/app/shared/Species.model';
import { SpeciesService } from 'src/app/shared/Species.service';

import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

@Component({
  selector: 'app-company-lake-detail',
  templateUrl: './company-lake-detail.component.html',
  styleUrls: ['./company-lake-detail.component.css']
})
export class CompanyLakeDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyLakeDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,
    public SpeciesService: SpeciesService,
    
    public CompanyLakeService: CompanyLakeService,
    public CompanyInfoService: CompanyInfoService,
    
  ) { }

  ngOnInit(): void {
    this.SpeciesSearch();    
    this.DistrictDataSearch();
    this.CompanyInfoSearch();
  }  
  CompanyInfoSearch() {    
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }
  DistrictDataSearch() {
    this.CompanyLakeService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));        
        this.WardDataSearch();
        this.CompanyLakeService.IsShowLoading = false;
      },
      err => {
        this.CompanyLakeService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.CompanyLakeService.IsShowLoading = true;    
    this.WardDataService.BaseParameter.ParentID = this.CompanyLakeService.FormData.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyLakeService.IsShowLoading = false;
      },
      err => {
        this.CompanyLakeService.IsShowLoading = false;
      }
    );
  }
  SpeciesSearch() {
    this.SpeciesService.ComponentGetAllToListAsync();
  }

  CompanyLakeSave() {
    this.NotificationService.warn(this.CompanyLakeService.ComponentSaveForm());
  }
  
  Close() {
    this.dialogRef.close();
  }
}
