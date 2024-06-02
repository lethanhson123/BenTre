import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { CauHoiATTPQuestions } from 'src/app/shared/CauHoiATTPQuestions.model';
import { CauHoiATTPQuestionsService } from 'src/app/shared/CauHoiATTPQuestions.service';

import { CauHoiATTP } from 'src/app/shared/CauHoiATTP.model';
import { CauHoiATTPService } from 'src/app/shared/CauHoiATTP.service';

@Component({
  selector: 'app-co-so-cau-hoi-attp',
  templateUrl: './co-so-cau-hoi-attp.component.html',
  styleUrls: ['./co-so-cau-hoi-attp.component.css']
})
export class CoSoCauHoiATTPComponent implements OnInit {

  @ViewChild('CauHoiATTPSort') CauHoiATTPSort: MatSort;
  @ViewChild('CauHoiATTPPaginator') CauHoiATTPPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public CauHoiATTPQuestionsService: CauHoiATTPQuestionsService,

    public CauHoiATTPService: CauHoiATTPService,
  ) { }

  ngOnInit(): void {
    this.CauHoiATTPSearch();
  }

  CauHoiATTPSearch() {
    this.CauHoiATTPService.IsShowLoading = true;
    this.CauHoiATTPService.BaseParameter.Active = true;
    this.CauHoiATTPService.GetByActiveToListAsync().subscribe(
      res => {
        this.CauHoiATTPService.List = (res as CauHoiATTP[]).sort((a, b) => (a.ParentID > b.ParentID ? 1 : -1));
        if (this.CauHoiATTPService.List) {
          if (this.CauHoiATTPService.List.length > 0) {
            this.CauHoiATTPService.IsShowLoading = true;
            this.CauHoiATTPQuestionsService.GetAllToListAsync().subscribe(
              res => {
                this.CauHoiATTPQuestionsService.List = (res as CauHoiATTPQuestions[]).sort((a, b) => (a.ParentID > b.ParentID ? 1 : -1));
                if (this.CauHoiATTPQuestionsService.List) {
                  if (this.CauHoiATTPQuestionsService.List.length > 0) {
                    for (let i = 0; i < this.CauHoiATTPService.List.length; i++) {
                      this.CauHoiATTPService.List[i].ListCauHoiATTPQuestions = this.CauHoiATTPQuestionsService.List.filter(item => item.ParentID == this.CauHoiATTPService.List[i].ID);
                    }
                    this.CauHoiATTPService.DataSource = new MatTableDataSource(this.CauHoiATTPService.List);
                    this.CauHoiATTPService.DataSource.sort = this.CauHoiATTPSort;
                    this.CauHoiATTPService.DataSource.paginator = this.CauHoiATTPPaginator;
                  }
                }
                this.CauHoiATTPService.IsShowLoading = false;
              },
              err => {
                this.CauHoiATTPService.IsShowLoading = false;
              }
            );
          }
        }
        this.CauHoiATTPService.IsShowLoading = false;
      },
      err => {
        this.CauHoiATTPService.IsShowLoading = false;
      }
    );
  }
}
