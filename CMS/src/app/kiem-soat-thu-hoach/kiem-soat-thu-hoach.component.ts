
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { KiemSoatThuHoach } from 'src/app/shared/KiemSoatThuHoach.model';
import { KiemSoatThuHoachService } from 'src/app/shared/KiemSoatThuHoach.service';
@Component({
  selector: 'app-kiem-soat-thu-hoach',
  templateUrl: './kiem-soat-thu-hoach.component.html',
  styleUrls: ['./kiem-soat-thu-hoach.component.css']
})
export class KiemSoatThuHoachComponent implements OnInit {
  @ViewChild('KiemSoatThuHoachSort') KiemSoatThuHoachSort: MatSort;
  @ViewChild('KiemSoatThuHoachPaginator') KiemSoatThuHoachPaginator: MatPaginator;
  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public KiemSoatThuHoachService: KiemSoatThuHoachService,
  ) { }

  ngOnInit(): void {
  }

  KiemSoatThuHoachSearch() {
    this.KiemSoatThuHoachService.SearchAll(this.KiemSoatThuHoachSort, this.KiemSoatThuHoachPaginator);
  }
  KiemSoatThuHoachSave(element: KiemSoatThuHoach) {
    this.KiemSoatThuHoachService.FormData = element;
    this.NotificationService.warn(this.KiemSoatThuHoachService.ComponentSaveAll(this.KiemSoatThuHoachSort, this.KiemSoatThuHoachPaginator));
  }
  KiemSoatThuHoachDelete(element: KiemSoatThuHoach) {
    this.KiemSoatThuHoachService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.KiemSoatThuHoachService.ComponentDeleteAll(this.KiemSoatThuHoachSort, this.KiemSoatThuHoachPaginator));
  }


}
