import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { CompanyExaminationService } from 'src/app/shared/CompanyExamination.service';

import { CompanyStaffExam } from 'src/app/shared/CompanyStaffExam.model';
import { CompanyStaffExamService } from 'src/app/shared/CompanyStaffExam.service';

import { CoSoCompanyExaminationDetailComponent } from '../co-so-company-examination-detail/co-so-company-examination-detail.component';
import { CoSoCompanyStaffExamDetailComponent } from '../co-so-company-staff-exam-detail/co-so-company-staff-exam-detail.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-company-examination',
  templateUrl: './co-so-company-examination.component.html',
  styleUrls: ['./co-so-company-examination.component.css']
})
export class CoSoCompanyExaminationComponent implements OnInit {

  @ViewChild('CompanyExaminationSort') CompanyExaminationSort: MatSort;
  @ViewChild('CompanyExaminationPaginator') CompanyExaminationPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CompanyExaminationService: CompanyExaminationService,
    public CompanyStaffExamService: CompanyStaffExamService,

    public ThanhVienService: ThanhVienService,

  ) { }

  ngOnInit(): void {
    this.CompanyExaminationSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  CompanyExaminationSearch() {
    this.CompanyExaminationService.BaseParameter.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyExaminationService.SearchByParentIDNotEmpty(this.CompanyExaminationSort, this.CompanyExaminationPaginator);
  }
  CompanyExaminationDelete(element: CompanyExamination) {
    this.CompanyExaminationService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyExaminationService.ComponentDeleteByParentIDNotEmpty(this.CompanyExaminationSort, this.CompanyExaminationPaginator));
  }
  CompanyExaminationAdd(ID: number) {
    this.CompanyExaminationService.IsShowLoading = true;
    this.CompanyExaminationService.BaseParameter.ID = ID;
    this.CompanyExaminationService.GetByIDAsync().subscribe(
      res => {
        this.CompanyExaminationService.FormData = res as CompanyExamination;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CoSoCompanyExaminationDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CompanyExaminationSearch();
        });

        this.CompanyExaminationService.IsShowLoading = false;
      },
      err => {
        this.CompanyExaminationService.IsShowLoading = false;
      }
    );
  }
  CompanyStaffExamSave(ID: number) {
    this.CompanyExaminationService.IsShowLoading = true;
    this.CompanyStaffExamService.FormData.ParentID = ID;
    this.CompanyStaffExamService.FormData.ThanhVienID = environment.ThanhVienIDNumber;
    this.CompanyStaffExamService.SaveAsync().subscribe(
      res => {
        this.CompanyStaffExamService.FormData = res as CompanyStaffExam;        
        if (this.CompanyStaffExamService.FormData) {
          if (this.CompanyStaffExamService.FormData.ID > 0) {
            const dialogConfig = new MatDialogConfig();
            dialogConfig.disableClose = true;
            dialogConfig.autoFocus = true;
            dialogConfig.width = environment.DialogConfigWidth;
            dialogConfig.data = { ID: ID };
            const dialog = this.dialog.open(CoSoCompanyStaffExamDetailComponent, dialogConfig);
            dialog.afterClosed().subscribe(() => {
            });
          }
        }
        this.CompanyExaminationService.IsShowLoading = false;
      },
      err => {
        this.CompanyExaminationService.IsShowLoading = false;
      }
    );
  }
}