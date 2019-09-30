
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';

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