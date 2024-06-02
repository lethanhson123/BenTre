import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CamKet17 } from 'src/app/shared/CamKet17.model';
import { CamKet17Service } from 'src/app/shared/CamKet17.service';
@Component({
  selector: 'app-cam-ket17',
  templateUrl: './cam-ket17.component.html',
  styleUrls: ['./cam-ket17.component.css']
})
export class CamKet17Component implements OnInit {

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CamKet17Service: CamKet17Service,
  ) { }

  ngOnInit(): void {
    this.CamKet17Search();
  }
  CamKet17Search() {
    this.CamKet17Service.IsShowLoading = true;
    this.CamKet17Service.BaseParameter.ID = environment.InitializationNumber;
    this.CamKet17Service.GetByIDAsync().subscribe(
      res => {
        this.CamKet17Service.FormData = res as CamKet17;
        console.log(this.CamKet17Service.FormData);
        this.CamKet17Service.IsShowLoading = false;
      },
      err => {
        this.CamKet17Service.IsShowLoading = false;
      }
    );
  }
  CamKet17Save() {
    this.CamKet17Service.IsShowLoading = true;
    this.CamKet17Service.SaveAsync().subscribe(
      res => {
        this.CamKet17Service.FormData = res as CamKet17;
        this.CamKet17Service.IsShowLoading = false;
      },
      err => {
        this.CamKet17Service.IsShowLoading = false;
      }
    );
  }
  OpenWindowByURL(){
    this.NotificationService.OpenWindowByURL(this.CamKet17Service.FormData.FileName);
  }
}
