import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { DanhMucThanhVien } from 'src/app/shared/DanhMucThanhVien.model';
import { DanhMucThanhVienService } from 'src/app/shared/DanhMucThanhVien.service';
import { DanhMucThanhVienDetailComponent } from '../danh-muc-thanh-vien-detail/danh-muc-thanh-vien-detail.component';



@Component({
  selector: 'app-danh-muc-thanh-vien',
  templateUrl: './danh-muc-thanh-vien.component.html',
  styleUrls: ['./danh-muc-thanh-vien.component.css']
})
export class DanhMucThanhVienComponent implements OnInit {

  @ViewChild('DanhMucThanhVienSort') DanhMucThanhVienSort: MatSort;
  @ViewChild('DanhMucThanhVienPaginator') DanhMucThanhVienPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public DanhMucThanhVienService: DanhMucThanhVienService,
  ) { }

  ngOnInit(): void {    
  }

  DanhMucThanhVienSearch() {
    this.DanhMucThanhVienService.SearchAll(this.DanhMucThanhVienSort, this.DanhMucThanhVienPaginator);
  }
  DanhMucThanhVienSave(element: DanhMucThanhVien) {
    this.DanhMucThanhVienService.FormData = element;
    this.NotificationService.warn(this.DanhMucThanhVienService.ComponentSaveAll(this.DanhMucThanhVienSort, this.DanhMucThanhVienPaginator));
  }
  DanhMucThanhVienDelete(element: DanhMucThanhVien) {
    this.DanhMucThanhVienService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.DanhMucThanhVienService.ComponentDeleteAll(this.DanhMucThanhVienSort, this.DanhMucThanhVienPaginator));
  }

  DanhMucThanhVienAdd(ID: number) {
    this.DanhMucThanhVienService.BaseParameter.ID = ID;
    this.DanhMucThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.DanhMucThanhVienService.FormData = res as DanhMucThanhVien;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(DanhMucThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {          
        });
      },
      err => {
      }
    );
  }
}
