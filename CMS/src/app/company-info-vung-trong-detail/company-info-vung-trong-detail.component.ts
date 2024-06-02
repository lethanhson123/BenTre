import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { DistrictData } from 'src/app/shared/DistrictData.model';
import { DistrictDataService } from 'src/app/shared/DistrictData.service';
import { WardData } from 'src/app/shared/WardData.model';
import { WardDataService } from 'src/app/shared/WardData.service';

import { ProductGroup } from 'src/app/shared/ProductGroup.model';
import { ProductGroupService } from 'src/app/shared/ProductGroup.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyInfoVungTrong } from 'src/app/shared/CompanyInfoVungTrong.model';
import { CompanyInfoVungTrongService } from 'src/app/shared/CompanyInfoVungTrong.service';
import { CompanyInfoVungTrongNongHo } from 'src/app/shared/CompanyInfoVungTrongNongHo.model';
import { CompanyInfoVungTrongNongHoService } from 'src/app/shared/CompanyInfoVungTrongNongHo.service';

import { CompanyInfoVungTrongDocuments } from 'src/app/shared/CompanyInfoVungTrongDocuments.model';
import { CompanyInfoVungTrongDocumentsService } from 'src/app/shared/CompanyInfoVungTrongDocuments.service';

import { CompanyInfoVungTrongToaDo } from 'src/app/shared/CompanyInfoVungTrongToaDo.model';
import { CompanyInfoVungTrongToaDoService } from 'src/app/shared/CompanyInfoVungTrongToaDo.service';

import { PlanThamDinh } from 'src/app/shared/PlanThamDinh.model';
import { PlanThamDinhService } from 'src/app/shared/PlanThamDinh.service';

import { PlanThamDinhCompanyDocument } from 'src/app/shared/PlanThamDinhCompanyDocument.model';
import { PlanThamDinhCompanyDocumentService } from 'src/app/shared/PlanThamDinhCompanyDocument.service';
import { PlanThamDinhCompanyDocumentDetailComponent } from '../plan-tham-dinh-company-document-detail/plan-tham-dinh-company-document-detail.component';

import { ThanhVien } from 'src/app/shared/ThanhVien.model';
import { ThanhVienService } from 'src/app/shared/ThanhVien.service';

import { DanhMucATTPLoaiHoSo } from 'src/app/shared/DanhMucATTPLoaiHoSo.model';
import { DanhMucATTPLoaiHoSoService } from 'src/app/shared/DanhMucATTPLoaiHoSo.service';

import { DanhMucATTPTinhTrang } from 'src/app/shared/DanhMucATTPTinhTrang.model';
import { DanhMucATTPTinhTrangService } from 'src/app/shared/DanhMucATTPTinhTrang.service';

import * as maplibregl from 'maplibre-gl';
import { ThanhVienDetailComponent } from '../thanh-vien-detail/thanh-vien-detail.component';
import { ThanhVienDetail001Component } from '../thanh-vien-detail001/thanh-vien-detail001.component';
import { CompanyInfoVungTrongDocumentsDetailComponent } from '../company-info-vung-trong-documents-detail/company-info-vung-trong-documents-detail.component';

@Component({
  selector: 'app-company-info-vung-trong-detail',
  templateUrl: './company-info-vung-trong-detail.component.html',
  styleUrls: ['./company-info-vung-trong-detail.component.css']
})
export class CompanyInfoVungTrongDetailComponent implements OnInit {
  @ViewChild('CompanyInfoVungTrongSanPhamSort') CompanyInfoVungTrongSanPhamSort: MatSort;
  @ViewChild('CompanyInfoVungTrongSanPhamPaginator') CompanyInfoVungTrongSanPhamPaginator: MatPaginator;

  @ViewChild('CompanyInfoVungTrongThiTruongSort') CompanyInfoVungTrongThiTruongSort: MatSort;
  @ViewChild('CompanyInfoVungTrongThiTruongPaginator') CompanyInfoVungTrongThiTruongPaginator: MatPaginator;

  @ViewChild('CompanyInfoVungTrongNongHoSort') CompanyInfoVungTrongNongHoSort: MatSort;
  @ViewChild('CompanyInfoVungTrongNongHoPaginator') CompanyInfoVungTrongNongHoPaginator: MatPaginator;

