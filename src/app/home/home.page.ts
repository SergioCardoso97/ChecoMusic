import { Component, OnInit } from '@angular/core';
import { ApiMusicService } from '../services/apiMusic/api-music.service';
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
  constructor(private apiMusic: ApiMusicService) {
  }
   ngOnInit() {
    this.artists = this.apiMusic.getNewReleases().items
    console.log("Artists -> ", this.artists);
        
  }

}
