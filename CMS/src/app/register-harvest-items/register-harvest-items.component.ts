import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { RegisterHarvestItems } from 'src/app/shared/RegisterHarvestItems.model';
import { RegisterHarvestItemsService } from 'src/app/shared/RegisterHarvestItems.service';
@Component({
  selector: 'app-register-harvest-items',
  templateUrl: './register-harvest-items.component.html',
  styleUrls: ['./register-harvest-items.component.css']
})
export class RegisterHarvestItemsComponent implements OnInit {

  @ViewChild('RegisterHarvestItemsSort') RegisterHarvestItemsSort: MatSort;
  @ViewChild('RegisterHarvestItemsPaginator') RegisterHarvestItemsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public RegisterHarvestItemsService: RegisterHarvestItemsService,
  ) { }

  ngOnInit(): void {
  }

  RegisterHarvestItemsSearch() {
    this.RegisterHarvestItemsService.SearchAll(this.RegisterHarvestItemsSort, this.RegisterHarvestItemsPaginator);
  }
  RegisterHarvestItemsSave(element: RegisterHarvestItems) {
    this.RegisterHarvestItemsService.FormData = element;
    this.NotificationService.warn(this.RegisterHarvestItemsService.ComponentSaveAll(this.RegisterHarvestItemsSort, this.RegisterHarvestItemsPaginator));
  }
  RegisterHarvestItemsDelete(element: RegisterHarvestItems) {
    this.RegisterHarvestItemsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.RegisterHarvestItemsService.ComponentDeleteAll(this.RegisterHarvestItemsSort, this.RegisterHarvestItemsPaginator));
  }
}
