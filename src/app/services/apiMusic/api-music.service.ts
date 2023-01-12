import { Injectable } from '@angular/core';
import data from '../../../assets/artists.json';
@Injectable({
  providedIn: 'root'
})
export class ApiMusicService {

  constructor() { }
  
  getNewReleases(){
    return data;
  }
}
