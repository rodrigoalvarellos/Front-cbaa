import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { ListadoLugaresComponent } from './components/listado-lugares/listado-lugares.component';
import { AgmCoreModule } from '@agm/core';
import { DropZoneDirective } from '../directives/drop-zone.directive';
import { FileSizePipe } from '../pipes/format-file-size.pipe';
import { FireImageUploadComponent } from './components/fire-image-upload/fire-image-upload.component';

const COMPONENTS = [
  MapaComponent,
  ListadoLugaresComponent,
  FireImageUploadComponent,
];

const PIPES = [
  FileSizePipe,
];

const DIRECTIVES = [
  DropZoneDirective,
];

@NgModule({
  declarations: [ ...COMPONENTS, ...DIRECTIVES, ...PIPES  ],
  imports: [
    CommonModule,
    ThemeModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDrPAwLwfHuEjpwDaY6BkbfzFAJeMN4epU',
      libraries: ['places'],
    }),
  ],
  exports: [ ...COMPONENTS, ...DIRECTIVES, ...PIPES ],
})
export class SharedModule { }
