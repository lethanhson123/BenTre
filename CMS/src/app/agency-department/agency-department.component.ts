import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

import { AgencyDepartment } from 'src/app/shared/AgencyDepartment.model';
import { AgencyDepartmentService } from 'src/app/shared/AgencyDepartment.service';
import { AgencyDepartmentDetailComponent } from '../agency-department-detail/agency-department-detail.component';

@Component({
  selector: 'app-agency-department',
  templateUrl: './agency-department.component.html',
  styleUrls: ['./agency-department.component.css']
})
export class AgencyDepartmentComponent implements OnInit {


  @ViewChild('AgencyDepartmentSort') AgencyDepartmentSort: MatSort;
  @ViewChild('AgencyDepartmentPaginator') AgencyDepartmentPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public StateAgencyService: StateAgencyService,

    public AgencyDepartmentService: AgencyDepartmentService,
  ) { }

  ngOnInit(): void {
    this.StateAgencySearch();
  }

  StateAgencySearch() {
    this.StateAgencyService.ComponentGetAllToListAsync();
  }

  AgencyDepartmentSearch() {
    this.AgencyDepartmentService.SearchByParentID(this.AgencyDepartmentSort, this.AgencyDepartmentPaginator);
  }
  AgencyDepartmentSave(element: AgencyDepartment) {
    this.AgencyDepartmentService.FormData = element;
    this.NotificationService.warn(this.AgencyDepartmentService.ComponentSaveByParentID(this.AgencyDepartmentSort, this.AgencyDepartmentPaginator));
  }
  AgencyDepartmentDelete(element: AgencyDepartment) {
    this.AgencyDepartmentService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.AgencyDepartmentService.ComponentDeleteByParentID(this.AgencyDepartmentSort, this.AgencyDepartmentPaginator));
  }
  AgencyDepartmentAdd(ID: number) {
    this.AgencyDepartmentService.BaseParameter.ID = ID;
    this.AgencyDepartmentService.GetByIDAsync().subscribe(
      res => {
        this.AgencyDepartmentService.FormData = res as AgencyDepartment
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(AgencyDepartmentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }
}
