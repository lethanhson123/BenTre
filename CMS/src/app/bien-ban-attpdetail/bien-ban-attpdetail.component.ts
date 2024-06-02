import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';


import { BienBanATTP } from 'src/app/shared/BienBanATTP.model';
import { BienBanATTPService } from 'src/app/shared/BienBanATTP.service';

@Component({
  selector: 'app-bien-ban-attpdetail',
  templateUrl: './bien-ban-attpdetail.component.html',
  styleUrls: ['./bien-ban-attpdetail.component.css']
})
export class BienBanATTPDetailComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<BienBanATTPDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

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

  BienBanATTPSave() {
    this.NotificationService.warn(this.BienBanATTPService.ComponentSaveForm());
  }
  BienBanATTPCopy() {
    this.BienBanATTPService.FormData.ID = environment.InitializationNumber;
    this.NotificationService.warn(this.BienBanATTPService.ComponentSaveForm());
  }
  Close() {
    this.dialogRef.close();
  }

}