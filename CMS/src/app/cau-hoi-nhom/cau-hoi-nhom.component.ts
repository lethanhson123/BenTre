import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';

@Component({
  selector: 'app-cau-hoi-nhom',
  templateUrl: './cau-hoi-nhom.component.html',
  styleUrls: ['./cau-hoi-nhom.component.css']
})
export class CauHoiNhomComponent implements OnInit {

  @ViewChild('CauHoiNhomSort') CauHoiNhomSort: MatSort;
  @ViewChild('CauHoiNhomPaginator') CauHoiNhomPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CauHoiNhomService: CauHoiNhomService,
  ) { }

  ngOnInit(): void {    
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.SearchAll(this.CauHoiNhomSort, this.CauHoiNhomPaginator);
  }
  CauHoiNhomSave(element: CauHoiNhom) {
    this.CauHoiNhomService.FormData = element;
    this.NotificationService.warn(this.CauHoiNhomService.ComponentSaveAll(this.CauHoiNhomSort, this.CauHoiNhomPaginator));
  }
  CauHoiNhomDelete(element: CauHoiNhom) {
    this.CauHoiNhomService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CauHoiNhomService.ComponentDeleteAll(this.CauHoiNhomSort, this.CauHoiNhomPaginator));
  }
}