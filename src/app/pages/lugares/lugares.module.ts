import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresComponent } from './lugares.component';
import { ThemeModule } from '../../@theme/theme.module';
import { LugaresRoutingModule } from './lugares-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../../shared/shared.module';



@NgModule({
  declarations: [
    LugaresComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    LugaresRoutingModule,
    ThemeModule,
    SharedModule,
  ],
})
export class LugaresModule { }
