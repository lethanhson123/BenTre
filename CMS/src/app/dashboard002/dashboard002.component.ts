import { Component, OnInit, ViewChild, Output, EventEmitter } from '@angular/core';
import { ChartOptions, ChartType, ChartDataSets, Chart, ChartConfiguration, ChartData } from 'chart.js';
import { Color, Label, SingleDataSet, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { environment } from 'src/environments/environment';
import { NotificationService } from 'src/app/shared/Notification.service';
import { DownloadService } from 'src/app/shared/Download.service';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import { Report } from 'src/app/shared/Report.model';
import { ReportService } from 'src/app/shared/Report.service';
import { NamThang } from 'src/app/shared/NamThang.model';

@Component({
  selector: 'app-dashboard002',
  templateUrl: './dashboard002.component.html',
  styleUrls: ['./dashboard002.component.css']
})
export class Dashboard002Component implements OnInit {

  @Output() onDraw = new EventEmitter();

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,
    public ReportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.Report0016();
  }
  ChartReport0016Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReport0016');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Tổng hợp số liệu mã số cơ sở nuôi";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReport0016_001Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReport0016_001');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Diện tích (ha)";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReport0016_002Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReport0016_002');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Diện tích nuôi (ha)";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReport0016_003Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReport0016_003');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Cơ sở nuôi";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }


  public ChartOptionsReport0016: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'bottom'
    },
    animation: {
      duration: 1,
      onComplete: function () {
        var chartInstance = this.chart,
          ctx = chartInstance.ctx;
        ctx.textAlign = 'center';
        ctx.fillStyle = "rgba(0, 0, 0, 1)";
        ctx.textBaseline = 'bottom';
        this.data.datasets.forEach(function (dataset, i) {
          var meta = chartInstance.controller.getDatasetMeta(i);
          meta.data.forEach(function (bar, index) {
            var data = dataset.data[index];
            ctx.fillText(data, bar._model.x, bar._model.y - 5);

          });
        });
      }
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          return Number(tooltipItem.yLabel).toFixed(0).replace(/./g, function (c, i, a) {
            return i > 0 && c !== "." && (a.length - i) % 3 === 0 ? "." + c : c;
          });
        }
      }
    },
    scales: {
      yAxes: [
        {
          id: 'A',
          position: 'left',
        }, {
          id: 'B',
          position: 'right',
        }
      ]
    },
  };
  public ChartColorsReport0016: Color[] = [
  ]
  public ChartLabelsReport0016: Label[] = [];
  public ChartTypeReport0016: ChartType = 'bar';
  public ChartLegendReport0016 = true;
  public ChartPluginsReport0016 = [];

  public ChartDataReport0016: ChartDataSets[] = [
  ];

  public ChartOptionsReport0016_001: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return label + '';
        }
      }
    }
  };
  public ChartColorsReport0016_001: Color[] = [
  ]
  public ChartLabelsReport0016_001: Label[] = [];
  public ChartTypeReport0016_001: ChartType = 'pie';
  public ChartLegendReport0016_001 = true;
  public ChartPluginsReport0016_001 = [];

  public ChartDataReport0016_001: ChartDataSets[] = [
  ];

  public ChartOptionsReport0016_002: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return label + '';
        }
      }
    }
  };
  public ChartColorsReport0016_002: Color[] = [
  ]
  public ChartLabelsReport0016_002: Label[] = [];
  public ChartTypeReport0016_002: ChartType = 'pie';
  public ChartLegendReport0016_002 = true;
  public ChartPluginsReport0016_002 = [];

  public ChartDataReport0016_002: ChartDataSets[] = [
  ];

  public ChartOptionsReport0016_003: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
    },
    tooltips: {
      callbacks: {
        label: function (tooltipItem, data) {
          var label = data.labels[tooltipItem.index];
          var value = data.datasets[tooltipItem.datasetIndex].data[tooltipItem.index];
          return label + '';
        }
      }
    }
  };
  public ChartColorsReport0016_003: Color[] = [
  ]
  public ChartLabelsReport0016_003: Label[] = [];
  public ChartTypeReport0016_003: ChartType = 'pie';
  public ChartLegendReport0016_003 = true;
  public ChartPluginsReport0016_003 = [];

  public ChartDataReport0016_003: ChartDataSets[] = [
  ];

  Report0016() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.BaseParameter.PlanTypeID = environment.PlanTypeIDCoSoNuoi;
    this.ReportService.Report0016ToListAsync().subscribe(
      res => {
        this.ReportService.List = (res as Report[]);
        this.ReportService.FormData = {
          ThongKe001: environment.InitializationNumber,
          ThongKe002: environment.InitializationNumber,
          ThongKe003: environment.InitializationNumber,
          ThongKe004: environment.InitializationNumber,
        };
        for (let i = 0; i < this.ReportService.List.length; i++) {
          this.ReportService.FormData.ThongKe001 = this.ReportService.FormData.ThongKe001 + 1;
          this.ReportService.FormData.ThongKe002 = this.ReportService.FormData.ThongKe002 + this.ReportService.List[i].ThongKe001;
          this.ReportService.FormData.ThongKe003 = this.ReportService.FormData.ThongKe003 + this.ReportService.List[i].ThongKe002;
          this.ReportService.FormData.ThongKe004 = this.ReportService.FormData.ThongKe004 + this.ReportService.List[i].ThongKe003;
        }

        let labelArray001 = [];
        let dataArray001 = [];
        let dataArray002 = [];
        let dataArray003 = [];

        for (let i = 0; i < this.ReportService.List.length; i++) {
          labelArray001.push(this.ReportService.List[i].DistrictDataName);
          dataArray001.push(this.ReportService.List[i].ThongKe001);
          dataArray002.push(this.ReportService.List[i].ThongKe002);
          dataArray003.push(this.ReportService.List[i].ThongKe003);
        }
        let label001: string = 'Cơ sở nuôi';
        let label002: string = 'Tổng diện tích (ha)';
        let label003: string = 'Diện tích nuôi (ha)';
        this.ChartLabelsReport0016 = labelArray001;
        this.ChartDataReport0016 = [
          { data: dataArray001, label: label001, stack: 'b', fill: false, yAxisID: 'B', },
          { data: dataArray002, label: label002, stack: 'a', fill: false, yAxisID: 'A', },
          { data: dataArray003, label: label003, stack: 'c', fill: false, yAxisID: 'A', },
        ];

        labelArray001 = [];
        dataArray001 = [];
        for (let i = 0; i < this.ReportService.List.length; i++) {
          labelArray001.push(this.ReportService.List[i].Code);
          dataArray001.push(this.ReportService.List[i].ThongKe002);
        }
        this.ChartLabelsReport0016_001 = labelArray001;
        this.ChartDataReport0016_001 = [
          { data: dataArray001, stack: 'a' },
        ];

        labelArray001 = [];
        dataArray001 = [];
        for (let i = 0; i < this.ReportService.List.length; i++) {
          labelArray001.push(this.ReportService.List[i].Display);
          dataArray001.push(this.ReportService.List[i].ThongKe003);
        }
        this.ChartLabelsReport0016_002 = labelArray001;
        this.ChartDataReport0016_002 = [
          { data: dataArray001, stack: 'a' },
        ];

        labelArray001 = [];
        dataArray001 = [];
        for (let i = 0; i < this.ReportService.List.length; i++) {
          labelArray001.push(this.ReportService.List[i].Name);
          dataArray001.push(this.ReportService.List[i].ThongKe001);
        }
        this.ChartLabelsReport0016_003 = labelArray001;
        this.ChartDataReport0016_003 = [
          { data: dataArray001, stack: 'a' },
        ];


        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
}