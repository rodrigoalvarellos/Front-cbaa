import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ModeracionRoutingModule } from './moderacion-routing.module';
import { ModeracionComponent } from './moderacion.component';


@NgModule({
  declarations: [ModeracionComponent],
  imports: [
    CommonModule,
    ModeracionRoutingModule
  ]
})
export class ModeracionModule { }
