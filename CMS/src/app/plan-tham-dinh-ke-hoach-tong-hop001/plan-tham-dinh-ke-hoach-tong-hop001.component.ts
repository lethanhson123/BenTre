import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MailService } from 'src/app/shared/Mail.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { NamThang } from 'src/app/shared/NamThang.model';
import { DownloadService } from 'src/app/shared/Download.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';
import { PlanThamDinhThanhVien } from 'src/app/shared/PlanThamDinhThanhVien.model';
import { PlanThamDinhThanhVienService } from 'src/app/shared/PlanThamDinhThanhVien.service';
import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { PlanThamDinhDetailComponent } from '../plan-tham-dinh-detail/plan-tham-dinh-detail.component';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';
import { PlanThamDinhDetailThanhTraChuyenNganhComponent } from '../plan-tham-dinh-detail-thanh-tra-chuyen-nganh/plan-tham-dinh-detail-thanh-tra-chuyen-nganh.component';
import { PlanThamDinhDetailNhuyenTheHaiManhVo001Component } from '../plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001/plan-tham-dinh-detail-nhuyen-the-hai-manh-vo001.component';
import { PlanThamDinhDetailKiemTraTapChatComponent } from '../plan-tham-dinh-detail-kiem-tra-tap-chat/plan-tham-dinh-detail-kiem-tra-tap-chat.component';
import { PlanThamDinhDetailGiamSatDuLuong001Component } from '../plan-tham-dinh-detail-giam-sat-du-luong001/plan-tham-dinh-detail-giam-sat-du-luong001.component';
import { PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent } from '../plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham/plan-tham-dinh-detail-chuoi-cung-ung-an-toan-thuc-pham.component';
import { PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component } from '../plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach001/plan-tham-dinh-detail-an-toan-thuc-pham-sau-thu-hoach001.component';


@Component({
  selector: 'app-plan-tham-dinh-ke-hoach-tong-hop001',
  templateUrl: './plan-tham-dinh-ke-hoach-tong-hop001.component.html',
  styleUrls: ['./plan-tham-dinh-ke-hoach-tong-hop001.component.css']
})
export class PlanThamDinhKeHoachTongHop001Component implements OnInit {

  @ViewChild('PlanThamDinhSort') PlanThamDinhSort: MatSort;
  @ViewChild('PlanThamDinhPaginator') PlanThamDinhPaginator: MatPaginator;



  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,

    public StateAgencyService: StateAgencyService,
    public ThanhVienService: ThanhVienService,

    public PlanThamDinhService: PlanThamDinhService,
    public PlanThamDinhThanhVienService: PlanThamDinhThanhVienService,
    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,


  ) { }

  ngOnInit(): void {
    this.StateAgencySearch();
    this.ComponentGetListNam();
    this.ComponentGetListThang();
    this.PlanThamDinhSearch();
  }
  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }

  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }
  ComponentGetListThang() {
    this.DownloadService.ComponentGetListThang();
  }

  PlanThamDinhSearch() {
    if (this.PlanThamDinhService.BaseParameter.SearchString.length > 0) {
      this.PlanThamDinhService.BaseParameter.SearchString = this.PlanThamDinhService.BaseParameter.SearchString.trim();
      this.PlanThamDinhService.DataSource.filter = this.PlanThamDinhService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.PlanThamDinhService.IsShowLoading = true;      
      this.PlanThamDinhService.GetSQLKeHoachTongHopByStateAgencyID_Nam_ThangToListAsync().subscribe(
        res => {
          this.PlanThamDinhService.List = (res as PlanThamDinh[]).sort((a, b) => (a.NgayBatDau < b.NgayBatDau ? 1 : -1));
          if (this.PlanThamDinhService.List) {
            if (this.PlanThamDinhService.List.length > 0) {
              for (let i = 0; i < this.PlanThamDinhService.List.length; i++) {
                this.PlanThamDinhThanhVienSearch(i);
                this.PlanThamDinhDanhMucLayMauSearch(i);
              }
            }
          }
          this.PlanThamDinhService.DataSource = new MatTableDataSource(this.PlanThamDinhService.List);
          this.PlanThamDinhService.DataSource.sort = this.PlanThamDinhSort;
          this.PlanThamDinhService.DataSource.paginator = this.PlanThamDinhPaginator;
          this.PlanThamDinhService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhService.IsShowLoading = false;
        }
      );
    }
  }

  PlanThamDinhThanhVienSearch(i: number) {
    this.PlanThamDinhThanhVienService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhThanhVienService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhThanhVienService.List = (res as PlanThamDinhThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhThanhVien = this.PlanThamDinhThanhVienService.List;
      },
      err => {
      }
    );
  }
  PlanThamDinhDanhMucLayMauSearch(i: number) {
    this.PlanThamDinhDanhMucLayMauService.BaseParameter.ParentID = this.PlanThamDinhService.List[i].ID;
    this.PlanThamDinhDanhMucLayMauService.GetByParentIDToListAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.List = (res as PlanThamDinhDanhMucLayMau[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.PlanThamDinhService.List[i].ListPlanThamDinhDanhMucLayMau = this.PlanThamDinhDanhMucLayMauService.List;
      },
      err => {
      }
    );
  }



  ThanhVienAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhAdd(ID: number) {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.BaseParameter.ID = ID;
    this.PlanThamDinhService.GetByIDAsync().subscribe(
      res => {
        this.PlanThamDinhService.FormData = res as PlanThamDinh;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        switch (this.PlanThamDinhService.FormData.ParentID) {
          case 3:
            const dialog3 = this.dialog.open(PlanThamDinhDetailComponent, dialogConfig);
            dialog3.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 8:
            const dialog8 = this.dialog.open(PlanThamDinhDetailThanhTraChuyenNganhComponent, dialogConfig);
            dialog8.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 2:
            const dialog2 = this.dialog.open(PlanThamDinhDetailNhuyenTheHaiManhVo001Component, dialogConfig);
            dialog2.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 5:
            const dialog5 = this.dialog.open(PlanThamDinhDetailKiemTraTapChatComponent, dialogConfig);
            dialog5.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 1:
            const dialog1 = this.dialog.open(PlanThamDinhDetailGiamSatDuLuong001Component, dialogConfig);
            dialog1.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 7:
            const dialog7 = this.dialog.open(PlanThamDinhDetailChuoiCungUngAnToanThucPhamComponent, dialogConfig);
            dialog7.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
          case 4:
            const dialog4 = this.dialog.open(PlanThamDinhDetailAnToanThucPhamSauThuHoach001Component, dialogConfig);
            dialog4.afterClosed().subscribe(() => {
              this.PlanThamDinhSearch();
            });
            break;
        }

        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }
}
