import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { NguonVon } from 'src/app/shared/NguonVon.model';
import { NguonVonService } from 'src/app/shared/NguonVon.service';
import { NguonVonDetailComponent } from '../nguon-von-detail/nguon-von-detail.component';
@Component({
  selector: 'app-nguon-von',
  templateUrl: './nguon-von.component.html',
  styleUrls: ['./nguon-von.component.css']
})
export class NguonVonComponent implements OnInit {
  @ViewChild('NguonVonSort') NguonVonSort: MatSort;
  @ViewChild('NguonVonPaginator') NguonVonPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public NguonVonService: NguonVonService,
  ) { }

  ngOnInit(): void {
  }

  NguonVonSearch() {
    if (this.NguonVonService.BaseParameter.SearchString.length > 0) {
      this.NguonVonService.BaseParameter.SearchString = this.NguonVonService.BaseParameter.SearchString.trim();
      this.NguonVonService.DataSource.filter = this.NguonVonService.BaseParameter.SearchString.toLowerCase();
    }
    else {
      this.NguonVonService.IsShowLoading = true;
      this.NguonVonService.BaseParameter.Active = true;
      this.NguonVonService.GetByNam_ActiveToListAsync().subscribe(
        res => {
          this.NguonVonService.List = (res as NguonVon[]).sort((a, b) => (a.NgayBatDau < b.NgayBatDau ? 1 : -1));
          this.NguonVonService.DataSource = new MatTableDataSource(this.NguonVonService.List);
          this.NguonVonService.DataSource.sort = this.NguonVonSort;
          this.NguonVonService.DataSource.paginator = this.NguonVonPaginator;
          this.NguonVonService.IsShowLoading = false;
        },
        err => {
          this.NguonVonService.IsShowLoading = false;
        }
      );
    }
  }
  NguonVonAdd(ID: number) {
    this.NguonVonService.IsShowLoading = true;
    this.NguonVonService.BaseParameter.ID = ID;
    this.NguonVonService.GetByIDAsync().subscribe(
      res => {
        this.NguonVonService.FormData = res as NguonVon;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(NguonVonDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.NguonVonSearch();
        });
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
  
  NguonVonDelete(element: NguonVon) {
    this.NguonVonService.IsShowLoading = true;    
    this.NguonVonService.BaseParameter.ID = element.ID;
    this.NguonVonService.RemoveAsync().subscribe(
      res => {
        this.NguonVonSearch();
        this.NotificationService.warn(environment.DeleteSuccess);
        this.NguonVonService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.DeleteNotSuccess);
        this.NguonVonService.IsShowLoading = false;
      }
    );
  }
}
