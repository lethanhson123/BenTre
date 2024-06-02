import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';
import { PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent } from '../plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach/plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach.component';

@Component({
  selector: 'app-report0002',
  templateUrl: './report0002.component.html',
  styleUrls: ['./report0002.component.css']
})
export class Report0002Component implements OnInit {

  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DownloadService: DownloadService,

    public PlanThamDinhService: PlanThamDinhService,

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
  Report0002Search() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.BaseParameter.ParentID = environment.PlanTypeIDAnToanThucPhamSauThuHoach;
    this.ReportService.BaseParameter.Active = true;
    this.ReportService.Report0002ToListAsync().subscribe(
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
  PlanThamDinhAdd(ID: number) {
    this.ReportService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;        
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(PlanThamDinhDetailAnToanThucPhamSauThuHoachComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
}