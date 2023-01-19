import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SportsPageRoutingModule } from './sports-routing.module';

import { SportsPage } from './sports.page';

import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SportsPageRoutingModule,
    GoogleMapsModule
  ],
  declarations: [SportsPage]
})
export class SportsPageModule {}
