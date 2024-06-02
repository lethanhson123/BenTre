import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { ThanhVienLichSuThongBao } from 'src/app/shared/ThanhVienLichSuThongBao.model';
import { ThanhVienLichSuThongBaoService } from 'src/app/shared/ThanhVienLichSuThongBao.service';

@Component({
  selector: 'app-thanh-vien-lich-su-thong-bao',
  templateUrl: './thanh-vien-lich-su-thong-bao.component.html',
  styleUrls: ['./thanh-vien-lich-su-thong-bao.component.css']
})
export class ThanhVienLichSuThongBaoComponent implements OnInit {

  @ViewChild('ThanhVienLichSuThongBaoSort') ThanhVienLichSuThongBaoSort: MatSort;
  @ViewChild('ThanhVienLichSuThongBaoPaginator') ThanhVienLichSuThongBaoPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ThanhVienLichSuThongBaoService: ThanhVienLichSuThongBaoService,
  ) { }

  ngOnInit(): void {    
  }

  ThanhVienLichSuThongBaoSearch() {
    this.ThanhVienLichSuThongBaoService.SearchAll(this.ThanhVienLichSuThongBaoSort, this.ThanhVienLichSuThongBaoPaginator);
  }
  ThanhVienLichSuThongBaoSave(element: ThanhVienLichSuThongBao) {
    this.ThanhVienLichSuThongBaoService.FormData = element;
    this.NotificationService.warn(this.ThanhVienLichSuThongBaoService.ComponentSaveAll(this.ThanhVienLichSuThongBaoSort, this.ThanhVienLichSuThongBaoPaginator));
  }
  ThanhVienLichSuThongBaoDelete(element: ThanhVienLichSuThongBao) {
    this.ThanhVienLichSuThongBaoService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ThanhVienLichSuThongBaoService.ComponentDeleteAll(this.ThanhVienLichSuThongBaoSort, this.ThanhVienLichSuThongBaoPaginator));
  }

}
