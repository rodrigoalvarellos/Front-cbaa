import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';
import { ModalsComponent } from './modals/modals.component';
import { NbDialogModule } from '@nebular/theme';
import { DialogContentComponent } from './modals/dialog-content/dialog-content.component';
import { ToastersComponent } from './toasters/toasters.component';
@NgModule({
  declarations: [
    MainComponent,
    FormulariosComponent,
    DemoComponent,
    ModalsComponent,
    DialogContentComponent,
    ToastersComponent,
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    ThemeModule,
    NbDialogModule.forChild(),
  ],
  entryComponents: [
    DialogContentComponent,
  ],
})
export class DemoModule { }
