import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../../shared/shared.module';
import { AdminRoutingModule } from './admin-routing.module';
import { ThemeModule } from '../../@theme/theme.module';

import { AdminComponent } from './admin.component';
import { CategoriasAdminComponent } from './categorias-admin/categorias-admin.component';
import { DiscapacidadesAdminComponent } from './discapacidades-admin/discapacidades-admin.component';
import { CreateCategoriaComponent } from './categorias-admin/create-categoria/create-categoria.component';
import { CreateDiscapacidadComponent } from './discapacidades-admin/create-discapacidad/create-discapacidad.component';
import { UsuariosAdminComponent } from './usuarios-admin/usuarios-admin.component';


@NgModule({
  declarations: [
    AdminComponent,
    CategoriasAdminComponent,
    DiscapacidadesAdminComponent,
    CreateCategoriaComponent,
    CreateDiscapacidadComponent,
    UsuariosAdminComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    AdminRoutingModule,
    ThemeModule,
  ],
})
export class AdminModule { }
