import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';
@Component({
  selector: 'app-product-group',
  templateUrl: './product-group.component.html',
  styleUrls: ['./product-group.component.css']
})
export class ProductGroupComponent implements OnInit {
  @ViewChild('ProductGroupSort') ProductGroupSort: MatSort;
  @ViewChild('ProductGroupPaginator') ProductGroupPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,
    public DanhMucProductGroupService: DanhMucProductGroupService,
  ) { }

  ngOnInit(): void {
    this.DanhMucProductGroupSearch();
  }
  DanhMucProductGroupSearch() {
    this.DanhMucProductGroupService.ComponentGetAllToListAsync();
  }
  ProductGroupSearch() {
    this.ProductGroupService.SearchByParentID(this.ProductGroupSort, this.ProductGroupPaginator);
  }
  ProductGroupSave(element: ProductGroup) {
    this.ProductGroupService.FormData = element;
    this.NotificationService.warn(this.ProductGroupService.ComponentSaveAll(this.ProductGroupSort, this.ProductGroupPaginator));
  }
  ProductGroupDelete(element: ProductGroup) {
    this.ProductGroupService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.ProductGroupService.ComponentDeleteAll(this.ProductGroupSort, this.ProductGroupPaginator));
  }


}
