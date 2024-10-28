import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MisViajesPage } from './mis-viajes.page';

const routes: Routes = [
  {
    path: '',
    component: MisViajesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MisViajesPageRoutingModule {}
