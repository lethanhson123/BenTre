import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';

@Component({
  selector: 'app-thanh-vien001',
  templateUrl: './thanh-vien001.component.html',
  styleUrls: ['./thanh-vien001.component.css']
})
export class ThanhVien001Component implements OnInit {

  @ViewChild('ThanhVienSort') ThanhVienSort: MatSort;
  @ViewChild('ThanhVienPaginator') ThanhVienPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,
    public StateAgencyService: StateAgencyService,
  ) { }

  ngOnInit(): void {
    this.StateAgencySearch();
  }
  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }
  ThanhVienSearch() {
    this.ThanhVienService.IsShowLoading = true;
    this.ThanhVienService.GetByStateAgencyID_SearchStringToListAsync().subscribe(
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
  }
}