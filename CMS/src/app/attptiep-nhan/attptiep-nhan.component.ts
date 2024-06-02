
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPTiepNhan } from 'src/app/shared/ATTPTiepNhan.model';
import { ATTPTiepNhanService } from 'src/app/shared/ATTPTiepNhan.service';
@Component({
  selector: 'app-attptiep-nhan',
  templateUrl: './attptiep-nhan.component.html',
  styleUrls: ['./attptiep-nhan.component.css']
})
export class ATTPTiepNhanComponent implements OnInit {


  @ViewChild('ATTPTiepNhanSort') ATTPTiepNhanSort: MatSort;
  @ViewChild('ATTPTiepNhanPaginator') ATTPTiepNhanPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPTiepNhanService: ATTPTiepNhanService,
  ) { }

  ngOnInit(): void {
  }

  ATTPTiepNhanSearch() {
    this.ATTPTiepNhanService.SearchAll(this.ATTPTiepNhanSort, this.ATTPTiepNhanPaginator);
  }
  ATTPTiepNhanSave(element: ATTPTiepNhan) {
    this.ATTPTiepNhanService.FormData = element;
    this.NotificationService.warn(this.ATTPTiepNhanService.ComponentSaveAll(this.ATTPTiepNhanSort, this.ATTPTiepNhanPaginator));
  }
  ATTPTiepNhanDelete(element: ATTPTiepNhan) {
    this.ATTPTiepNhanService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPTiepNhanService.ComponentDeleteAll(this.ATTPTiepNhanSort, this.ATTPTiepNhanPaginator));
  }


}
