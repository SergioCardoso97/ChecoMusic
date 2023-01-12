import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  constructor(private menu: MenuController,
              private router: Router,
              private storage: Storage) {
                this.storage.create()
                
               }

  ngOnInit() {
  }

  closeMenu(){
    this.menu.close();
  }
  logOut(){
    this.menu.close();
    this.storage.set("isUserLoggedIn", false);
    this.router.navigateByUrl("/login")
  }
  goToHome(){
    this.menu.close();
    this.router.navigateByUrl("/menu/home");
  }
  goToSettings(){
    this.menu.close();
    this.router.navigateByUrl("/menu/settings");
  }

}
