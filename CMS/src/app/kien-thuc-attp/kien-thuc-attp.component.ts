import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { KienThucATTP } from 'src/app/shared/KienThucATTP.model';
import { KienThucATTPService } from 'src/app/shared/KienThucATTP.service';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';
import { KienThucATTPDetailComponent } from '../kien-thuc-attpdetail/kien-thuc-attpdetail.component';


@Component({
  selector: 'app-kien-thuc-attp',
  templateUrl: './kien-thuc-attp.component.html',
  styleUrls: ['./kien-thuc-attp.component.css']
})
export class KienThucATTPComponent implements OnInit {

  @ViewChild('KienThucATTPSort') KienThucATTPSort: MatSort;
  @ViewChild('KienThucATTPPaginator') KienThucATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public KienThucATTPService: KienThucATTPService,
    public CauHoiNhomService: CauHoiNhomService,
  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }

  KienThucATTPSearch() {
    this.KienThucATTPService.IsShowLoading = true;
    this.KienThucATTPService.GetByParentIDToListAsync().subscribe(
        res => {
            this.KienThucATTPService.List = (res as any[]).sort((a, b) => (a.NgayGhiNhan < b.NgayGhiNhan ? 1 : -1));
            this.KienThucATTPService.ListFilter = this.KienThucATTPService.List;
            this.KienThucATTPService.DataSource = new MatTableDataSource(this.KienThucATTPService.List);
            this.KienThucATTPService.DataSource.sort = this.KienThucATTPSort;
            this.KienThucATTPService.DataSource.paginator = this.KienThucATTPPaginator;
            this.KienThucATTPService.IsShowLoading = false;
        },
        err => {
            this.KienThucATTPService.IsShowLoading = false;
        }
    );
  }
  
  KienThucATTPDelete(element: KienThucATTP) {
    this.KienThucATTPService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.KienThucATTPService.ComponentDeleteByParentIDNotEmpty(this.KienThucATTPSort, this.KienThucATTPPaginator));
  }

  KienThucATTPAdd(ID: number) {
    this.KienThucATTPService.BaseParameter.ID = ID;   
    this.KienThucATTPService.GetByIDAsync().subscribe(
      res => {
        this.KienThucATTPService.FormData = res as KienThucATTP;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(KienThucATTPDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.KienThucATTPSearch();
        });
      },
      err => {
      }
    );
  }
}
