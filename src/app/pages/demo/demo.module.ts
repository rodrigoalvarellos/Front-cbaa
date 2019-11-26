import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AgmCoreModule } from '@agm/core';

import { DemoRoutingModule } from './demo-routing.module';
import { ThemeModule } from '../../@theme/theme.module';
import { MainComponent } from './main/main.component';
import { FormulariosComponent } from './formularios/formularios.component';
import { DemoComponent } from './demo.component';
import { ModalsComponent } from './modals/modals.component';
import { NbDialogModule } from '@nebular/theme';
import { DialogContentComponent } from './modals/dialog-content/dialog-content.component';
import { ToastersComponent } from './toasters/toasters.component';
import { MapsComponent } from './maps/maps.component';
import { FirebaseUploadComponent } from './firebase-upload/firebase-upload.component';
import { SharedModule } from '../../shared/shared.module';
@NgModule({
  declarations: [
    MainComponent,
    FormulariosComponent,
    DemoComponent,
    ModalsComponent,
    DialogContentComponent,
    ToastersComponent,
    MapsComponent,
    FirebaseUploadComponent,
  ],
  imports: [
    SharedModule,
    FormsModule,
    ReactiveFormsModule,
    DemoRoutingModule,
    ThemeModule,
    NbDialogModule.forChild(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrPAwLwfHuEjpwDaY6BkbfzFAJeMN4epU',
      libraries: ['places'],
    }),
  ],
  entryComponents: [
    DialogContentComponent,
  ],
})
export class DemoModule { }
