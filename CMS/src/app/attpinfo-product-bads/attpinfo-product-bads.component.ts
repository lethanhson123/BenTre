import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPInfoProductBads } from 'src/app/shared/ATTPInfoProductBads.model';
import { ATTPInfoProductBadsService } from 'src/app/shared/ATTPInfoProductBads.service';
@Component({
  selector: 'app-attpinfo-product-bads',
  templateUrl: './attpinfo-product-bads.component.html',
  styleUrls: ['./attpinfo-product-bads.component.css']
})
export class ATTPInfoProductBadsComponent implements OnInit {
  @ViewChild('ATTPInfoProductBadsSort') ATTPInfoProductBadsSort: MatSort;
  @ViewChild('ATTPInfoProductBadsPaginator') ATTPInfoProductBadsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoProductBadsService: ATTPInfoProductBadsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPInfoProductBadsSearch() {
    this.ATTPInfoProductBadsService.SearchAll(this.ATTPInfoProductBadsSort, this.ATTPInfoProductBadsPaginator);
  }
  ATTPInfoProductBadsSave(element: ATTPInfoProductBads) {
    this.ATTPInfoProductBadsService.FormData = element;
    this.NotificationService.warn(this.ATTPInfoProductBadsService.ComponentSaveAll(this.ATTPInfoProductBadsSort, this.ATTPInfoProductBadsPaginator));
  }
  ATTPInfoProductBadsDelete(element: ATTPInfoProductBads) {
    this.ATTPInfoProductBadsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPInfoProductBadsService.ComponentDeleteAll(this.ATTPInfoProductBadsSort, this.ATTPInfoProductBadsPaginator));
  }


}
