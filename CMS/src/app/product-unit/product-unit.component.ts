import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductUnit } from 'src/app/shared/ProductUnit.model';
import { ProductUnitService } from 'src/app/shared/ProductUnit.service';
@Component({
  selector: 'app-product-unit',
  templateUrl: './product-unit.component.html',
  styleUrls: ['./product-unit.component.css']
})
export class ProductUnitComponent implements OnInit {

  @ViewChild('ProductUnitSort') ProductUnitSort: MatSort;
  @ViewChild('ProductUnitPaginator') ProductUnitPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ProductUnitService: ProductUnitService,
  ) { }

  ngOnInit(): void {
  }

  ProductUnitSearch() {
    this.ProductUnitService.SearchAll(this.ProductUnitSort, this.ProductUnitPaginator);
  }
  ProductUnitSave(element: ProductUnit) {
    this.ProductUnitService.FormData = element;
    this.NotificationService.warn(this.ProductUnitService.ComponentSaveAll(this.ProductUnitSort, this.ProductUnitPaginator));
  }
  ProductUnitDelete(element: ProductUnit) {
    this.ProductUnitService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProductUnitService.ComponentDeleteAll(this.ProductUnitSort, this.ProductUnitPaginator));
  }


}
