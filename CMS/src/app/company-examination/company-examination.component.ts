import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';

import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { CompanyExaminationService } from 'src/app/shared/CompanyExamination.service';

import { CompanyExaminationDetailComponent } from '../company-examination-detail/company-examination-detail.component';


@Component({
  selector: 'app-company-examination',
  templateUrl: './company-examination.component.html',
  styleUrls: ['./company-examination.component.css']
})
export class CompanyExaminationComponent implements OnInit {

  @ViewChild('CompanyExaminationSort') CompanyExaminationSort: MatSort;
  @ViewChild('CompanyExaminationPaginator') CompanyExaminationPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyExaminationService: CompanyExaminationService,
    public CompanyInfoService: CompanyInfoService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoSearch();
  }

  CompanyInfoSearch() {    
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }


  CompanyExaminationSearch() {
    this.CompanyExaminationService.SearchByParentIDNotEmpty(this.CompanyExaminationSort, this.CompanyExaminationPaginator);
  }
  CompanyExaminationDelete(element: CompanyExamination) {
    this.CompanyExaminationService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyExaminationService.ComponentDeleteByParentIDNotEmpty(this.CompanyExaminationSort, this.CompanyExaminationPaginator));
  }
  CompanyExaminationAdd(ID: number) {
    this.CompanyExaminationService.BaseParameter.ID = ID;
    this.CompanyExaminationService.GetByIDAsync().subscribe(
      res => {
        this.CompanyExaminationService.FormData = res as CompanyExamination;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CompanyExaminationDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyExaminationSearch();
        });
      },
      err => {
      }
    );
  }
}
