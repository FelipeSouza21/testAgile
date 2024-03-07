import { Component, ViewChild } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DataService } from './core/data.service';

import {
  ApexAxisChartSeries,
  ApexChart,
  ChartComponent,
  ApexDataLabels,
  ApexXAxis,
  ApexPlotOptions,
  NgApexchartsModule,
  ChartType
} from "ng-apexcharts";
import { CommonModule } from '@angular/common';

export type ChartOptions = {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  dataLabels: ApexDataLabels;
  plotOptions: ApexPlotOptions;
  xaxis: ApexXAxis;
};


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NgApexchartsModule, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.sass'
})
export class AppComponent {
  @ViewChild("chart") chart!: ChartComponent;
  select1Data: string[] = [];
  select2Data: string[] = [];
  select3Data: string[] = [];
  public chartOptions = {
    series: 
      [{
        data: [0]
      } ]
    ,
    chartType: {
      height: 350,
      type: "bar" as ChartType
    },
    title: {
      text: "Sales by month"
    },
    xaxis: {
      categories: ["Jan", "Feb", "Mar", "Apr"]
    }
  };

  constructor(private dataService: DataService) {
    this.select1Data = this.dataService.getSelect1Data();
  }
  
  updateSelect2(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.select2Data = this.dataService.getSelect2Data(value) as string[];
  }

  updateSelect3(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    this.select3Data = this.dataService.getSelect3Data(value);
  }

  updateChart(event: Event) {
    const target = event.target as HTMLSelectElement;
    const value = target.value;
    const series = this.dataService.getChartData(value);
    console.log(series);
    this.chartOptions.series = series[0].data;
  }


}
