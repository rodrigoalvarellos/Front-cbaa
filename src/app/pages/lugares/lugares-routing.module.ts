
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LugaresComponent } from './lugares.component';
import { MainComponent } from './main/main.component';


const routes: Routes = [
    {
      path: '',
      component: LugaresComponent,
      children: [
        {
          path: '',
          component: MainComponent,
        },
        // {
        //   path: 'forms',
        //   component: FormulariosComponent,
        // },
        // {
        //   path: 'modals',
        //   component: ModalsComponent,
        // },
        // {
        //   path: 'toasters',
        //   component: ToastersComponent,
        // },
        // {
        //   path: 'maps',
        //   component: MapsComponent,
        // },
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
  export class LugaresRoutingModule { }
