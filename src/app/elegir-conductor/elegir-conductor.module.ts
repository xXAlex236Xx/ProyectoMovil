import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElegirConductorPageRoutingModule } from './elegir-conductor-routing.module';

import { ElegirConductorPage } from './elegir-conductor.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElegirConductorPageRoutingModule
  ],
  declarations: [ElegirConductorPage]
})
export class ElegirConductorPageModule {}
