import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalArtistsPage } from './modal-artists.page';

const routes: Routes = [
  {
    path: '',
    component: ModalArtistsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalArtistsPageRoutingModule {}
