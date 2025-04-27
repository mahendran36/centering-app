import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'dashboard',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./pages/dashboard/dashboard.page').then(m => m.DashboardPage)
  },
  {
    path: 'materials',
    loadChildren: () => import('./pages/materials/material-list.page').then(m => m.MaterialListPage)
  },
  {
    path: 'add-materials',
    loadChildren: () => import('./pages/materials/material-create/material-create.page').then(m => m.MaterialCreatePage)
  },
  {
    path: 'orders',
    loadChildren: () => import('./pages/orders/order-create.page').then(m => m.OrderCreatePage)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppRoutingModule { }