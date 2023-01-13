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
  currentSong: any = new Audio("../../assets/31 Minutos - Doggy Style.mp3");
  newTime: number | undefined;
  artistGen: any = {
    gen: '',
    playing: false
  };
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
    this.artistGen.gen = '';
    const res = this.modalController.create({
      component: ModalArtistsPage,
      componentProps: {
        artist: artist
      }
    });
    (await res).onDidDismiss().then(dataReturned => {
      console.log("Data Return -> ", dataReturned);
      if (dataReturned.data != 1) {
        this.artistGen.gen = dataReturned.data;
      }
      
    })
    return (await res).present()
  }
  play(){
    
    this.currentSong.play()
    this.currentSong.addEventListener("timeupdate",()=>{
      this.newTime = (this.currentSong.currentTime / this.currentSong.duration);
    });
    this.artistGen.playing = true;
  }
  pause(){
    this.currentSong.pause()
    this.artistGen.playing = false;
  }
  parseTime(time:string){
    let minutes;
    let seconds;
    if (time != "0:00") {
      const partTime = parseInt(time.toString().split(".")[0], 10)
      minutes = Math.floor(partTime/60).toString();
      if (minutes.length == 1) {
        minutes = "0" + minutes;
      }
      seconds = (partTime%60).toString();
      if (seconds.length == 1) {
        seconds = "0" + seconds;
      }      
    }
    return minutes + ":" + seconds;
  }

}