  @ViewChild('CompanyInfoVungTrongDocumentsSort') CompanyInfoVungTrongDocumentsSort: MatSort;
  @ViewChild('CompanyInfoVungTrongDocumentsPaginator') CompanyInfoVungTrongDocumentsPaginator: MatPaginator;

  @ViewChild('CompanyInfoVungTrongToaDoSort') CompanyInfoVungTrongToaDoSort: MatSort;
  @ViewChild('CompanyInfoVungTrongToaDoPaginator') CompanyInfoVungTrongToaDoPaginator: MatPaginator;

  @ViewChild('PlanThamDinhCompanyDocumentSort') PlanThamDinhCompanyDocumentSort: MatSort;
  @ViewChild('PlanThamDinhCompanyDocumentPaginator') PlanThamDinhCompanyDocumentPaginator: MatPaginator;



  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyInfoVungTrongDetailComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public ProductGroupService: ProductGroupService,

    public DistrictDataService: DistrictDataService,
    public WardDataService: WardDataService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyInfoVungTrongService: CompanyInfoVungTrongService,
    public CompanyInfoVungTrongNongHoService: CompanyInfoVungTrongNongHoService,

    public CompanyInfoVungTrongDocumentsService: CompanyInfoVungTrongDocumentsService,
    public CompanyInfoVungTrongToaDoService: CompanyInfoVungTrongToaDoService,
    public PlanThamDinhCompanyDocumentService: PlanThamDinhCompanyDocumentService,
    public PlanThamDinhService: PlanThamDinhService,

