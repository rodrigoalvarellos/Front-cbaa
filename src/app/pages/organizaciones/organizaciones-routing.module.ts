import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { OrganizacionesComponent } from './organizaciones.component';

const routes: Routes = [{ path: '', component: OrganizacionesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OrganizacionesRoutingModule { }
