import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';



import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { DanhMucProductGroup } from 'src/app/shared/DanhMucProductGroup.model';
import { DanhMucProductGroupService } from 'src/app/shared/DanhMucProductGroup.service';

@Component({
  selector: 'app-product-group-detail',
  templateUrl: './product-group-detail.component.html',
  styleUrls: ['./product-group-detail.component.css']
})
export class ProductGroupDetailComponent implements OnInit {

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<ProductGroupDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

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
 

  ProductGroupSave() {
    this.NotificationService.warn(this.ProductGroupService.ComponentSaveForm());
  }
  
  Close() {
    this.dialogRef.close();
  }
}
