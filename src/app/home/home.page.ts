import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ApiMusicService } from '../services/apiMusic/api-music.service';
import { ModalArtistsPage } from '../modal-artists/modal-artists.page';
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {
  
  artists: any[] = [];
  slideOps = {
    initialSlide: 1,
    slidesPerView: 3,
    centeredSlides: true,
    speed: 400
  };
  constructor(private apiMusic: ApiMusicService,
              private modalController: ModalController) {
  }
   ngOnInit() {
    this.artists = this.apiMusic.getNewReleases().items
    console.log("Artists -> ", this.artists);
        
  }
  async openModal(artist: any){
    const res = this.modalController.create({
      component: ModalArtistsPage,
      componentProps: {
        artist: artist
      }
    });
    return (await res).present()
  }

}
