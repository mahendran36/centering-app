import { Component } from '@angular/core';
import { SHARED_COMPONENTS } from './shared/modules/components';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  standalone: true, // Add this line to enable standalone component declaratio
  styleUrls: ['app.component.scss'],
  imports: [SHARED_COMPONENTS, RouterModule]
})
export class AppComponent {
  public appPages = [
    { title: 'Dashboard', url: '/dashboard', icon: 'home' },
    { title: 'Materials', url: '/materials', icon: 'cube' },
    { title: 'Orders', url: '/orders', icon: 'cart' }
  ];

  constructor() {
  }
}
