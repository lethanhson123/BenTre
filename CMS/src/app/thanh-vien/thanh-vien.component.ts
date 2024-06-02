import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';

@Component({
  selector: 'app-thanh-vien',
  templateUrl: './thanh-vien.component.html',
  styleUrls: ['./thanh-vien.component.css']
})
export class ThanhVienComponent implements OnInit {

  @ViewChild('ThanhVienSort') ThanhVienSort: MatSort;
  @ViewChild('ThanhVienPaginator') ThanhVienPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public DanhMucThanhVienService: DanhMucThanhVienService,
  ) { }

  ngOnInit(): void {
    this.DanhMucThanhVienSearch();
  }
  DanhMucThanhVienSearch() {
    this.DanhMucThanhVienService.ComponentGetAllToListAsync();
  }
  ThanhVienSearch() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienService.GetByParentIDOrSearchStringToListAsync().subscribe(
      res => {
        this.ThanhVienService.List = (res as ThanhVien[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.ThanhVienService.DataSource = new MatTableDataSource(this.ThanhVienService.List);
        this.ThanhVienService.DataSource.sort = this.ThanhVienSort;
        this.ThanhVienService.DataSource.paginator = this.ThanhVienPaginator;
        this.ThanhVienService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienService.IsShowLoading = false;
      }
    );
  }
  ThanhVienSave(element: ThanhVien) {
    element.ParentID = this.ThanhVienService.BaseParameter.ParentID;
    this.ThanhVienService.FormData = element;
    this.NotificationService.warn(this.ThanhVienService.ComponentSaveAll(this.ThanhVienSort, this.ThanhVienPaginator));
  }
  ThanhVienDelete(element: ThanhVien) {
    this.ThanhVienService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ThanhVienService.ComponentDeleteAll(this.ThanhVienSort, this.ThanhVienPaginator));
  }
  ThanhVienAdd(ID: number) {
    this.ThanhVienService.BaseParameter.ID = ID;
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.width = environment.DialogConfigWidth;
    dialogConfig.data = { ID: ID };
    const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
    dialog.afterClosed().subscribe(() => {
      this.ThanhVienSearch();
    });
    // this.ThanhVienService.GetByIDAsync().subscribe(
    //   res => {
    //     this.ThanhVienService.FormData = res as ThanhVien;
    //     const dialogConfig = new MatDialogConfig();
    //     dialogConfig.disableClose = true;
    //     dialogConfig.autoFocus = true;
    //     dialogConfig.width = environment.DialogConfigWidth;
    //     dialogConfig.data = { ID: ID };
    //     const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
    //     dialog.afterClosed().subscribe(() => {
    //       this.ThanhVienSearch();
    //     });
    //   },
    //   err => {
    //   }
    // );
  }
}
