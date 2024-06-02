import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CauHoiATTPQuestions } from 'src/app/shared/CauHoiATTPQuestions.model';
import { CauHoiATTPQuestionsService } from 'src/app/shared/CauHoiATTPQuestions.service';

import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { CompanyExaminationService } from 'src/app/shared/CompanyExamination.service';
import { CompanyExaminationQuestions } from 'src/app/shared/CompanyExaminationQuestions.model';
import { CompanyExaminationQuestionsService } from 'src/app/shared/CompanyExaminationQuestions.service';
import { CompanyStaffExam } from 'src/app/shared/CompanyStaffExam.model';
import { CompanyStaffExamService } from 'src/app/shared/CompanyStaffExam.service';
import { CompanyStaffExamAnswers } from 'src/app/shared/CompanyStaffExamAnswers.model';
import { CompanyStaffExamAnswersService } from 'src/app/shared/CompanyStaffExamAnswers.service';

@Component({
  selector: 'app-co-so-company-staff-exam-detail',
  templateUrl: './co-so-company-staff-exam-detail.component.html',
  styleUrls: ['./co-so-company-staff-exam-detail.component.css']
})
export class CoSoCompanyStaffExamDetailComponent implements OnInit {

  @ViewChild('CompanyExaminationQuestionsSort') CompanyExaminationQuestionsSort: MatSort;
  @ViewChild('CompanyExaminationQuestionsPaginator') CompanyExaminationQuestionsPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CoSoCompanyStaffExamDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CauHoiATTPQuestionsService: CauHoiATTPQuestionsService,

    public CompanyExaminationService: CompanyExaminationService,
    public CompanyExaminationQuestionsService: CompanyExaminationQuestionsService,
    public CompanyStaffExamService: CompanyStaffExamService,
    public CompanyStaffExamAnswersService: CompanyStaffExamAnswersService,

  ) { }

  ngOnInit(): void {
    this.CompanyStaffExamSearch();
  }

  CompanyStaffExamAnswersActiveChange(element: CompanyExaminationQuestions, itemCauHoiATTPQuestions: CauHoiATTPQuestions, listCauHoiATTPQuestions: CauHoiATTPQuestions[]) {
    if (itemCauHoiATTPQuestions.Active == true) {
      this.CompanyStaffExamService.IsShowLoading = true;
      this.CompanyStaffExamAnswersService.FormData.ParentID = this.CompanyStaffExamService.FormData.ID;
      this.CompanyStaffExamAnswersService.FormData.CompanyExaminationQuestionsID = element.ID;
      this.CompanyStaffExamAnswersService.FormData.CauHoiATTPID = element.CauHoiATTPID;
      this.CompanyStaffExamAnswersService.FormData.CauHoiATTPQuestionsID = itemCauHoiATTPQuestions.ID;
      this.CompanyStaffExamAnswersService.SaveAsync().subscribe(
        res => {          
          for (let i = 0; i < listCauHoiATTPQuestions.length; i++) {
            listCauHoiATTPQuestions[i].Active = false;
          }
          itemCauHoiATTPQuestions.Active = true;
          this.NotificationService.warn(environment.SaveSuccess);
          this.CompanyStaffExamService.IsShowLoading = false;
        },
        err => {
          this.NotificationService.warn(environment.SaveNotSuccess);
          this.CompanyStaffExamService.IsShowLoading = false;
        }
      );
    }
  }

  CompanyStaffExamSearch() {
    if (this.CompanyStaffExamService.FormData) {
      if (this.CompanyStaffExamService.FormData.ID > 0) {
        this.CompanyStaffExamService.IsShowLoading = true;
        this.CompanyExaminationService.BaseParameter.ID = this.CompanyStaffExamService.FormData.ParentID;
        this.CompanyExaminationService.GetByIDAsync().subscribe(
          res => {
            this.CompanyExaminationService.FormData = res as CompanyExamination;
            this.CompanyExaminationQuestionsSearch();
            this.CompanyStaffExamService.IsShowLoading = false;
          },
          err => {
            this.CompanyStaffExamService.IsShowLoading = false;
          }
        );
      }
    }
  }
  CompanyExaminationQuestionsSearch() {
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.SearchByParentIDNotEmpty(this.CompanyExaminationQuestionsSort, this.CompanyExaminationQuestionsPaginator);

    this.CompanyStaffExamService.IsShowLoading = true;
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.GetByParentIDToListAsync().subscribe(
      res => {
        this.CompanyExaminationQuestionsService.List = (res as CompanyExaminationQuestions[]).sort((a, b) => (a.ParentID > b.ParentID ? 1 : -1));

        if (this.CompanyExaminationQuestionsService.List) {
          if (this.CompanyExaminationQuestionsService.List.length > 0) {
            this.CompanyStaffExamService.IsShowLoading = true;
            this.CauHoiATTPQuestionsService.GetAllToListAsync().subscribe(
              res => {
                this.CauHoiATTPQuestionsService.List = (res as CauHoiATTPQuestions[]).sort((a, b) => (a.ParentID > b.ParentID ? 1 : -1));
                if (this.CauHoiATTPQuestionsService.List) {
                  if (this.CauHoiATTPQuestionsService.List.length > 0) {
                    for (let i = 0; i < this.CompanyExaminationQuestionsService.List.length; i++) {
                      this.CompanyExaminationQuestionsService.List[i].ListCauHoiATTPQuestions = this.CauHoiATTPQuestionsService.List.filter(item => item.ParentID == this.CompanyExaminationQuestionsService.List[i].CauHoiATTPID);
                    }
                    console.log(this.CompanyExaminationQuestionsService.List);
                    this.CompanyExaminationQuestionsService.DataSource = new MatTableDataSource(this.CompanyExaminationQuestionsService.List);
                    this.CompanyExaminationQuestionsService.DataSource.sort = this.CompanyExaminationQuestionsSort;
                    this.CompanyExaminationQuestionsService.DataSource.paginator = this.CompanyExaminationQuestionsPaginator;
                  }
                }
                this.CompanyStaffExamService.IsShowLoading = false;
              },
              err => {
                this.CompanyStaffExamService.IsShowLoading = false;
              }
            );
          }
        }
        this.CompanyStaffExamService.IsShowLoading = false;
      },
      err => {
        this.CompanyStaffExamService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }
}
