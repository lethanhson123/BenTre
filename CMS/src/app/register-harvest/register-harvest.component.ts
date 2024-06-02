import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { RegisterHarvest } from 'src/app/shared/RegisterHarvest.model';
import { RegisterHarvestService } from 'src/app/shared/RegisterHarvest.service';
import { CompanyInfoDetailComponent } from '../company-info-detail/company-info-detail.component';
import { RegisterHarvestDetailByIDComponent } from '../register-harvest-detail-by-id/register-harvest-detail-by-id.component';

@Component({
  selector: 'app-register-harvest',
  templateUrl: './register-harvest.component.html',
  styleUrls: ['./register-harvest.component.css']
})
export class RegisterHarvestComponent implements OnInit {

  @ViewChild('RegisterHarvestSort') RegisterHarvestSort: MatSort;
  @ViewChild('RegisterHarvestPaginator') RegisterHarvestPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,

    public RegisterHarvestService: RegisterHarvestService,
  ) { }

  ngOnInit(): void {
  }

  RegisterHarvestSearch() {
    this.RegisterHarvestService.SearchAllNotEmpty(this.RegisterHarvestSort, this.RegisterHarvestPaginator);
  }
  RegisterHarvestDelete(element: RegisterHarvest) {
    this.RegisterHarvestService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.RegisterHarvestService.ComponentDeleteAllNotEmpty(this.RegisterHarvestSort, this.RegisterHarvestPaginator));
  }
  RegisterHarvestAdd(ID: number) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.RegisterHarvestService.BaseParameter.ID = ID;
    this.RegisterHarvestService.GetByIDAsync().subscribe(
      res => {
        this.RegisterHarvestService.FormData = res as RegisterHarvest;
        this.RegisterHarvestService.FormData.DanhMucLayMauID = 57;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(RegisterHarvestDetailByIDComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.RegisterHarvestSearch();
        });
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoAdd(ID: number) {
    this.RegisterHarvestService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = ID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyInfoDetailComponent, dialogConfig);
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
