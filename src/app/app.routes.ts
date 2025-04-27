import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadComponent: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'materials',
    loadComponent: () => import('./pages/materials/material-list.page').then(m => m.MaterialListPage)
  },
  {
    path: 'add-materials',
    loadComponent: () => import('./pages/materials/material-create/material-create.page').then(m => m.MaterialCreatePage)
  },
  {
    path: 'orders',
    children: [
      // {
      //   path: '',
      //   loadComponent: () => import('./pages/orders/order-list.page').then(m => m.OrderListPage)
      // },
      {
        path: 'create',
        loadComponent: () => import('./pages/orders/order-create.page').then(m => m.OrderCreatePage)
      },
      // {
      //   path: ':id',
      //   loadComponent: () => import('./pages/orders/order-detail.page').then(m => m.OrderDetailPage)
      // }
    ]
  }
];
