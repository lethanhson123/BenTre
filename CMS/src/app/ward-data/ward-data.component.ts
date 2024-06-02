import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';
import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
@Component({
  selector: 'app-ward-data',
  templateUrl: './ward-data.component.html',
  styleUrls: ['./ward-data.component.css']
})
export class WardDataComponent implements OnInit {
  @ViewChild('WardDataSort') WardDataSort: MatSort;
  @ViewChild('WardDataPaginator') WardDataPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public WardDataService: WardDataService,
    public DistrictDataService: DistrictDataService,
  ) { }

  ngOnInit(): void {
    this.DistrictDataSearch();
  }
  DistrictDataSearch() {
    this.DistrictDataService.ComponentGetAllToListAsync();
  }
  WardDataSearch() {
    this.WardDataService.SearchByParentID(this.WardDataSort, this.WardDataPaginator);
  }
  WardDataSave(element: WardData) {
    element.ParentID = this.WardDataService.BaseParameter.ParentID;
    this.WardDataService.FormData = element;
    this.NotificationService.warn(this.WardDataService.ComponentSaveByParentID(this.WardDataSort, this.WardDataPaginator));
  }
  WardDataDelete(element: WardData) {
    this.WardDataService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.WardDataService.ComponentDeleteByParentID(this.WardDataSort, this.WardDataPaginator));
  }


}
