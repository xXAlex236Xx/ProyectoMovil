import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElegirConductorPage } from './elegir-conductor.page';

const routes: Routes = [
  {
    path: '',
    component: ElegirConductorPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElegirConductorPageRoutingModule {}
