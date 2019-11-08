
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PerfilComponent } from './perfil.component';
import { VerPerfilComponent } from './ver-perfil/ver-perfil.component';
import { EditarPerfilComponent } from './editar-perfil/editar-perfil.component';


const routes: Routes = [
    {
      path: '',
      component: PerfilComponent,
      children: [
        { path: 'ver-perfil', component: VerPerfilComponent },
        { path: 'editar-perfil', component: EditarPerfilComponent },
      ],
    },
  ];

  @NgModule({
    imports: [
      RouterModule.forChild(routes),
    ],
    exports: [
      RouterModule,
    ],
  })
  export class PerfilRoutingModule { }
