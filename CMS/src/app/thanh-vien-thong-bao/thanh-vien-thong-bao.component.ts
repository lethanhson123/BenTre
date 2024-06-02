import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { ThanhVienThongBao } from 'src/app/shared/ThanhVienThongBao.model';
import { ThanhVienThongBaoService } from 'src/app/shared/ThanhVienThongBao.service';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';


@Component({
  selector: 'app-thanh-vien-thong-bao',
  templateUrl: './thanh-vien-thong-bao.component.html',
  styleUrls: ['./thanh-vien-thong-bao.component.css']
})
export class ThanhVienThongBaoComponent implements OnInit {

  @ViewChild('ThanhVienThongBaoSort') ThanhVienThongBaoSort: MatSort;
  @ViewChild('ThanhVienThongBaoPaginator') ThanhVienThongBaoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ThanhVienService: ThanhVienService,

    public ThanhVienThongBaoService: ThanhVienThongBaoService,
  ) { }

  ngOnInit(): void {    
    this.ThanhVienSearch();
  } 
  ThanhVienSearch() {
    this.ThanhVienService.ComponentGet000ToListAsync();
  }
  ThanhVienFilter(searchString: string) {
    this.ThanhVienService.Filter000(searchString);
  }
  ThanhVienAdd(ID: number) {
    this.ThanhVienThongBaoService.IsShowLoading = true;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.ThanhVienThongBaoService.IsShowLoading = false;
      },
      err => {
        this.ThanhVienThongBaoService.IsShowLoading = false;
      }
    );
  }
  ThanhVienThongBaoSearch() {
    this.ThanhVienThongBaoService.SearchAll(this.ThanhVienThongBaoSort, this.ThanhVienThongBaoPaginator);
  }
  ThanhVienThongBaoSave(element: ThanhVienThongBao) {
    this.ThanhVienThongBaoService.FormData = element;
    this.NotificationService.warn(this.ThanhVienThongBaoService.ComponentSaveAll(this.ThanhVienThongBaoSort, this.ThanhVienThongBaoPaginator));
  }
  ThanhVienThongBaoDelete(element: ThanhVienThongBao) {
    this.ThanhVienThongBaoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ThanhVienThongBaoService.ComponentDeleteAll(this.ThanhVienThongBaoSort, this.ThanhVienThongBaoPaginator));
  } 
}