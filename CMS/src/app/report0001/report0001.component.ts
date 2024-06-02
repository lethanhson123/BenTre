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
  selector: 'app-report0001',
  templateUrl: './report0001.component.html',
  styleUrls: ['./report0001.component.css']
})
export class Report0001Component implements OnInit {

  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DownloadService: DownloadService,

    public ReportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.ComponentGetListNam();
    this.ComponentGetListThang();
  }

  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }

  ComponentGetListThang() {
    this.DownloadService.ComponentGetListThang();
  }
  Report0001Search() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.Report0001ToListAsync().subscribe(
      res => {
        this.ReportService.List = (res as Report[]).sort((a, b) => (a.Name > b.Name ? 1 : -1));
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
}
