import { Component, Input } from '@angular/core';
import { ChartOptions, ChartType, ChartData } from 'chart.js';
// import { Label } from 'ng2-charts';
import { CommonModule } from '@angular/common'; // Import CommonModule for ngIf, ngFor, etc.

@Component({
  selector: 'app-income-chart',
  standalone: true,  // Mark this as a standalone component
  imports: [CommonModule], // Import CommonModule for common Angular directives
  templateUrl: './income-chart.component.html',
  styleUrls: ['./income-chart.component.scss'],
})
export class IncomeChartComponent {
  @Input() data: number[] = [];
  @Input() labels: string[] = [];

  public lineChartData: ChartData<'line'> = {
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
          // beginAtZero: true,
        },
      },
    },
  };

  public lineChartType: ChartType = 'line';

  constructor() {}
}
