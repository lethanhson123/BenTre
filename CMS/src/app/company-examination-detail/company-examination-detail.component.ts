import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CauHoiATTP } from 'src/app/shared/CauHoiATTP.model';
import { CauHoiATTPService } from 'src/app/shared/CauHoiATTP.service';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { CompanyExamination } from 'src/app/shared/CompanyExamination.model';
import { CompanyExaminationService } from 'src/app/shared/CompanyExamination.service';
import { CompanyExaminationQuestions } from 'src/app/shared/CompanyExaminationQuestions.model';
import { CompanyExaminationQuestionsService } from 'src/app/shared/CompanyExaminationQuestions.service';
import { CompanyStaffExam } from 'src/app/shared/CompanyStaffExam.model';
import { CompanyStaffExamService } from 'src/app/shared/CompanyStaffExam.service';
import { CompanyStaffExamAnswers } from 'src/app/shared/CompanyStaffExamAnswers.model';
import { CompanyStaffExamAnswersService } from 'src/app/shared/CompanyStaffExamAnswers.service';
import { CauHoiATTPDetailComponent } from '../cau-hoi-attpdetail/cau-hoi-attpdetail.component';

@Component({
  selector: 'app-company-examination-detail',
  templateUrl: './company-examination-detail.component.html',
  styleUrls: ['./company-examination-detail.component.css']
})
export class CompanyExaminationDetailComponent implements OnInit {

  @ViewChild('CompanyExaminationQuestionsSort') CompanyExaminationQuestionsSort: MatSort;
  @ViewChild('CompanyExaminationQuestionsPaginator') CompanyExaminationQuestionsPaginator: MatPaginator;

  @ViewChild('CompanyStaffExamSort') CompanyStaffExamSort: MatSort;
  @ViewChild('CompanyStaffExamPaginator') CompanyStaffExamPaginator: MatPaginator;

  @ViewChild('CompanyStaffExamAnswersSort') CompanyStaffExamAnswersSort: MatSort;
  @ViewChild('CompanyStaffExamAnswersPaginator') CompanyStaffExamAnswersPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyExaminationDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CauHoiATTPService: CauHoiATTPService,
    public CauHoiNhomService: CauHoiNhomService,

    public CompanyInfoService: CompanyInfoService,
    public ThanhVienService: ThanhVienService,

    public CompanyExaminationService: CompanyExaminationService,
    public CompanyExaminationQuestionsService: CompanyExaminationQuestionsService,
    public CompanyStaffExamService: CompanyStaffExamService,
    public CompanyStaffExamAnswersService: CompanyStaffExamAnswersService,

  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
    this.CauHoiATTPSearch();
    this.ThanhVienSearch();


    this.CompanyExaminationQuestionsSearch();
  }

  DateNgayGhiNhan(value) {
    this.CompanyExaminationService.FormData.NgayGhiNhan = new Date(value);
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.BaseParameter.Active=true;
    this.CompanyInfoService.ComponentGetByActiveToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter001(searchString);
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }
  CauHoiATTPSearch() {
    this.CauHoiATTPService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.CauHoiNhomID;
    this.CauHoiATTPService.ComponentGetByParentIDToListAsync();
  }
  CauHoiATTPFilter(searchString: string) {
    this.CauHoiATTPService.Filter(searchString);
  }

  ThanhVienSearch() {
    this.CompanyExaminationService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.CompanyInfoID = this.CompanyExaminationService.FormData.ParentID;
    this.ThanhVienService.GetByCompanyInfoIDToListAsync().subscribe(
      res => {
        this.ThanhVienService.List = (res as CompanyStaffExamAnswers[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyExaminationService.IsShowLoading = false;
      },
      err => {
        this.CompanyExaminationService.IsShowLoading = false;
      }
    );
  }

  CompanyExaminationSave() {
    this.NotificationService.warn(this.CompanyExaminationService.ComponentSaveForm());
  }



  CompanyExaminationQuestionsSearch() {
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.SearchByParentID(this.CompanyExaminationQuestionsSort, this.CompanyExaminationQuestionsPaginator);
  }
  CompanyExaminationQuestionsSave(element: CompanyExaminationQuestions) {
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    element.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.FormData = element;
    this.NotificationService.warn(this.CompanyExaminationQuestionsService.ComponentSaveByParentID(this.CompanyExaminationQuestionsSort, this.CompanyExaminationQuestionsPaginator));
  }
  CompanyExaminationQuestionsDelete(element: CompanyExaminationQuestions) {
    this.CompanyExaminationQuestionsService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyExaminationQuestionsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyExaminationQuestionsService.ComponentDeleteByParentID(this.CompanyExaminationQuestionsSort, this.CompanyExaminationQuestionsPaginator));
  }

  CompanyStaffExamSearch() {
    this.CompanyStaffExamService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyStaffExamService.SearchByParentIDNotEmpty(this.CompanyStaffExamSort, this.CompanyStaffExamPaginator);
  }
  CompanyStaffExamSave(element: CompanyStaffExam) {
    this.CompanyStaffExamService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    element.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyStaffExamService.FormData = element;
    this.NotificationService.warn(this.CompanyStaffExamService.ComponentSaveByParentID(this.CompanyStaffExamSort, this.CompanyStaffExamPaginator));
  }
  CompanyStaffExamDelete(element: CompanyStaffExam) {
    this.CompanyStaffExamService.BaseParameter.ParentID = this.CompanyExaminationService.FormData.ID;
    this.CompanyStaffExamService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CompanyStaffExamService.ComponentDeleteByParentID(this.CompanyStaffExamSort, this.CompanyStaffExamPaginator));
  }

  CompanyStaffExamAnswersSearch() {
    this.CompanyExaminationService.IsShowLoading = true;
    this.CompanyStaffExamAnswersService.BaseParameter.CompanyExaminationID = this.CompanyExaminationService.FormData.ID;
    this.CompanyStaffExamAnswersService.GetSQLByCompanyExaminationID_ThanhVienIDToListAsync().subscribe(
      res => {
        this.CompanyStaffExamAnswersService.List = (res as CompanyStaffExamAnswers[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyStaffExamAnswersService.DataSource = new MatTableDataSource(this.CompanyStaffExamAnswersService.List);
        this.CompanyStaffExamAnswersService.DataSource.sort = this.CompanyStaffExamAnswersSort;
        this.CompanyStaffExamAnswersService.DataSource.paginator = this.CompanyStaffExamAnswersPaginator;
        this.CompanyExaminationService.IsShowLoading = false;
      },
      err => {
        this.CompanyExaminationService.IsShowLoading = false;
      }
    );
  }
  CauHoiATTPAdd(ID: number) {
    this.CauHoiATTPService.BaseParameter.ID = ID;
    this.CauHoiATTPService.GetByIDAsync().subscribe(
      res => {
        this.CauHoiATTPService.FormData = res as CauHoiATTP;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(CauHoiATTPDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.CauHoiATTPSearch();
        });
      },
      err => {
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }
}
