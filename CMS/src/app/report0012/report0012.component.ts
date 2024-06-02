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
  selector: 'app-report0012',
  templateUrl: './report0012.component.html',
  styleUrls: ['./report0012.component.css']
})
export class Report0012Component implements OnInit {

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
 
  
  Report0012Search() {
    this.ReportService.IsShowLoading = true;    
    this.ReportService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.ReportService.Report0012ToListAsync().subscribe(
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
  Report0012Download() {
    this.ReportService.IsShowLoading = true;
    this.DownloadService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;    
    this.DownloadService.ExportReport0012ToExcelAsync().subscribe(
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