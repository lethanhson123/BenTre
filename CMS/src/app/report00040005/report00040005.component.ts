import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';

import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';


@Component({
  selector: 'app-report00040005',
  templateUrl: './report00040005.component.html',
  styleUrls: ['./report00040005.component.css']
})
export class Report00040005Component implements OnInit {

  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public DistrictDataService: DistrictDataService,

    public ReportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.DistrictDataSearch();
    this.ComponentGetListNam();
    this.ComponentGetListThang();
  }
  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }
  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }

  ComponentGetListThang() {
    this.DownloadService.ComponentGetListThang();
  }
  Report0004Search() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.BaseParameter.ParentID = environment.PlanTypeIDCamKet17;
    this.ReportService.BaseParameter.Active = true;
    this.ReportService.Report0004_0005ToListAsync().subscribe(
      res => {
        this.ReportService.List = (res as Report[]);
        this.ReportService.DataSource = new MatTableDataSource(this.ReportService.List);
        this.ReportService.DataSource.sort = this.ReportSort;
        this.ReportService.DataSource.paginator = this.ReportPaginator;
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
  Report0004Download() {
    this.ReportService.IsShowLoading = true;
    this.DownloadService.BaseParameter.ParentID = environment.PlanTypeIDCamKet17;
    this.DownloadService.BaseParameter.Active = true;
    this.DownloadService.BaseParameter.DistrictDataID = this.ReportService.BaseParameter.DistrictDataID;
    this.DownloadService.BaseParameter.Nam = this.ReportService.BaseParameter.Nam;
    this.DownloadService.BaseParameter.Thang = this.ReportService.BaseParameter.Thang;
    this.DownloadService.ExportCamKet17002PhuLucIIToExcelAsync().subscribe(
      res => {
        window.open(res.toString(), "_blank");
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
}