    public ThanhVienService: ThanhVienService,
    public DanhMucATTPLoaiHoSoService: DanhMucATTPLoaiHoSoService,
    public DanhMucATTPTinhTrangService: DanhMucATTPTinhTrangService,
  ) { }

  ngOnInit(): void {
    this.CompanyInfoVungTrongService.FormData.ProvinceDataID = environment.ProvinceDataIDBenTre;
    this.ThanhVienGetLogin();
    this.ProductGroupSearch();
    this.DistrictDataSearch();
    this.CompanyInfoVungTrongDocumentsSearch();
    this.CompanyInfoVungTrongToaDoSearch();
    this.CompanyInfoVungTrongNongHoSearch();
    this.DanhMucATTPLoaiHoSoSearch();
    this.DanhMucATTPTinhTrangSearch();
    this.ThanhVienSearch();
    this.CompanyInfoSearch();
  }

  ThanhVienGetLogin() {
    this.ThanhVienService.GetLogin();
  }
  CompanyInfoChange() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoService.BaseParameter.ID = this.CompanyInfoVungTrongService.FormData.ParentID;
    this.CompanyInfoService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoService.FormData = res as CompanyInfo;
        this.CompanyInfoVungTrongService.FormData.Name = this.CompanyInfoService.FormData.Name;
        this.CompanyInfoVungTrongService.FormData.DaiDienCoSo = this.CompanyInfoService.FormData.fullname;
        this.CompanyInfoVungTrongService.FormData.DaiDienCoSoChucVu = this.CompanyInfoService.FormData.role_name;
        this.CompanyInfoVungTrongService.FormData.DaiDienCoSoDienThoai = this.CompanyInfoService.FormData.phone;
        this.CompanyInfoVungTrongService.FormData.DaiDienCoSoEmail = this.CompanyInfoService.FormData.email;

        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoSearch() {
    this.CompanyInfoService.ComponentGet000ToListAsync();
  }
  CompanyInfoFilter(searchString: string) {
    this.CompanyInfoService.Filter000(searchString);
  }

  DanhMucATTPTinhTrangSearch() {
    this.DanhMucATTPTinhTrangService.ComponentGetAllToListAsync();
  }

  DanhMucATTPLoaiHoSoSearch() {
    this.DanhMucATTPLoaiHoSoService.ComponentGetAllToListAsync();
  }

  DistrictDataSearch() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.DistrictDataService.BaseParameter.ParentID = environment.ProvinceDataIDBenTre;
    this.DistrictDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.DistrictDataService.List = (res as DistrictData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.WardDataSearch();
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  WardDataSearch() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.WardDataService.BaseParameter.ParentID = this.CompanyInfoVungTrongService.FormData.DistrictDataID;
    this.WardDataService.GetByParentIDToListAsync().subscribe(
      res => {
        this.WardDataService.List = (res as WardData[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  ProductGroupSearch() {
    this.ProductGroupService.ComponentGetAllToListAsync();
  }


  CompanyInfoVungTrongToaDoSearch() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongToaDoService.BaseParameter.SearchString = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongToaDoService.GetBySearchStringToListAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongToaDoService.List = (res as CompanyInfoVungTrongToaDo[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoVungTrongToaDoService.DataSource = new MatTableDataSource(this.CompanyInfoVungTrongToaDoService.List);
        this.CompanyInfoVungTrongToaDoService.DataSource.sort = this.CompanyInfoVungTrongToaDoSort;
        this.CompanyInfoVungTrongToaDoService.DataSource.paginator = this.CompanyInfoVungTrongToaDoPaginator;
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongToaDoSave(element: CompanyInfoVungTrongToaDo) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoVungTrongService.FormData.ID;
    element.Code = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongToaDoService.FormData = element;
    this.CompanyInfoVungTrongToaDoService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongToaDoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoVungTrongDocumentsSearch() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.BaseParameter.SearchString = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongDocumentsService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.List = (res as CompanyInfoVungTrongDocuments[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoVungTrongDocumentsService.DataSource = new MatTableDataSource(
          this.CompanyInfoVungTrongDocumentsService.List.filter(x => x.IsPheDuyet != true)
        );
        this.CompanyInfoVungTrongDocumentsService.DataSource.sort = this.CompanyInfoVungTrongDocumentsSort;
        this.CompanyInfoVungTrongDocumentsService.DataSource.paginator = this.CompanyInfoVungTrongDocumentsPaginator;

        this.CompanyInfoVungTrongDocumentsService.DataSource002 = new MatTableDataSource(
          this.CompanyInfoVungTrongDocumentsService.List.filter(x => x.IsPheDuyet == true || x.ID == 0)
        );
        this.CompanyInfoVungTrongDocumentsService.DataSource002.sort = this.CompanyInfoVungTrongDocumentsSort;
        this.CompanyInfoVungTrongDocumentsService.DataSource002.paginator = this.CompanyInfoVungTrongDocumentsPaginator;
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongDocumentsSave(element: CompanyInfoVungTrongDocuments) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoVungTrongService.FormData.ID;
    element.Code = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongDocumentsService.FormData = element;
    this.CompanyInfoVungTrongDocumentsService.SaveAndUploadFileAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.FormData = (res as CompanyInfoVungTrongDocuments);
        element.FileName = this.CompanyInfoVungTrongDocumentsService.FormData.FileName;
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongDocumentsDelete(element: CompanyInfoVungTrongDocuments) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.BaseParameter.ID = element.ID;
    this.CompanyInfoVungTrongDocumentsService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoVungTrongDocumentsAdd(element: CompanyInfoVungTrongDocuments) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongDocumentsService.BaseParameter.ID = element.ID;
    this.CompanyInfoVungTrongDocumentsService.GetByIDAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongDocumentsService.FormData = res as CompanyInfoVungTrongDocuments;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.CompanyInfoVungTrongDocumentsService.FormData.ID };
        const dialog = this.dialog.open(CompanyInfoVungTrongDocumentsDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  ChangeFileName(element: CompanyInfoVungTrongDocuments, files: FileList) {
    if (files) {
      this.CompanyInfoVungTrongDocumentsService.FileToUpload = files;
      this.CompanyInfoVungTrongDocumentsSave(element);
    }
  }


  CompanyInfoVungTrongNongHoSearch() {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongNongHoService.BaseParameter.SearchString = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongNongHoService.GetBySearchStringAndEmptyToListAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongNongHoService.List = (res as CompanyInfoVungTrongNongHo[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
        this.CompanyInfoVungTrongNongHoService.DataSource = new MatTableDataSource(this.CompanyInfoVungTrongNongHoService.List);
        this.CompanyInfoVungTrongNongHoService.DataSource.sort = this.CompanyInfoVungTrongNongHoSort;
        this.CompanyInfoVungTrongNongHoService.DataSource.paginator = this.CompanyInfoVungTrongNongHoPaginator;
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongNongHoSave(element: CompanyInfoVungTrongNongHo) {
    console.log('element:',element);
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    element.ParentID = this.CompanyInfoVungTrongService.FormData.ID;
    element.Code = this.CompanyInfoVungTrongService.FormData.Code;
    this.CompanyInfoVungTrongNongHoService.FormData = element;
    this.CompanyInfoVungTrongNongHoService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongNongHoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  CompanyInfoVungTrongNongHoDelete(element: CompanyInfoVungTrongNongHo) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongNongHoService.BaseParameter.ID = element.ID;
    this.CompanyInfoVungTrongNongHoService.RemoveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongNongHoSearch();
        this.NotificationService.warn(environment.SaveSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  CompanyInfoVungTrongSave() {
    console.log('test');
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.CompanyInfoVungTrongService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.CompanyInfoVungTrongService.FormData.PlanTypeID = environment.PlanTypeIDDangKyMaDongGoi;
    this.CompanyInfoVungTrongService.SaveAsync().subscribe(
      res => {
        this.CompanyInfoVungTrongService.FormData = res as CompanyInfoVungTrong;

        //this.PlanThamDinhSave();
        this.NotificationService.warn(this.PlanThamDinhService.ComponentSaveForm());
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  PlanThamDinhSave() {
    this.PlanThamDinhService.IsShowLoading = true;
    this.PlanThamDinhService.FormData.ParentID = environment.PlanTypeIDDangKyMaDongGoi;
    this.PlanThamDinhService.FormData.StateAgencyID = environment.StateAgencyIDChiCucBaoVeThucVat;
    this.PlanThamDinhService.SaveAsync().subscribe(
      res => {
        this.NotificationService.warn(environment.SaveSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      },
      err => {
        this.NotificationService.warn(environment.SaveNotSuccess);
        this.PlanThamDinhService.IsShowLoading = false;
      }
    );
  }

  /*
  CompanyInfoVungTrongSave() {
    this.CompanyInfoVungTrongService.FormData.ParentID = this.ThanhVienService.FormDataLogin.CompanyInfoID;
    this.NotificationService.warn(this.CompanyInfoVungTrongService.ComponentSaveForm());
  }
  */

  PlanThamDinhCompanyDocumentAdd(DocumentTemplateID: number) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.PlanThamDinhID = this.CompanyInfoVungTrongService.FormData.ID;
    this.PlanThamDinhCompanyDocumentService.BaseParameter.DocumentTemplateID = DocumentTemplateID;
    this.PlanThamDinhCompanyDocumentService.GetByPlanThamDinhID_DocumentTemplateIDAsync().subscribe(
      res => {
        this.PlanThamDinhCompanyDocumentService.FormData = res as PlanThamDinhCompanyDocument;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: this.PlanThamDinhCompanyDocumentService.FormData.ID };
        const dialog = this.dialog.open(PlanThamDinhCompanyDocumentDetailComponent, dialogConfig);
        dialog.afterClosed().subscribe(() => {
        });
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }
  ThanhVienSearch() {
    this.ThanhVienService.BaseParameter.ParentID = environment.DanhMucThanhVienIDNhanVien;
    this.ThanhVienService.BaseParameter.Active = true;
    this.ThanhVienService.ComponentGetByParentIDToListAsync();
  }
  ThanhVienAdd(ID: number) {
    this.CompanyInfoVungTrongService.IsShowLoading = true;
    this.ThanhVienService.BaseParameter.ID = ID;
    this.ThanhVienService.GetByIDAsync().subscribe(
      res => {
        this.ThanhVienService.FormData = res as ThanhVien;
        this.ThanhVienService.FormData.ParentID = environment.DanhMucThanhVienIDNhanVien;
        //this.ThanhVienService.FormData.PlanThamDinhID = this.PlanThamDinhService.FormData.ID;
        //this.ThanhVienService.FormData.PlanThamDinhCode = this.PlanThamDinhService.FormData.Code;
        const dialogConfig = new MatDialogConfig();
        dialogConfig.disableClose = true;
        dialogConfig.autoFocus = true;
        dialogConfig.width = environment.DialogConfigWidth;
        dialogConfig.data = { ID: ID };
        const dialog = this.dialog.open(ThanhVienDetail001Component, dialogConfig);
        dialog.afterClosed().subscribe(() => {
          this.ThanhVienSearch();
        });
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      },
      err => {
        this.CompanyInfoVungTrongService.IsShowLoading = false;
      }
    );
  }

  Close() {
    this.dialogRef.close();
  }


  map: maplibregl.Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {
    //this.MapLoad();
  }


  ngOnDestroy() {
    this.map?.remove();
  }

  MapInitialization(longitude, latitude) {
    let zoom = 10;
    if ((latitude > 90) || (latitude == 0)) {
      latitude = environment.Latitude;
      longitude = environment.Longitude;
    }
    this.map = new maplibregl.Map({
      container: this.mapContainer.nativeElement,
      style: 'https://api.maptiler.com/maps/hybrid/style.json?key=' + environment.MaptilerAPIKey,
      center: [longitude, latitude],
      zoom: zoom,
      pitch: 45,
    });

    this.map.addControl(
      new maplibregl.NavigationControl({
        visualizePitch: true,
        showZoom: true,
        showCompass: true
      })
    );
    this.map.addControl(
      new maplibregl.FullscreenControl({
      })
    );
    this.map.on('load', () => {

      this.map.addSource("HoangSa", {
        "type": "image",
        "url": environment.DomainURL + "assets/image/HoangSa01.png",
        "coordinates": [
          [111.09665858054495, 17.432475898867523],
          [113.11720985517763, 17.38420482529338],
          [112.79285037220984, 15.643938718432054],
          [110.88537855035554, 15.672592116966598],
        ]
      });
      this.map.addLayer({
        "id": "HoangSa",
        "source": "HoangSa",
        "type": "raster",
        "paint": {
          "raster-opacity": 1
        }
      });

      this.map.addSource("TruongSa", {
        "type": "image",
        "url": environment.DomainURL + "assets/image/TruongSa01.png",
        "coordinates": [
          [112.32373278444106, 12.236103169381323],
          [117.4620551483049, 11.606334626304161],
          [115.59654957671216, 7.357025445897818],
          [110.62186805246108, 7.811210355974268],


        ]
      });
      this.map.addLayer({
        "id": "TruongSa",
        "source": "TruongSa",
        "type": "raster",
        "paint": {
          "raster-opacity": 1
        }
      });

    });
  }

  MapLoad() {

    document.getElementById("map").style.height = "500px";

    if (this.CompanyInfoVungTrongService.FormData) {
      let latitude = environment.Latitude;
      let longitude = environment.Longitude;
      if (this.CompanyInfoVungTrongService.FormData.KinhDo > 0) {
        if (this.CompanyInfoVungTrongService.FormData.ViDo > 0) {
          latitude = Number(this.CompanyInfoVungTrongService.FormData.ViDo);
          longitude = Number(this.CompanyInfoVungTrongService.FormData.KinhDo);
        }
      }
      this.MapInitialization(longitude, latitude);
      if (latitude <= 90) {
        let popupContent = "<div style='opacity: 0.8; background-color: transparent;'>";
        popupContent = popupContent + "<a style='text-align: center;' class='link-primary form-label' href='#'><h1>" + this.CompanyInfoVungTrongService.FormData.Name + " [" + this.CompanyInfoVungTrongService.FormData.ID + "]</h1></a>";
        popupContent = popupContent + "<div>Chủ cơ sở: <b>" + this.CompanyInfoVungTrongService.FormData.Name + "</b></div>";
        popupContent = popupContent + "<div>Điện thoại: <b>" + this.CompanyInfoVungTrongService.FormData.DaiDienCoSoDienThoai + "</b></div>";
        popupContent = popupContent + "<div>Địa chỉ: <b>" + this.CompanyInfoVungTrongService.FormData.DiaChi + "</b></div>";
        popupContent = popupContent + "<div>Ấp thôn: <b>" + this.CompanyInfoVungTrongService.FormData.ThonAp + "</b></div>";
        popupContent = popupContent + "<div>Xã phường: <b>" + this.CompanyInfoVungTrongService.FormData.WardDataName + "</b></div>";
        popupContent = popupContent + "<div>Quận huyện: <b>" + this.CompanyInfoVungTrongService.FormData.DistrictDataName + "</b></div>";
        popupContent = popupContent + "</div>";

        let popup = new maplibregl.Popup({ offset: 25 }).setHTML(popupContent)
          .setMaxWidth("600px");

        var el = document.createElement('div');
        el.style.backgroundImage = "url(" + environment.DomainURL + "assets/image/logo_30.png)";
        el.style.width = '30px';
        el.style.height = '30px';

        let marker = new maplibregl.Marker({ element: el })
          .setLngLat([longitude, latitude])
          .setPopup(popup)
          .addTo(this.map);
      }
    }
  }
}

