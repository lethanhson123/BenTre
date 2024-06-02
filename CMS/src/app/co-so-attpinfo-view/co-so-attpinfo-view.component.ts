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


import { ATTPInfo } from 'src/app/shared/ATTPInfo.model';
import { ATTPInfoService } from 'src/app/shared/ATTPInfo.service';
import { ATTPInfoProductGroups } from 'src/app/shared/ATTPInfoProductGroups.model';
import { ATTPInfoProductGroupsService } from 'src/app/shared/ATTPInfoProductGroups.service';
import { ATTPInfoDocuments } from 'src/app/shared/ATTPInfoDocuments.model';
import { ATTPInfoDocumentsService } from 'src/app/shared/ATTPInfoDocuments.service';

@Component({
  selector: 'app-co-so-attpinfo-view',
  templateUrl: './co-so-attpinfo-view.component.html',
  styleUrls: ['./co-so-attpinfo-view.component.css']
})
export class CoSoATTPInfoViewComponent implements OnInit {

  @ViewChild('ATTPInfoProductGroupsSort') ATTPInfoProductGroupsSort: MatSort;
  @ViewChild('ATTPInfoProductGroupsPaginator') ATTPInfoProductGroupsPaginator: MatPaginator;

  @ViewChild('ATTPInfoDocumentsSort') ATTPInfoDocumentsSort: MatSort;
  @ViewChild('ATTPInfoDocumentsPaginator') ATTPInfoDocumentsPaginator: MatPaginator;


  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CoSoATTPInfoViewComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,

    public ATTPInfoService: ATTPInfoService,
    public ATTPInfoProductGroupsService: ATTPInfoProductGroupsService,
    public ATTPInfoDocumentsService: ATTPInfoDocumentsService,
  ) { }

  ngOnInit(): void {
    this.ProductGroupSearch();
    this.ATTPInfoDocumentsSearch();
    this.ATTPInfoProductGroupsSearch();
  }

  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }

  ATTPInfoDocumentsSearch() {
    this.ATTPInfoDocumentsService.BaseParameter.ParentID = this.ATTPInfoService.FormData.ID;
    this.ATTPInfoDocumentsService.SearchByParentIDNotEmpty(this.ATTPInfoDocumentsSort, this.ATTPInfoDocumentsPaginator);
  }


  ATTPInfoProductGroupsSearch() {
    this.ATTPInfoProductGroupsService.BaseParameter.ParentID = this.ATTPInfoService.FormData.ID;
    this.ATTPInfoProductGroupsService.SearchByParentIDNotEmpty(this.ATTPInfoProductGroupsSort, this.ATTPInfoProductGroupsPaginator);
  }

  Close() {
    this.dialogRef.close();
  }
}
