import { Component } from "@angular/core";
import { NavParams, ModalController } from "@ionic/angular";

@Component({
  selector: 'app-modal-artists',
  templateUrl: './modal-artists.page.html',
  styleUrls: ['./modal-artists.page.scss'],
})
export class ModalArtistsPage {

  songs: any[] = [];
  artist: any = {};
  constructor(
    private navParams: NavParams,
    private modalController: ModalController
  ) {}
  ionViewDidEnter() {
    //this.songs = this.navParams.data.songs;
    console.log(this.navParams);
    this.artist = this.navParams.data["artist"];
  }

  async closeModal(flag: boolean, gen: string) {
    if (flag) {
      await this.modalController.dismiss(gen);  
    } 
    else {
      await this.modalController.dismiss(1);
    }
  }

}
