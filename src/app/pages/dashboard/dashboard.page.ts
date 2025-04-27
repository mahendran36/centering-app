import { Component, OnInit, signal } from '@angular/core';
import { IonHeader, IonTitle, IonAvatar } from "@ionic/angular/standalone";
import { SHARED_COMPONENTS } from 'src/app/shared/modules/components';
import { IncomeChartComponent } from "../../shared/components/income-chart/income-chart.component";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
  standalone: true,
  imports: [IonAvatar, SHARED_COMPONENTS, IncomeChartComponent]
})
export class DashboardPage implements OnInit {
// Signals for various data
totalItems = signal(520);
ongoingRentals = signal(14);
pendingReturns = signal(3);
todaysIncome = signal(17500);
bookingsToday = signal(5);
maintenanceItems = signal(2);  incomeTrend(): number[] {
    return [1000, 2000, 1500, 2500, 3000]; // Example income data
  }
  labels(): string[] {
    return ['Mon', 'Tue', 'Wed', 'Thu', 'Fri']; // Example days of the week
  }
upcomingReturns = signal([
  { customer: 'SRM Builders', date: '2025-04-30' },
  { customer: 'Ravi Construction', date: '2025-05-01' }
]);
topCustomers = signal([
  { name: 'Ravi Construction', amount: 50000 },
  { name: 'SRM Builders', amount: 30000 }
]);
pendingInvoices = signal([
  { customer: 'Vetri Enterprises', amount: 12000, date: '2025-04-25' },
  { customer: 'ABC Builders', amount: 8500, date: '2025-04-20' }
]);
receiptHistory = signal([
  { customer: 'Ravi Construction', amount: 12000, date: '2025-04-25' },
  { customer: 'SRM Builders', amount: 8500, date: '2025-04-24' }
]);
materialCategories = signal([
  { name: 'Plates', count: 200 },
  { name: 'Pillars', count: 100 }
]);
profileCompletion = signal(60);  // Percentage of profile completion

constructor() {}

ngOnInit() {
  this.loadDashboardData();
}

loadDashboardData() {
  // Actual data loading logic
  this.totalItems.set(520);
  this.ongoingRentals.set(14);
  this.pendingReturns.set(3);
  this.todaysIncome.set(17500);
  this.bookingsToday.set(5);
  this.maintenanceItems.set(2);
}

onActionClick(action: string) {
  console.log('Clicked:', action);
  // Add action handling logic here
}

updateProfileCompletion(percentage: number) {
  this.profileCompletion.set(percentage);
}
}