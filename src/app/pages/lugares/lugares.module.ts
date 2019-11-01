import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LugaresComponent } from './lugares.component';
import { ThemeModule } from '../../@theme/theme.module';
import { LugaresRoutingModule } from './lugares-routing.module';
import { MainComponent } from './main/main.component';
import { SharedModule } from '../../shared/shared.module';
import { HttpClientModule } from '@angular/common/http';



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
    HttpClientModule,
  ],
})
export class LugaresModule { }
