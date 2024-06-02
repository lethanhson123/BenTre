import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ATTPInfoTimelines } from 'src/app/shared/ATTPInfoTimelines.model';
import { ATTPInfoTimelinesService } from 'src/app/shared/ATTPInfoTimelines.service';

@Component({
  selector: 'app-attpinfo-timelines',
  templateUrl: './attpinfo-timelines.component.html',
  styleUrls: ['./attpinfo-timelines.component.css']
})
export class ATTPInfoTimelinesComponent implements OnInit {

  @ViewChild('ATTPInfoTimelinesSort') ATTPInfoTimelinesSort: MatSort;
  @ViewChild('ATTPInfoTimelinesPaginator') ATTPInfoTimelinesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoTimelinesService: ATTPInfoTimelinesService,
  ) { }

  ngOnInit(): void {
  }

  ATTPInfoTimelinesSearch() {
    this.ATTPInfoTimelinesService.SearchAll(this.ATTPInfoTimelinesSort, this.ATTPInfoTimelinesPaginator);
  }
  ATTPInfoTimelinesSave(element: ATTPInfoTimelines) {
    this.ATTPInfoTimelinesService.FormData = element;
    this.NotificationService.warn(this.ATTPInfoTimelinesService.ComponentSaveAll(this.ATTPInfoTimelinesSort, this.ATTPInfoTimelinesPaginator));
  }
  ATTPInfoTimelinesDelete(element: ATTPInfoTimelines) {
    this.ATTPInfoTimelinesService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPInfoTimelinesService.ComponentDeleteAll(this.ATTPInfoTimelinesSort, this.ATTPInfoTimelinesPaginator));
  }
}
