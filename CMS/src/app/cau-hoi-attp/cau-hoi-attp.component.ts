import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CauHoiATTP } from 'src/app/shared/CauHoiATTP.model';
import { CauHoiATTPService } from 'src/app/shared/CauHoiATTP.service';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';
import { CauHoiATTPDetailComponent } from '../cau-hoi-attpdetail/cau-hoi-attpdetail.component';

@Component({
  selector: 'app-cau-hoi-attp',
  templateUrl: './cau-hoi-attp.component.html',
  styleUrls: ['./cau-hoi-attp.component.css']
})
export class CauHoiATTPComponent implements OnInit {

  @ViewChild('CauHoiATTPSort') CauHoiATTPSort: MatSort;
  @ViewChild('CauHoiATTPPaginator') CauHoiATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CauHoiATTPService: CauHoiATTPService,
    public CauHoiNhomService: CauHoiNhomService,
  ) { }

  ngOnInit(): void {    
    this.CauHoiNhomSearch();
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }

  CauHoiATTPSearch() {
    this.CauHoiATTPService.SearchByParentIDNotEmpty(this.CauHoiATTPSort, this.CauHoiATTPPaginator);
  }  
  CauHoiATTPDelete(element: CauHoiATTP) {
    this.CauHoiATTPService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CauHoiATTPService.ComponentDeleteByParentIDNotEmpty(this.CauHoiATTPSort, this.CauHoiATTPPaginator));
  }
  CauHoiATTPAdd(ID: number) {
    this.CauHoiATTPService.BaseParameter.ID = ID;
    this.CauHoiATTPService.GetByIDAsync().subscribe(
      res => {
        this.CauHoiATTPService.FormData = res as CauHoiATTP;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CauHoiATTPDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CauHoiATTPSearch();
        });
      },
      err => {
      }
    );
  }
}