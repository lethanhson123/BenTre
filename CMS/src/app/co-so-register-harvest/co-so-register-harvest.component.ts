import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { RegisterHarvest } from 'src/app/shared/RegisterHarvest.model';
import { RegisterHarvestService } from 'src/app/shared/RegisterHarvest.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';
import { RegisterHarvestDetailComponent } from '../register-harvest-detail/register-harvest-detail.component';
import { RegisterHarvestDetailByIDComponent } from '../register-harvest-detail-by-id/register-harvest-detail-by-id.component';
//import { CoSoRegisterHarvestDetailComponent } from '../co-so-RegisterHarvest-detail/co-so-RegisterHarvest-detail.component';
//import { CoSoRegisterHarvestViewComponent } from '../co-so-RegisterHarvest-view/co-so-RegisterHarvest-view.component';

@Component({
  selector: 'app-co-so-register-harvest',
  templateUrl: './co-so-register-harvest.component.html',
  styleUrls: ['./co-so-register-harvest.component.css']
})
export class CoSoRegisterHarvestComponent implements OnInit {
  @ViewChild('RegisterHarvestSort') RegisterHarvestSort: MatSort;
  @ViewChild('RegisterHarvestPaginator') RegisterHarvestPaginator: MatPaginator;



  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public RegisterHarvestService: RegisterHarvestService,

    public ThanhVienService: ThanhVienService,

  ) {}


  ngOnInit(): void {
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  RegisterHarvestSearch() {    
    this.RegisterHarvestService.IsShowLoading = true;    
    this.RegisterHarvestService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.RegisterHarvestService.BaseParameter.Active = true;    
    this.RegisterHarvestService.GetByParentIDAndActiveToListAsync().subscribe(
      res => {       

        this.RegisterHarvestService.List = (res as RegisterHarvest[]).sort((a, b) => (a.SortOrder < b.SortOrder ? 1 : -1));
        this.RegisterHarvestService.DataSource = new MatTableDataSource(this.RegisterHarvestService.List);
        this.RegisterHarvestService.DataSource.sort = this.RegisterHarvestSort;
        this.RegisterHarvestService.DataSource.paginator = this.RegisterHarvestPaginator;        
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {        
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }
  RegisterHarvestDelete(element: RegisterHarvest) {
    this.RegisterHarvestService.IsShowLoading = true;
    element.Active = false;
    this.RegisterHarvestService.FormData = element;
    this.RegisterHarvestService.FormData.ParentID = this.RegisterHarvestService.FormData.ID;
    this.RegisterHarvestService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.RegisterHarvestSearch();
        this.RegisterHarvestService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.RegisterHarvestService.IsShowLoading = false;
      }
    );
  }

  RegisterHarvestAdd(ID: number) {
    this.RegisterHarvestService.BaseParameter.ID = ID;
    this.RegisterHarvestService.GetByIDAsync().subscribe(
      res => {
        this.RegisterHarvestService.FormData = res as RegisterHarvest;
        this.RegisterHarvestService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
        this.RegisterHarvestService.FormData.DanhMucLayMauID = 57;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(RegisterHarvestDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.RegisterHarvestSearch();
        });
      },
      err => {
      }
    );
  }
}
