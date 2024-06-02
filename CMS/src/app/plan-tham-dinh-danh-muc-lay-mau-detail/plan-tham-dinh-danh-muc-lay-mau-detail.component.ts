import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucLayMau } from 'src/app/shared/DanhMucLayMau.model';
import { DanhMucLayMauService } from 'src/app/shared/DanhMucLayMau.service';
import { DanhMucLayMauChiTieu } from 'src/app/shared/DanhMucLayMauChiTieu.model';
import { DanhMucLayMauChiTieuService } from 'src/app/shared/DanhMucLayMauChiTieu.service';
import { ProductUnit } from 'src/app/shared/ProductUnit.model';
import { ProductUnitService } from 'src/app/shared/ProductUnit.service';

import { PlanThamDinhDanhMucLayMau } from 'src/app/shared/PlanThamDinhDanhMucLayMau.model';
import { PlanThamDinhDanhMucLayMauService } from 'src/app/shared/PlanThamDinhDanhMucLayMau.service';
import { PlanThamDinhDanhMucLayMauChiTieu } from 'src/app/shared/PlanThamDinhDanhMucLayMauChiTieu.model';
import { PlanThamDinhDanhMucLayMauChiTieuService } from 'src/app/shared/PlanThamDinhDanhMucLayMauChiTieu.service';
import { DanhMucLayMauDetailComponent } from '../danh-muc-lay-mau-detail/danh-muc-lay-mau-detail.component';
import { DanhMucLayMauChiTieuDetailComponent } from '../danh-muc-lay-mau-chi-tieu-detail/danh-muc-lay-mau-chi-tieu-detail.component';

@Component({
  selector: 'app-plan-tham-dinh-danh-muc-lay-mau-detail',
  templateUrl: './plan-tham-dinh-danh-muc-lay-mau-detail.component.html',
  styleUrls: ['./plan-tham-dinh-danh-muc-lay-mau-detail.component.css']
})
export class PlanThamDinhDanhMucLayMauDetailComponent implements OnInit {

  @ViewChild('PlanThamDinhDanhMucLayMauChiTieuSort') PlanThamDinhDanhMucLayMauChiTieuSort: MatSort;
  @ViewChild('PlanThamDinhDanhMucLayMauChiTieuPaginator') PlanThamDinhDanhMucLayMauChiTieuPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<PlanThamDinhDanhMucLayMauDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public DanhMucLayMauService: DanhMucLayMauService,
    public DanhMucLayMauChiTieuService: DanhMucLayMauChiTieuService,
    public ProductUnitService: ProductUnitService,

    public PlanThamDinhDanhMucLayMauService: PlanThamDinhDanhMucLayMauService,
    public PlanThamDinhDanhMucLayMauChiTieuService: PlanThamDinhDanhMucLayMauChiTieuService,
  ) { }

  ngOnInit(): void {
    this.DanhMucLayMauSearch();
    this.DanhMucLayMauChiTieuSearch();
    this.ProductUnitSearch();
    this.PlanThamDinhDanhMucLayMauChiTieuSearch();
  }

  DanhMucLayMauSearch() {
    this.DanhMucLayMauService.ComponentGetAllToListAsync();
  }
  DanhMucLayMauChiTieuSearch() {
    this.DanhMucLayMauChiTieuService.ComponentGetAllToListAsync();
  }
  ProductUnitSearch() {
    this.ProductUnitService.ComponentGetAllToListAsync();
  }

  PlanThamDinhDanhMucLayMauSave() {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauService.FormData = res as PlanThamDinhDanhMucLayMau;
        this.PlanThamDinhDanhMucLayMauChiTieuSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauChiTieuSearch() {
    if (this.PlanThamDinhDanhMucLayMauService.FormData.ID > 0) {
      this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
      this.PlanThamDinhDanhMucLayMauChiTieuService.BaseParameter.ParentID = this.PlanThamDinhDanhMucLayMauService.FormData.ID;
      this.PlanThamDinhDanhMucLayMauChiTieuService.GetByParentIDAndEmptyToListAsync().subscribe(
        res => {
          this.PlanThamDinhDanhMucLayMauChiTieuService.List = (res as PlanThamDinhDanhMucLayMauChiTieu[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
          this.PlanThamDinhDanhMucLayMauChiTieuService.DataSource = new MatTableDataSource(this.PlanThamDinhDanhMucLayMauChiTieuService.List);
          this.PlanThamDinhDanhMucLayMauChiTieuService.DataSource.sort = this.PlanThamDinhDanhMucLayMauChiTieuSort;
          this.PlanThamDinhDanhMucLayMauChiTieuService.DataSource.paginator = this.PlanThamDinhDanhMucLayMauChiTieuPaginator;
          this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
        },
        err => {
          this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
        }
      );
    }
  }
  PlanThamDinhDanhMucLayMauChiTieuSave(element: PlanThamDinhDanhMucLayMauChiTieu) {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    element.ParentID = this.PlanThamDinhDanhMucLayMauService.FormData.ID;
    element.Code = this.PlanThamDinhDanhMucLayMauService.FormData.Code;
    this.PlanThamDinhDanhMucLayMauChiTieuService.FormData = element;
    this.PlanThamDinhDanhMucLayMauChiTieuService.SaveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauChiTieuService.FormData = res as PlanThamDinhDanhMucLayMauChiTieu;
        this.PlanThamDinhDanhMucLayMauChiTieuSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  PlanThamDinhDanhMucLayMauChiTieuDelete(element: PlanThamDinhDanhMucLayMauChiTieu) {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.PlanThamDinhDanhMucLayMauChiTieuService.BaseParameter.ID = element.ID;
    this.PlanThamDinhDanhMucLayMauChiTieuService.RemoveAsync().subscribe(
      res => {
        this.PlanThamDinhDanhMucLayMauChiTieuSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }

  DanhMucLayMauAdd(ID: number) {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.DanhMucLayMauService.BaseParameter.ID = ID;
    this.DanhMucLayMauService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauService.FormData = res as DanhMucLayMau;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauSearch();
        });
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  DanhMucLayMauChiTieuAdd(ID: number) {
    this.PlanThamDinhDanhMucLayMauService.IsShowLoading = true;
    this.DanhMucLayMauChiTieuService.BaseParameter.ID = ID;
    this.DanhMucLayMauChiTieuService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucLayMauChiTieuService.FormData = res as DanhMucLayMauChiTieu;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucLayMauChiTieuDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.DanhMucLayMauChiTieuSearch();
        });
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      },
      err => {
        this.PlanThamDinhDanhMucLayMauService.IsShowLoading = false;
      }
    );
  }
  Close() {
    this.dialogRef.close();
  }
}
