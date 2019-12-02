import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventosRoutingModule } from './eventos-routing.module';
import { EventosComponent } from './eventos.component';


@NgModule({
  declarations: [EventosComponent],
  imports: [
    CommonModule,
    EventosRoutingModule
  ]
})
export class EventosModule { }
