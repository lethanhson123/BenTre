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
  selector: 'app-report0016',
  templateUrl: './report0016.component.html',
  styleUrls: ['./report0016.component.css']
})
export class Report0016Component implements OnInit {

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
 
  
  Report0016Search() {
    this.ReportService.IsShowLoading = true;    
    this.ReportService.BaseParameter.PlanTypeID = environment.PlanTypeIDCoSoNuoi;
    this.ReportService.Report0016ToListAsync().subscribe(
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
  Report0016Download() {
    this.ReportService.IsShowLoading = true;
    this.DownloadService.BaseParameter.PlanTypeID = this.ReportService.BaseParameter.PlanTypeID;
    this.DownloadService.ExportReport0016ToExcelAsync().subscribe(
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