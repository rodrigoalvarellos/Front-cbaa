import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { CategoriasAdminComponent } from './categorias-admin/categorias-admin.component';
import { ThemeModule } from '../../@theme/theme.module';
import { DiscapacidadesAdminComponent } from './discapacidades-admin/discapacidades-admin.component';
import { OrganizacionesAdminComponent } from './organizaciones-admin/organizaciones-admin.component';


@NgModule({
  declarations: [AdminComponent, CategoriasAdminComponent, DiscapacidadesAdminComponent, OrganizacionesAdminComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ThemeModule,
  ]
})
export class AdminModule { }
