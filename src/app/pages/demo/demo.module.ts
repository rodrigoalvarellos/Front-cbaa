import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';

@NgModule({
  declarations: [
    MainComponent,
    FormulariosComponent,
    DemoComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    ThemeModule,
  ],
})
export class DemoModule { }
