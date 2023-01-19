import { Component, OnInit } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';
import { Geolocation } from '@capacitor/geolocation';
@Component({
  selector: 'app-sports',
  templateUrl: './sports.page.html',
  styleUrls: ['./sports.page.scss'],
})
export class SportsPage{

  mapa: string = "https://maps.google.com/?ll=19.29267395515275,-99.18628692626953&z=14&t=m&output=embed";
  currentCenter: any;
  coordinates: any[] = []
  defaultZoom = 14;
  constructor(
    private sanitizer: DomSanitizer,) { }

  ionViewDidEnter() {
      this.getCurrentPosition();
    }
  urlMapa(mapa: string){
    return this.sanitizer.bypassSecurityTrustResourceUrl(mapa);
  }

  async getCurrentPosition(){
    const coordinates = await Geolocation.getCurrentPosition();
    // const map = new google.maps.Map(
    //   document.getElementById("map") as HTMLElement,
    //   {
    //     zoom: 4,
    //     center: { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude },
    //   }
    // );
    // const beachMarker = new google.maps.Marker({
    //   position: { lat: coordinates.coords.latitude, lng: coordinates.coords.longitude },
    //   map
    // });
    console.log('Current position:', coordinates);

    //this.mapa = "https://maps.google.com/?ll=" + coordinates.coords.latitude + "," + coordinates.coords.longitude + "&z=14&t=m&output=embed"

  }
}
