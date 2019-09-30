import { DemoRoutingModule } from './demo-routing.module';
import { NgModule } from '@angular/core';
import { ThemeModule } from '../../@theme/theme.module';
import { NbCardModule } from '@nebular/theme';
import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    MainComponent,
    FormulariosComponent,
    DemoComponent
    
  ],
  imports: [
    DemoRoutingModule,
    NbCardModule,
    ThemeModule,
  ]
})
export class DemoModule { }
