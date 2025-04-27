import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-income-chart',
  standalone: true,
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss'],
  imports: [CommonModule],
})
export class IncomeChartComponent implements OnChanges {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  public lineChartData: ChartData<'line'> = {
    labels: [],
    datasets: [
      {
        data: [],
        label: 'Income',
        borderColor: 'rgba(0, 123, 255, 0.8)',
        backgroundColor: 'rgba(0, 123, 255, 0.3)',
        fill: true,
        tension: 0.4,
      },
    ],
  };

  public lineChartOptions: ChartOptions = {
    responsive: true,
    scales: {
      x: {
        ticks: {
          display: true,
        },
      },
      y: {
        ticks: {
          display: true,
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';

  ngOnChanges(changes: SimpleChanges) {
    if (changes['data'] || changes['labels']) {
      this.updateChartData();
    }
  }

  private updateChartData() {
    this.lineChartData = {
      labels: this.labels,
      datasets: [
        {
          data: this.data,
          label: 'Income',
          borderColor: 'rgba(0, 123, 255, 0.8)',
          backgroundColor: 'rgba(0, 123, 255, 0.3)',
          fill: true,
          tension: 0.4,
        },
      ],
    };
  }
}
