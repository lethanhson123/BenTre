import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { Species } from 'src/app/shared/Species.model';
import { SpeciesService } from 'src/app/shared/Species.service';

@Component({
  selector: 'app-species',
  templateUrl: './species.component.html',
  styleUrls: ['./species.component.css']
})
export class SpeciesComponent implements OnInit {

  @ViewChild('SpeciesSort') SpeciesSort: MatSort;
  @ViewChild('SpeciesPaginator') SpeciesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public SpeciesService: SpeciesService,
  ) { }

  ngOnInit(): void {    
  }

  SpeciesSearch() {
    this.SpeciesService.SearchAll(this.SpeciesSort, this.SpeciesPaginator);
  }
  SpeciesSave(element: Species) {
    this.SpeciesService.FormData = element;
    this.NotificationService.warn(this.SpeciesService.ComponentSaveAll(this.SpeciesSort, this.SpeciesPaginator));
  }
  SpeciesDelete(element: Species) {
    this.SpeciesService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.SpeciesService.ComponentDeleteAll(this.SpeciesSort, this.SpeciesPaginator));
  }
}