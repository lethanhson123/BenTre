import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';


import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';

@Component({
  selector: 'app-report0013',
  templateUrl: './report0013.component.html',
  styleUrls: ['./report0013.component.css']
})
export class Report0013Component implements OnInit {

  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    

    public ReportService: ReportService,
  ) { }

  ngOnInit(): void {    
  }
 
  
  Report0013Search() {
    this.ReportService.IsShowLoading = true;    
    this.ReportService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.ReportService.Report0013ToListAsync().subscribe(
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
  Report0013Download() {
    this.ReportService.IsShowLoading = true;
    this.DownloadService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;    
    this.DownloadService.ExportReport0013ToExcelAsync().subscribe(
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