import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DonacionesRoutingModule } from './donaciones-routing.module';
import { DonacionesComponent } from './donaciones.component';


@NgModule({
  declarations: [DonacionesComponent],
  imports: [
    CommonModule,
    DonacionesRoutingModule
  ]
})
export class DonacionesModule { }
