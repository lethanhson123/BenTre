import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


import { ThanhVienLichSuThongBao } from 'src/app/shared/ThanhVienLichSuThongBao.model';
import { ThanhVienLichSuThongBaoService } from 'src/app/shared/ThanhVienLichSuThongBao.service';

@Component({
  selector: 'app-thanh-vien-lich-su-thong-bao-view',
  templateUrl: './thanh-vien-lich-su-thong-bao-view.component.html',
  styleUrls: ['./thanh-vien-lich-su-thong-bao-view.component.css']
})
export class ThanhVienLichSuThongBaoViewComponent implements OnInit {

  @ViewChild('ThanhVienLichSuThongBaoSort') ThanhVienLichSuThongBaoSort: MatSort;
  @ViewChild('ThanhVienLichSuThongBaoPaginator') ThanhVienLichSuThongBaoPaginator: MatPaginator;

  

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ThanhVienLichSuThongBaoViewComponent>,

    public NotificationService: NotificationService,

    public ThanhVienLichSuThongBaoService: ThanhVienLichSuThongBaoService,
  ) { }

  ngOnInit(): void {    
    this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString="";
    this.ThanhVienLichSuThongBaoSearch();
  }


  ThanhVienLichSuThongBaoSearch() {
    this.SearchAll(this.ThanhVienLichSuThongBaoSort, this.ThanhVienLichSuThongBaoPaginator);
  }
  SearchAll(sort: MatSort, paginator: MatPaginator) {
    if (this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString.length > 0) {
        this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString = this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString.trim();
        this.ThanhVienLichSuThongBaoService.DataSource.filter = this.ThanhVienLichSuThongBaoService.BaseParameter.SearchString.toLowerCase();
    }
    else {
        this.GetByFileNameToListAsync(sort, paginator);
    }
  }
  GetByFileNameToListAsync(sort: MatSort, paginator: MatPaginator) {
    this.ThanhVienLichSuThongBaoService.IsShowLoading = true;
    this.ThanhVienLichSuThongBaoService.GetByFileNameToListAsync().subscribe(
        res => {
            this.ThanhVienLichSuThongBaoService.List = (res as any[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
            this.ThanhVienLichSuThongBaoService.ListFilter = this.ThanhVienLichSuThongBaoService.List.filter(item => item.ID > 0);
            this.ThanhVienLichSuThongBaoService.DataSource = new MatTableDataSource(this.ThanhVienLichSuThongBaoService.List);
            this.ThanhVienLichSuThongBaoService.DataSource.sort = sort;
            this.ThanhVienLichSuThongBaoService.DataSource.paginator = paginator;
            this.ThanhVienLichSuThongBaoService.IsShowLoading = false;
        },
        err => {
            this.ThanhVienLichSuThongBaoService.IsShowLoading = false;
        }
    );
  }


  Close() {
    this.dialogRef.close();
  }
}
