
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ATTPInfoProductGoods } from 'src/app/shared/ATTPInfoProductGoods.model';
import { ATTPInfoProductGoodsService } from 'src/app/shared/ATTPInfoProductGoods.service';

@Component({
  selector: 'app-attpinfo-product-goods',
  templateUrl: './attpinfo-product-goods.component.html',
  styleUrls: ['./attpinfo-product-goods.component.css']
})
export class ATTPInfoProductGoodsComponent implements OnInit {

  @ViewChild('ATTPInfoProductGoodsSort') ATTPInfoProductGoodsSort: MatSort;
  @ViewChild('ATTPInfoProductGoodsPaginator') ATTPInfoProductGoodsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ATTPInfoProductGoodsService: ATTPInfoProductGoodsService,
  ) { }

  ngOnInit(): void {
  }

  ATTPInfoProductGoodsSearch() {
    this.ATTPInfoProductGoodsService.SearchAll(this.ATTPInfoProductGoodsSort, this.ATTPInfoProductGoodsPaginator);
  }
  ATTPInfoProductGoodsSave(element: ATTPInfoProductGoods) {
    this.ATTPInfoProductGoodsService.FormData = element;
    this.NotificationService.warn(this.ATTPInfoProductGoodsService.ComponentSaveAll(this.ATTPInfoProductGoodsSort, this.ATTPInfoProductGoodsPaginator));
  }
  ATTPInfoProductGoodsDelete(element: ATTPInfoProductGoods) {
    this.ATTPInfoProductGoodsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ATTPInfoProductGoodsService.ComponentDeleteAll(this.ATTPInfoProductGoodsSort, this.ATTPInfoProductGoodsPaginator));
  }


}
