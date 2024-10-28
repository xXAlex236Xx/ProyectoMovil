import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeRegistradoPageRoutingModule } from './viaje-registrado-routing.module';

import { ViajeRegistradoPage } from './viaje-registrado.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeRegistradoPageRoutingModule
  ],
  declarations: [ViajeRegistradoPage]
})
export class ViajeRegistradoPageModule {}
