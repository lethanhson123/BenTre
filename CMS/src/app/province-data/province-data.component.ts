import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ProvinceData } from 'src/app/shared/ProvinceData.model';
import { ProvinceDataService } from 'src/app/shared/ProvinceData.service';


@Component({
  selector: 'app-province-data',
  templateUrl: './province-data.component.html',
  styleUrls: ['./province-data.component.css']
})
export class ProvinceDataComponent implements OnInit {
  @ViewChild('ProvinceDataSort') ProvinceDataSort: MatSort;
  @ViewChild('ProvinceDataPaginator') ProvinceDataPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ProvinceDataService: ProvinceDataService,
  ) { }

  ngOnInit(): void {
  }

  ProvinceDataSearch() {
    this.ProvinceDataService.SearchAll(this.ProvinceDataSort, this.ProvinceDataPaginator);
  }
  ProvinceDataSave(element: ProvinceData) {
    this.ProvinceDataService.FormData = element;
    this.NotificationService.warn(this.ProvinceDataService.ComponentSaveAll(this.ProvinceDataSort, this.ProvinceDataPaginator));
  }
  ProvinceDataDelete(element: ProvinceData) {
    this.ProvinceDataService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProvinceDataService.ComponentDeleteAll(this.ProvinceDataSort, this.ProvinceDataPaginator));
  }


}
