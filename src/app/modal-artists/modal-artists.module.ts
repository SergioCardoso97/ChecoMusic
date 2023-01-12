import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalArtistsPageRoutingModule } from './modal-artists-routing.module';

import { ModalArtistsPage } from './modal-artists.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalArtistsPageRoutingModule
  ],
  declarations: [ModalArtistsPage]
})
export class ModalArtistsPageModule {}
