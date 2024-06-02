import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';

import { RegisterCoSoNuoiLakes } from 'src/app/shared/RegisterCoSoNuoiLakes.model';
import { RegisterCoSoNuoiLakesService } from 'src/app/shared/RegisterCoSoNuoiLakes.service';
@Component({
  selector: 'app-register-co-so-nuoi-lakes',
  templateUrl: './register-co-so-nuoi-lakes.component.html',
  styleUrls: ['./register-co-so-nuoi-lakes.component.css']
})
export class RegisterCoSoNuoiLakesComponent implements OnInit {
  @ViewChild('RegisterCoSoNuoiLakesSort') RegisterCoSoNuoiLakesSort: MatSort;
  @ViewChild('RegisterCoSoNuoiLakesPaginator') RegisterCoSoNuoiLakesPaginator: MatPaginator;

  constructor(
    private dialog: MatDialog,
    public NotificationService: NotificationService,

    public RegisterCoSoNuoiLakesService: RegisterCoSoNuoiLakesService,
  ) { }

  ngOnInit(): void {
  }

  RegisterCoSoNuoiLakesSearch() {
    this.RegisterCoSoNuoiLakesService.SearchAll(this.RegisterCoSoNuoiLakesSort, this.RegisterCoSoNuoiLakesPaginator);
  }
  RegisterCoSoNuoiLakesSave(element: RegisterCoSoNuoiLakes) {
    this.RegisterCoSoNuoiLakesService.FormData = element;
    this.NotificationService.warn(this.RegisterCoSoNuoiLakesService.ComponentSaveAll(this.RegisterCoSoNuoiLakesSort, this.RegisterCoSoNuoiLakesPaginator));
  }
  RegisterCoSoNuoiLakesDelete(element: RegisterCoSoNuoiLakes) {
    this.RegisterCoSoNuoiLakesService.BaseParameter.ID = element.ID;
    this.NotificationService.warn(this.RegisterCoSoNuoiLakesService.ComponentDeleteAll(this.RegisterCoSoNuoiLakesSort, this.RegisterCoSoNuoiLakesPaginator));
  }
}
