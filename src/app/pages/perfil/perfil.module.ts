import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PerfilComponent } from './perfil.component';
import { PerfilRoutingModule } from './perfil-routing.module';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { ThemeModule } from '../../@theme/theme.module';



@NgModule({
  declarations: [PerfilComponent, EditarPerfilComponent, VerPerfilComponent],
  imports: [
    CommonModule,
    ThemeModule,
    PerfilRoutingModule,
  ],
})
export class PerfilModule { }
