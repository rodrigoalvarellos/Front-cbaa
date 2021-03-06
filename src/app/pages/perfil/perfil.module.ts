import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../../@theme/theme.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { SharedModule } from '../../shared/shared.module';




@NgModule({
  declarations: [PerfilComponent, EditarPerfilComponent, VerPerfilComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PerfilRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
  ],
})
export class PerfilModule { }
