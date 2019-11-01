import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ThemeModule } from '../@theme/theme.module';
import { MapaComponent } from './components/mapa/mapa.component';
import { ListadoLugaresComponent } from './components/listado-lugares/listado-lugares.component';

const COMPONENTS = [
  MapaComponent,
  ListadoLugaresComponent,
];

@NgModule({
  declarations: [ ...COMPONENTS ],
  imports: [
    CommonModule,
    ThemeModule,
  ],
  exports: [ ...COMPONENTS ],
})
export class SharedModule { }
