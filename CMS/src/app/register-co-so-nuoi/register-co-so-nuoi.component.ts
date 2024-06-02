import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { RegisterCoSoNuoi } from 'src/app/shared/RegisterCoSoNuoi.model';
import { RegisterCoSoNuoiService } from 'src/app/shared/RegisterCoSoNuoi.service';

@Component({
  selector: 'app-register-co-so-nuoi',
  templateUrl: './register-co-so-nuoi.component.html',
  styleUrls: ['./register-co-so-nuoi.component.css']
})
export class RegisterCoSoNuoiComponent implements OnInit {
  @ViewChild('RegisterCoSoNuoiSort') RegisterCoSoNuoiSort: MatSort;
  @ViewChild('RegisterCoSoNuoiPaginator') RegisterCoSoNuoiPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public RegisterCoSoNuoiService: RegisterCoSoNuoiService,
  ) { }

  ngOnInit(): void {
  }

  RegisterCoSoNuoiSearch() {
    this.RegisterCoSoNuoiService.SearchAll(this.RegisterCoSoNuoiSort, this.RegisterCoSoNuoiPaginator);
  }
  RegisterCoSoNuoiSave(element: RegisterCoSoNuoi) {
    this.RegisterCoSoNuoiService.FormData = element;
    this.NotificationService.warn(this.RegisterCoSoNuoiService.ComponentSaveAll(this.RegisterCoSoNuoiSort, this.RegisterCoSoNuoiPaginator));
  }
  RegisterCoSoNuoiDelete(element: RegisterCoSoNuoi) {
    this.RegisterCoSoNuoiService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.RegisterCoSoNuoiService.ComponentDeleteAll(this.RegisterCoSoNuoiSort, this.RegisterCoSoNuoiPaginator));
  }
}
