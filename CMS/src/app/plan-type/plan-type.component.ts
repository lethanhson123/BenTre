import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { PlanType } from 'src/app/shared/PlanType.model';
import { PlanTypeService } from 'src/app/shared/PlanType.service';
@Component({
  selector: 'app-plan-type',
  templateUrl: './plan-type.component.html',
  styleUrls: ['./plan-type.component.css']
})
export class PlanTypeComponent implements OnInit {

  @ViewChild('PlanTypeSort') PlanTypeSort: MatSort;
  @ViewChild('PlanTypePaginator') PlanTypePaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public PlanTypeService: PlanTypeService,
  ) { }

  ngOnInit(): void {
  }

  PlanTypeSearch() {
    this.PlanTypeService.SearchAll(this.PlanTypeSort, this.PlanTypePaginator);
  }
  PlanTypeSave(element: PlanType) {
    this.PlanTypeService.FormData = element;
    this.NotificationService.warn(this.PlanTypeService.ComponentSaveAll(this.PlanTypeSort, this.PlanTypePaginator));
  }
  PlanTypeDelete(element: PlanType) {
    this.PlanTypeService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.PlanTypeService.ComponentDeleteAll(this.PlanTypeSort, this.PlanTypePaginator));
  }


}
