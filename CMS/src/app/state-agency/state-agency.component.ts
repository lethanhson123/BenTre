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

import { StateAgency } from 'src/app/shared/StateAgency.model';
import { StateAgencyService } from 'src/app/shared/StateAgency.service';

@Component({
  selector: 'app-state-agency',
  templateUrl: './state-agency.component.html',
  styleUrls: ['./state-agency.component.css']
})
export class StateAgencyComponent implements OnInit {

  @ViewChild('StateAgencySort') StateAgencySort: MatSort;
  @ViewChild('StateAgencyPaginator') StateAgencyPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public WardDataService: WardDataService,
    public DistrictDataService: DistrictDataService,

    public StateAgencyService: StateAgencyService,
  ) { }

  ngOnInit(): void {
    this.DistrictDataSearch();
  }

  DistrictDataSearch() {
    this.StateAgencyService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        if (this.DistrictDataService.List) {
          if (this.DistrictDataService.List.length > 0) {
            this.WardDataSearch(this.DistrictDataService.List[0].ParentID);
          }
        }
        this.StateAgencyService.IsShowLoading = false;
      },
      err => {
        this.StateAgencyService.IsShowLoading = false;
      }
    );
  }
  WardDataSearch(ParentID: number) {
    this.StateAgencyService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = ParentID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.StateAgencyService.IsShowLoading = false;
      },
      err => {
        this.StateAgencyService.IsShowLoading = false;
      }
    );
  }

  StateAgencySearch() {
    this.StateAgencyService.SearchAll(this.StateAgencySort, this.StateAgencyPaginator);
  }
  StateAgencySave(element: StateAgency) {
    this.StateAgencyService.FormData = element;
    this.NotificationService.warn(this.StateAgencyService.ComponentSaveAll(this.StateAgencySort, this.StateAgencyPaginator));
  }
  StateAgencyDelete(element: StateAgency) {
    this.StateAgencyService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.StateAgencyService.ComponentDeleteAll(this.StateAgencySort, this.StateAgencyPaginator));
  }
}
