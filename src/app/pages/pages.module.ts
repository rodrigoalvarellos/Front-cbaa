import { NgModule } from '@angular/core';
import { NbMenuModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesRoutingModule } from './pages-routing.module';

import { DemoModule } from './demo/demo.module';
import { DashboardModule } from './dashboard/dashboard.module';

import { PagesComponent } from './pages.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    DemoModule,
  ],
  declarations: [
    PagesComponent,
  ],
})
export class PagesModule {
}
