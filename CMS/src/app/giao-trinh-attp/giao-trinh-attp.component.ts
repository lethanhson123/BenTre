import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';


import { GiaoTrinhATTP } from 'src/app/shared/GiaoTrinhATTP.model';
import { GiaoTrinhATTPService } from 'src/app/shared/GiaoTrinhATTP.service';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';

@Component({
  selector: 'app-giao-trinh-attp',
  templateUrl: './giao-trinh-attp.component.html',
  styleUrls: ['./giao-trinh-attp.component.css']
})
export class GiaoTrinhATTPComponent implements OnInit {

  @ViewChild('GiaoTrinhATTPSort') GiaoTrinhATTPSort: MatSort;
  @ViewChild('GiaoTrinhATTPPaginator') GiaoTrinhATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public GiaoTrinhATTPService: GiaoTrinhATTPService,
    public CauHoiNhomService: CauHoiNhomService,
  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
  }

  DateGiaoTrinhATTPNgayGhiNhan(element: GiaoTrinhATTP, value) {
    element.NgayGhiNhan = new Date(value);
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }

  GiaoTrinhATTPSearch() {
    this.GiaoTrinhATTPService.SearchByParentID(this.GiaoTrinhATTPSort, this.GiaoTrinhATTPPaginator);
  }

  GiaoTrinhATTPSave(element: GiaoTrinhATTP) {
    this.GiaoTrinhATTPService.IsShowLoading = true;
    this.GiaoTrinhATTPService.FormData = element;    
    this.GiaoTrinhATTPService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.GiaoTrinhATTPService.FileToUpload = null;        
        this.GiaoTrinhATTPSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.GiaoTrinhATTPService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.GiaoTrinhATTPService.IsShowLoading = false;
      }
    );
  }
  GiaoTrinhATTPDelete(element: GiaoTrinhATTP) {
    this.GiaoTrinhATTPService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.GiaoTrinhATTPService.ComponentDeleteAll(this.GiaoTrinhATTPSort, this.GiaoTrinhATTPPaginator));
  }

  
  ChangeFileName(element: GiaoTrinhATTP, files: FileList) {
    if (files) {
      this.GiaoTrinhATTPService.FileToUpload = files;
    }
  }
}
