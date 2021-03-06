
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';
import { ModalsComponent } from './modals/modals.component';
import { ToastersComponent } from './toasters/toasters.component';
import { MapsComponent } from './maps/maps.component';
import { FirebaseUploadComponent } from './firebase-upload/firebase-upload.component';

const routes: Routes = [
    {
      path: '',
      component: DemoComponent,
      children: [
        {
          path: 'main',
          component: MainComponent,
        },
        {
          path: 'forms',
          component: FormulariosComponent,
        },
        {
          path: 'modals',
          component: ModalsComponent,
        },
        {
          path: 'toasters',
          component: ToastersComponent,
        },
        {
          path: 'maps',
          component: MapsComponent,
        },
        {
          path: 'fire-upload',
          component: FirebaseUploadComponent,
        },
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
  export class DemoRoutingModule { }
