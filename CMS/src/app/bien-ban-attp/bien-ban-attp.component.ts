
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';

import { BienBanATTP } from 'src/app/shared/BienBanATTP.model';
import { BienBanATTPService } from 'src/app/shared/BienBanATTP.service';
import { BienBanATTPDetailComponent } from '../bien-ban-attpdetail/bien-ban-attpdetail.component';

@Component({
  selector: 'app-bien-ban-attp',
  templateUrl: './bien-ban-attp.component.html',
  styleUrls: ['./bien-ban-attp.component.css']
})
export class BienBanATTPComponent implements OnInit {


  @ViewChild('BienBanATTPSort') BienBanATTPSort: MatSort;
  @ViewChild('BienBanATTPPaginator') BienBanATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucProductGroupService: DanhMucProductGroupService,

    public BienBanATTPService: BienBanATTPService,
  ) { }

  ngOnInit(): void {
    this.DanhMucProductGroupSearch();
  }

  DanhMucProductGroupSearch() {
    this.DanhMucProductGroupService.ComponentGetAllToListAsync();
  }

  BienBanATTPSearch() {
    this.BienBanATTPService.SearchByParentIDNotEmpty(this.BienBanATTPSort, this.BienBanATTPPaginator);
  }  
  
  BienBanATTPDelete(element: BienBanATTP) {
    this.BienBanATTPService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.BienBanATTPService.ComponentDeleteByParentIDNotEmpty(this.BienBanATTPSort, this.BienBanATTPPaginator));
  }

  BienBanATTPAdd(ID: number) {
    this.BienBanATTPService.BaseParameter.ID = ID;
    this.BienBanATTPService.GetByIDAsync().subscribe(
      res => {
        this.BienBanATTPService.FormData = res as BienBanATTP;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(BienBanATTPDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.BienBanATTPSearch();
        });
      },
      err => {
      }
    );
  }
}
