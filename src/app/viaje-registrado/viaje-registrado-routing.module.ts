import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeRegistradoPage } from './viaje-registrado.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeRegistradoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeRegistradoPageRoutingModule {}
