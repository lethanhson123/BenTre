
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
@Component({
  selector: 'app-district-data',
  templateUrl: './district-data.component.html',
  styleUrls: ['./district-data.component.css']
})
export class DistrictDataComponent implements OnInit {
  @ViewChild('DistrictDataSort') DistrictDataSort: MatSort;
  @ViewChild('DistrictDataPaginator') DistrictDataPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DistrictDataService: DistrictDataService,
  ) { }

  ngOnInit(): void {
  }

  DistrictDataSearch() {
    this.DistrictDataService.SearchAll(this.DistrictDataSort, this.DistrictDataPaginator);
  }
  DistrictDataSave(element: DistrictData) {
    this.DistrictDataService.FormData = element;
    this.NotificationService.warn(this.DistrictDataService.ComponentSaveAll(this.DistrictDataSort, this.DistrictDataPaginator));
  }
  DistrictDataDelete(element: DistrictData) {
    this.DistrictDataService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DistrictDataService.ComponentDeleteAll(this.DistrictDataSort, this.DistrictDataPaginator));
  }


}
