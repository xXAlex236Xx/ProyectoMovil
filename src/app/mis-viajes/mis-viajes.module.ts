import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MisViajesPageRoutingModule } from './mis-viajes-routing.module';

import { MisViajesPage } from './mis-viajes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MisViajesPageRoutingModule
  ],
  declarations: [MisViajesPage]
})
export class MisViajesPageModule {}
