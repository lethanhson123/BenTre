import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';

import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { CompanyExaminationService } from 'src/app/shared/CompanyExamination.service';
import { CompanyExaminationQuestions } from 'src/app/shared/CompanyExaminationQuestions.model';
import { CompanyExaminationQuestionsService } from 'src/app/shared/CompanyExaminationQuestions.service';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

@Component({
  selector: 'app-co-so-company-examination-detail',
  templateUrl: './co-so-company-examination-detail.component.html',
  styleUrls: ['./co-so-company-examination-detail.component.css']
})
export class CoSoCompanyExaminationDetailComponent implements OnInit {

  @ViewChild('CompanyExaminationQuestionsSort') CompanyExaminationQuestionsSort: MatSort;
  @ViewChild('CompanyExaminationQuestionsPaginator') CompanyExaminationQuestionsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CoSoCompanyExaminationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CauHoiNhomService: CauHoiNhomService,

    public CompanyExaminationService: CompanyExaminationService,
    public CompanyExaminationQuestionsService: CompanyExaminationQuestionsService,

    public ThanhVienService: ThanhVienService,

  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
    this.CompanyExaminationQuestionsSearch();
    this.ThanhVienGetLogin();
  }
  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  DateNgayGhiNhan(value) {
    this.CompanyExaminationService.FormData.NgayGhiNhan = new Date(value);
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }


  CompanyExaminationSave() {
    this.CompanyExaminationService.IsShowLoading = true;
    this.CompanyExaminationService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyExaminationService.SaveAsync().subscribe(
      res => {
        this.CompanyExaminationService.FormData = res as CompanyExamination;
        this.CompanyExaminationQuestionsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyExaminationService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyExaminationService.IsShowLoading = false;
      }
    );
  }
  CompanyExaminationQuestionsSearch() {
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.SearchByParentIDNotEmpty(this.CompanyExaminationQuestionsSort, this.CompanyExaminationQuestionsPaginator);
  }

  Close() {
    this.dialogRef.close();
  }
}