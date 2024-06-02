import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

import { RegisterHarvest } from 'src/app/shared/RegisterHarvest.model';
import { RegisterHarvestService } from 'src/app/shared/RegisterHarvest.service';

import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';
import { RegisterHarvestDetailByIDComponent } from '../register-harvest-detail-by-id/register-harvest-detail-by-id.component';

@Component({
  selector: 'app-report0007',
  templateUrl: './report0007.component.html',
  styleUrls: ['./report0007.component.css']
})
export class Report0007Component implements OnInit {

  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public RegisterHarvestService: RegisterHarvestService,

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
  Report0007Search() {
    this.ReportService.IsShowLoading = true;    
    this.ReportService.BaseParameter.Active = true;
    this.ReportService.Report0007ToListAsync().subscribe(
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
  RegisterHarvestAdd(ID: number) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.RegisterHarvestService.BaseParameter.ID = ID;
    this.RegisterHarvestService.GetByIDAsync().subscribe(
      res => {
        this.RegisterHarvestService.FormData = res as RegisterHarvest;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(RegisterHarvestDetailByIDComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
}
