import { Component, OnInit, Inject, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NotificationService } from 'src/app/shared/Notification.service';

import { CompanyInfo } from 'src/app/shared/CompanyInfo.model';
import { CompanyInfoService } from 'src/app/shared/CompanyInfo.service';
import { CompanyLake } from 'src/app/shared/CompanyLake.model';
import { CompanyLakeService } from 'src/app/shared/CompanyLake.service';

import * as maplibregl from 'maplibre-gl';
@Component({
  selector: 'app-company-lake-map',
  templateUrl: './company-lake-map.component.html',
  styleUrls: ['./company-lake-map.component.css']
})
export class CompanyLakeMapComponent implements OnInit {

  domainURL: string = environment.DomainURL;

  constructor(
    private dialog: MatDialog,
    public dialogRef: MatDialogRef<CompanyLakeMapComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,

    public NotificationService: NotificationService,

    public CompanyInfoService: CompanyInfoService,
    public CompanyLakeService: CompanyLakeService,
  ) { }

  ngOnInit(): void {        
  }

  Close() {
    this.dialogRef.close();
  }

  map: maplibregl.Map | undefined;

  @ViewChild('map')
  private mapContainer!: ElementRef<HTMLElement>;

  ngAfterViewInit() {

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
    
    if (this.CompanyInfoService.FormData) {
      if (this.CompanyInfoService.FormData.ID > 0) {
        let latitude = environment.Latitude;
        let longitude = environment.Longitude;
        if (this.CompanyInfoService.FormData.longitude > 0) {
          if (this.CompanyInfoService.FormData.latitude > 0) {
            latitude = Number(this.CompanyInfoService.FormData.latitude);
            longitude = Number(this.CompanyInfoService.FormData.longitude);
          }
        }
        this.MapInitialization(longitude, latitude);
        
        if (latitude <= 90) {
          let popupContent = "<div style='opacity: 0.8; background-color: transparent;'>";
          popupContent = popupContent + "<a style='text-align: center;' class='link-primary form-label' href='#'><h1>" + this.CompanyInfoService.FormData.Name + " [" + this.CompanyInfoService.FormData.ID + "]</h1></a>";
          popupContent = popupContent + "<div>Chủ cơ sở: <b>" + this.CompanyInfoService.FormData.fullname + "</b></div>";
          popupContent = popupContent + "<div>Điện thoại: <b>" + this.CompanyInfoService.FormData.phone + "</b></div>";
          popupContent = popupContent + "<div>Địa chỉ: <b>" + this.CompanyInfoService.FormData.address + "</b></div>";
          popupContent = popupContent + "<div>Ấp thôn: <b>" + this.CompanyInfoService.FormData.hamlet + "</b></div>";
          popupContent = popupContent + "<div>Xã phường: <b>" + this.CompanyInfoService.FormData.WardDataName + "</b></div>";
          popupContent = popupContent + "<div>Quận huyện: <b>" + this.CompanyInfoService.FormData.DistrictDataName + "</b></div>";
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

        this.CompanyInfoService.IsShowLoading = true;
        this.CompanyLakeService.BaseParameter.ParentID = this.CompanyInfoService.FormData.ID;
        this.CompanyLakeService.GetByParentIDToListAsync().subscribe(
          res => {            
            this.CompanyLakeService.List = (res as CompanyLake[]).sort((a, b) => (a.SortOrder > b.SortOrder ? 1 : -1));
            for (let i = 0; i < this.CompanyLakeService.List.length; i++) {

              let itemCompanyLake = this.CompanyLakeService.List[i];
              let latitude = environment.Latitude;
              let longitude = environment.Longitude;
              if (itemCompanyLake.longitude > 0) {
                if (itemCompanyLake.latitude > 0) {
                  latitude = Number(itemCompanyLake.latitude);
                  longitude = Number(itemCompanyLake.longitude);
                }
              }            
              
              if (itemCompanyLake.latitude <= 90) {
                let popupContent = "<div style='opacity: 0.8; background-color: transparent;'>";
                popupContent = popupContent + "<a style='text-align: center;' class='link-primary form-label' href='#'><h1>" + this.CompanyInfoService.FormData.Name + "</h1></a>";
                popupContent = popupContent + "<div>Ao hồ: <b>" + itemCompanyLake.Name + "</b></div>";
                popupContent = popupContent + "<div>Mã ao: <b>" + itemCompanyLake.Code + "</b></div>";
                popupContent = popupContent + "<div>Diện tích (ha): <b>" + itemCompanyLake.acreage + "</b></div>";
                popupContent = popupContent + "<div>Vật nuôi: <b>" + itemCompanyLake.species_name + "</b></div>";
                popupContent = popupContent + "<div>Địa chỉ: <b>" + itemCompanyLake.address + "</b></div>";
                popupContent = popupContent + "<div>Xã phường: <b>" + itemCompanyLake.WardDataName + "</b></div>";
                popupContent = popupContent + "<div>Quận huyện: <b>" + itemCompanyLake.DistrictDataName + "</b></div>";
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
            this.CompanyInfoService.IsShowLoading = false;
          },
          err => {
            this.CompanyInfoService.IsShowLoading = false;
          }
        );

      }
    }
  }
}
