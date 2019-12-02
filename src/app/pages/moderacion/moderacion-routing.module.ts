import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModeracionComponent } from './moderacion.component';

const routes: Routes = [{ path: '', component: ModeracionComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ModeracionRoutingModule { }
