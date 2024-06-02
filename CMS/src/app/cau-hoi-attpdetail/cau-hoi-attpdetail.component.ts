import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';
import { CauHoiNhom } from 'src/app/shared/CauHoiNhom.model';
import { CauHoiNhomService } from 'src/app/shared/CauHoiNhom.service';

import { CauHoiATTP } from 'src/app/shared/CauHoiATTP.model';
import { CauHoiATTPService } from 'src/app/shared/CauHoiATTP.service';
import { CauHoiATTPQuestions } from 'src/app/shared/CauHoiATTPQuestions.model';
import { CauHoiATTPQuestionsService } from 'src/app/shared/CauHoiATTPQuestions.service';

@Component({
  selector: 'app-cau-hoi-attpdetail',
  templateUrl: './cau-hoi-attpdetail.component.html',
  styleUrls: ['./cau-hoi-attpdetail.component.css']
})
export class CauHoiATTPDetailComponent implements OnInit {

  @ViewChild('CauHoiATTPQuestionsSort') CauHoiATTPQuestionsSort: MatSort;
  @ViewChild('CauHoiATTPQuestionsPaginator') CauHoiATTPQuestionsPaginator: MatPaginator;

  constructor(
    public dialogRef: MatDialogRef<CauHoiATTPDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CauHoiNhomService: CauHoiNhomService,

    public CauHoiATTPService: CauHoiATTPService,
    public CauHoiATTPQuestionsService: CauHoiATTPQuestionsService,
  ) { }

  ngOnInit(): void {
    this.CauHoiNhomSearch();
    this.CauHoiATTPQuestionsSearch();
  }

  CauHoiNhomSearch() {
    this.CauHoiNhomService.ComponentGetAllToListAsync();
  }

  CauHoiATTPSave() {
    this.NotificationService.warn(this.CauHoiATTPService.ComponentSaveForm());
  }

  Close() {
    this.dialogRef.close();
  }

  CauHoiATTPQuestionsSearch() {
    this.CauHoiATTPQuestionsService.BaseParameter.ParentID = this.CauHoiATTPService.FormData.ID;
    this.CauHoiATTPQuestionsService.SearchByParentID(this.CauHoiATTPQuestionsSort, this.CauHoiATTPQuestionsPaginator);
  }
  CauHoiATTPQuestionsSave(element: CauHoiATTPQuestions) {
    this.CauHoiATTPQuestionsService.BaseParameter.ParentID = this.CauHoiATTPService.FormData.ID;
    element.ParentID = this.CauHoiATTPService.FormData.ID;
    this.CauHoiATTPQuestionsService.FormData = element;
    this.NotificationService.warn(this.CauHoiATTPQuestionsService.ComponentSaveByParentID(this.CauHoiATTPQuestionsSort, this.CauHoiATTPQuestionsPaginator));
  }
  CauHoiATTPQuestionsDelete(element: CauHoiATTPQuestions) {
    this.CauHoiATTPQuestionsService.BaseParameter.ParentID = this.CauHoiATTPService.FormData.ID;
    this.CauHoiATTPQuestionsService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.CauHoiATTPQuestionsService.ComponentDeleteByParentID(this.CauHoiATTPQuestionsSort, this.CauHoiATTPQuestionsPaginator));
  }

}
