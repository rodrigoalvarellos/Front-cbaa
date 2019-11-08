import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

import { AuthGuard } from '../guards/auth.guard';

import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';

const routes: Routes = [{
  path: '',
  canActivate: [AuthGuard],
  component: PagesComponent,
  children: [
    {
      path: 'dashboard',
      component: DashboardComponent,
    },
    {
      path: 'lugares',
      loadChildren: () => import('./lugares/lugares.module')
        .then(m => m.LugaresModule),
    },
    {
      path: 'perfil',
      loadChildren: () => import('./perfil/perfil.module')
        .then(m => m.PerfilModule),
    },
    {
      path: 'demo',
      loadChildren: () => import('./demo/demo.module')
        .then(m => m.DemoModule),
    },
    {
      path: '',
      redirectTo: 'dashboard',
      pathMatch: 'full',
    },
  ],
},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {
}
