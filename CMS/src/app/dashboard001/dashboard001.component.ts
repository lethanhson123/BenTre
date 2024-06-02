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
  selector: 'app-dashboard001',
  templateUrl: './dashboard001.component.html',
  styleUrls: ['./dashboard001.component.css']
})
export class Dashboard001Component implements OnInit {

  @Output() onDraw = new EventEmitter();

  constructor(
    public NotificationService: NotificationService,
    public DownloadService: DownloadService,
    public ReportService: ReportService,
  ) { }

  ngOnInit(): void {
    this.ComponentGetListNam();
    this.ReportDashboard0001();
    this.ReportDashboard0002();
    this.ReportDashboard0003();
    this.ReportDashboard0004();
    this.ReportDashboard0005();
    this.Report0009();
  }
  ComponentGetListNam() {
    this.DownloadService.ComponentGetListNam();
  }
  ChartReportDashboard0002Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReportDashboard0002');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Tổng hợp số liệu Đơn vị đã thẩm định theo huyện";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReportDashboard0003Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReportDashboard0003');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Xếp loại An toàn thực phẩm";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReportDashboard0004Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReportDashboard0004');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Danh mục An toàn thực phẩm";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReportDashboard0005Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReportDashboard0005');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Báo cáo theo năm";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }
  ChartReport0009Click() {
    let canvas = <HTMLCanvasElement>document.getElementById('ChartReport0009');
    var MIME_TYPE = "image/png";
    let imgURL = canvas.toDataURL(MIME_TYPE);
    var dlLink = document.createElement('a');
    dlLink.download = "Báo cáo tổng hợp";
    dlLink.href = imgURL;
    dlLink.dataset.downloadurl = [MIME_TYPE, dlLink.download, dlLink.href].join(':');
    document.body.appendChild(dlLink);
    dlLink.click();
    document.body.removeChild(dlLink);
  }

  ReportDashboard0001() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportDashboard0001Async().subscribe(
      res => {
        this.ReportService.FormData = (res as Report);
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }

  public ChartOptionsReportDashboard0002: ChartOptions = {
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
  public ChartColorsReportDashboard0002: Color[] = [
  ]
  public ChartLabelsReportDashboard0002: Label[] = [];
  public ChartTypeReportDashboard0002: ChartType = 'bar';
  public ChartLegendReportDashboard0002 = true;
  public ChartPluginsReportDashboard0002 = [];

  public ChartDataReportDashboard0002: ChartDataSets[] = [
  ];
  ReportDashboard0002() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportDashboard0002ToListAsync().subscribe(
      res => {
        this.ReportService.ListReportDashboard0002 = (res as Report[]);
        let labelArray001 = [];
        let dataArray001 = [];
        let dataArray002 = [];
        let dataArray003 = [];

        for (let i = 0; i < this.ReportService.ListReportDashboard0002.length; i++) {
          labelArray001.push(this.ReportService.ListReportDashboard0002[i].Name);
          dataArray001.push(this.ReportService.ListReportDashboard0002[i].ThongKe001);
          dataArray002.push(this.ReportService.ListReportDashboard0002[i].ThongKe002);
          dataArray003.push(this.ReportService.ListReportDashboard0002[i].ThongKe003);
        }
        let label001: string = 'Quận huyện';
        let label002: string = 'Nông sản';
        let label003: string = 'Thủy sản';
        this.ChartLabelsReportDashboard0002 = labelArray001;
        this.ChartDataReportDashboard0002 = [
          { data: dataArray001, label: label001, stack: 'b', fill: false, yAxisID: 'B', },
          { data: dataArray002, label: label002, stack: 'a', fill: false, yAxisID: 'A', },
          { data: dataArray003, label: label003, stack: 'a', fill: false, yAxisID: 'A', },
        ];
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
  public ChartOptionsReportDashboard0003: ChartOptions = {
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
  public ChartColorsReportDashboard0003: Color[] = [
  ]
  public ChartLabelsReportDashboard0003: Label[] = [];
  public ChartTypeReportDashboard0003: ChartType = 'pie';
  public ChartLegendReportDashboard0003 = true;
  public ChartPluginsReportDashboard0003 = [];

  public ChartDataReportDashboard0003: ChartDataSets[] = [
  ];
  ReportDashboard0003() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportDashboard0003ToListAsync().subscribe(
      res => {
        this.ReportService.ListReportDashboard0003 = (res as Report[]);
        let labelArray001 = [];
        let dataArray001 = [];
        for (let i = 0; i < this.ReportService.ListReportDashboard0003.length; i++) {
          labelArray001.push(this.ReportService.ListReportDashboard0003[i].Name);
          dataArray001.push(this.ReportService.ListReportDashboard0003[i].ThongKe001);
        }
        this.ChartLabelsReportDashboard0003 = labelArray001;
        this.ChartDataReportDashboard0003 = [
          { data: dataArray001, stack: 'a' },
        ];
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
  public ChartOptionsReportDashboard0004: ChartOptions = {
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
  public ChartColorsReportDashboard0004: Color[] = [
  ]
  public ChartLabelsReportDashboard0004: Label[] = [];
  public ChartTypeReportDashboard0004: ChartType = 'doughnut';
  public ChartLegendReportDashboard0004 = true;
  public ChartPluginsReportDashboard0004 = [];

  public ChartDataReportDashboard0004: ChartDataSets[] = [
  ];
  ReportDashboard0004() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportDashboard0004ToListAsync().subscribe(
      res => {
        this.ReportService.ListReportDashboard0004 = (res as Report[]);
        let labelArray001 = [];
        let dataArray001 = [];
        for (let i = 0; i < this.ReportService.ListReportDashboard0004.length; i++) {
          labelArray001.push(this.ReportService.ListReportDashboard0004[i].Name);
          dataArray001.push(this.ReportService.ListReportDashboard0004[i].ThongKe001);
        }
        this.ChartLabelsReportDashboard0004 = labelArray001;
        this.ChartDataReportDashboard0004 = [
          { data: dataArray001, stack: 'a' },
        ];
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
  public ChartOptionsReport0009: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
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
        }
      ]
    },
  };
  public ChartColorsReport0009: Color[] = [
  ]
  public ChartLabelsReport0009: Label[] = [];
  public ChartTypeReport0009: ChartType = 'line';
  public ChartLegendReport0009 = true;
  public ChartPluginsReport0009 = [];

  public ChartDataReport0009: ChartDataSets[] = [
  ];
  Report0009() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.BaseParameter.PlanTypeID = environment.PlanTypeIDThamDinhATTP;
    this.ReportService.Report0009ToListAsync().subscribe(
      res => {
        this.ReportService.ListReport0009 = (res as Report[]).sort((a, b) => (a.Nam > b.Nam ? 1 : -1));
        let labelArray = [];
        let dataArray001 = [];
        let dataArray002 = [];
        let dataArray003 = [];
        let dataArray004 = [];
        let dataArray005 = [];
        let dataArray006 = [];
        let dataArray007 = [];
        let dataArray008 = [];
        let dataArray009 = [];
        let dataArray010 = [];
        let dataArray011 = [];
        let dataArray012 = [];
        for (let i = 0; i < this.ReportService.ListReport0009.length; i++) {
          let report = this.ReportService.ListReport0009[i];
          labelArray.push(report.Nam);
          dataArray001.push(report.ThongKe001);
          dataArray002.push(report.ThongKe002);
          dataArray003.push(report.ThongKe003);
          dataArray004.push(report.ThongKe004);
          dataArray005.push(report.ThongKe005);
          dataArray006.push(report.ThongKe006);
          dataArray007.push(report.ThongKe007);
          dataArray008.push(report.ThongKe008);
          dataArray009.push(report.ThongKe009);
          dataArray010.push(report.ThongKe010);
          dataArray011.push(report.ThongKe011);
          dataArray012.push(report.ThongKe012);
        }
        let label001: string = 'Tổng hợp';
        let label002: string = 'Tổng hợp-A';
        let label003: string = 'Tổng hợp-B';
        let label004: string = 'Tổng hợp-C';
        let label005: string = 'Cấp mới';
        let label006: string = 'Cấp mới-A';
        let label007: string = 'Cấp mới-B';
        let label008: string = 'Cấp mới-C';
        let label009: string = 'Định kỳ';
        let label010: string = 'Định kỳ-A';
        let label011: string = 'Định kỳ-B';
        let label012: string = 'Định kỳ-C';
        this.ChartLabelsReport0009 = labelArray;
        this.ChartDataReport0009 = [
          { data: dataArray001, label: label001, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray002, label: label002, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray003, label: label003, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray004, label: label004, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray005, label: label005, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray006, label: label006, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray007, label: label007, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray008, label: label008, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray009, label: label009, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray010, label: label010, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray011, label: label011, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
          { data: dataArray012, label: label012, stack: 'a', type: 'line', fill: false, yAxisID: 'A', },
        ];
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }

  public ChartOptionsReportDashboard0005: ChartOptions = {
    responsive: true,
    legend: {
      display: true,
      position: 'right'
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
        }
      ]
    },
  };
  public ChartColorsReportDashboard0005: Color[] = [
  ]
  public ChartLabelsReportDashboard0005: Label[] = [];
  public ChartTypeReportDashboard0005: ChartType = 'line';
  public ChartLegendReportDashboard0005 = true;
  public ChartPluginsReportDashboard0005 = [];

  public ChartDataReportDashboard0005: ChartDataSets[] = [
  ];
  ReportDashboard0005() {
    this.ReportService.IsShowLoading = true;
    this.ReportService.ReportDashboard0005ToListAsync().subscribe(
      res => {
        this.ReportService.ListReportDashboard0005 = (res as Report[]);
        let codeArray = [];
        for (let i = 1; i < 13; i++) {
          let Display = this.ReportService.BaseParameter.Nam + "-" + i;
          codeArray.push(Display);
        }
        this.ChartDataReportDashboard0005 = [];
        for (let i = 0; i < this.ReportService.ListReportDashboard0005.length; i++) {
          let report = this.ReportService.ListReportDashboard0005[i];
          let label: string = report.Name;
          let dataArray = [];
          dataArray.push(report.ThongKe001);
          dataArray.push(report.ThongKe002);
          dataArray.push(report.ThongKe003);
          dataArray.push(report.ThongKe004);
          dataArray.push(report.ThongKe005);
          dataArray.push(report.ThongKe006);
          dataArray.push(report.ThongKe007);
          dataArray.push(report.ThongKe008);
          dataArray.push(report.ThongKe009);
          dataArray.push(report.ThongKe010);
          dataArray.push(report.ThongKe011);
          dataArray.push(report.ThongKe012);
          let data: any = {
            type: "line",
            fill: false,
            data: dataArray,
            label: label,
            borderColor: this.DownloadService.GetRandomColor(dataArray.length)
          }
          this.ChartDataReportDashboard0005.push(data);
        }
        this.ChartLabelsReportDashboard0005 = codeArray;
        this.ReportService.IsShowLoading = false;
      },
      err => {
        this.ReportService.IsShowLoading = false;
      }
    );
  }
}
