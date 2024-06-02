import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ThanhVienThietBi } from 'src/app/shared/ThanhVienThietBi.model';
import { ThanhVienThietBiService } from 'src/app/shared/ThanhVienThietBi.service';

import { ThanhVienLichSuThongBao } from 'src/app/shared/ThanhVienLichSuThongBao.model';
import { ThanhVienLichSuThongBaoService } from 'src/app/shared/ThanhVienLichSuThongBao.service';

import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';
import { ThanhVienLichSuThongBaoViewComponent } from '../thanh-vien-lich-su-thong-bao-view/thanh-vien-lich-su-thong-bao-view.component';

@Component({
  selector: 'app-push-notification',
  templateUrl: './push-notification.component.html',
  styleUrls: ['./push-notification.component.css']
})
export class PushNotificationComponent implements OnInit {
  @ViewChild('ReportSort') ReportSort: MatSort;
  @ViewChild('ReportPaginator') ReportPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ThanhVienThietBiService: ThanhVienThietBiService,
    public ThanhVienLichSuThongBaoService: ThanhVienLichSuThongBaoService,

    public ReportService: ReportService,

  ) { }

  ngOnInit(): void {
    this.ReportSearch();
  }

  PushNotification(){
    this.ReportService.IsShowLoading = true;
    this.ThanhVienThietBiService.PushNotification().subscribe(
        res => {
            this.ReportService.IsShowLoading = false;
            this.NotificationService.warn(environment.SaveSuccess + " Đã gửi thông báo đến "+ res + " thiết bị");
            this.ThanhVienThietBiService.BaseParameter.Name ="";
            this.ThanhVienThietBiService.BaseParameter.Description ="";
            this.ThanhVienThietBiService.BaseParameter.FileName ="";
            this.ReportSearch();
        },
        err => {
            this.ReportService.IsShowLoading = false;
            this.NotificationService.warn(environment.SaveNotSuccess);
        }
    );
    return environment.SaveSuccess;
  }

  ReportSearch() {
    this.SearchAll(this.ReportSort, this.ReportPaginator);
  }
  SearchAll(sort: MatSort, paginator: MatPaginator) {
    if (this.ReportService.BaseParameter.SearchString.length > 0) {
        this.ReportService.BaseParameter.SearchString = this.ReportService.BaseParameter.SearchString.trim();
        this.ReportService.DataSource.filter = this.ReportService.BaseParameter.SearchString.toLowerCase();
    }
    else {
        this.ReportPushNotification0000001Async(sort, paginator);
    }
  }
  ReportPushNotification0000001Async(sort: MatSort, paginator: MatPaginator) {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportPushNotification0000001Async().subscribe(
        res => {
            this.ReportService.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
            this.ReportService.ListFilter = this.ReportService.List.filter(item => item.ID > 0);
            this.ReportService.DataSource = new MatTableDataSource(this.ReportService.List);
            this.ReportService.DataSource.sort = sort;
            this.ReportService.DataSource.paginator = paginator;
            this.ReportService.IsShowLoading = false;
        },
        err => {
            this.ReportService.IsShowLoading = false;
        }
    );
  }
  ThanhVienLichSuThongBaoView(typeName: string) {
    this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString = typeName;
    this.ThanhVienLichSuThongBaoService.BaseParameter.TypeName = typeName;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: 0 };
    const dialog = this.dialog.open(ThanhVienLichSuThongBaoViewComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
          
    });
  }
}
