import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import{ Camera, CameraResultType, CameraSource  } from '@capacitor/camera';
import { AlertController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})

export class SettingsPage implements OnInit {
  userImage = 'data:image/jpeg;base64,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';
  photo: SafeResourceUrl | undefined;
  userLogin: any = {};
  constructor(
    private sanitizer: DomSanitizer,
    private storage: Storage,
    private alertController: AlertController
  ) {
    this.storage.create();
   }
  async ngOnInit() {
    this.userLogin = await this.storage.get('user');
    console.log("user login -> ", this.userLogin);
    
  }
  async takePhoto() {
    const image: any = await Camera.getPhoto({
      quality: 100,
      allowEditing: false,
      resultType: CameraResultType.DataUrl,
      source: CameraSource.Camera
    });
    this.photo = this.sanitizer.bypassSecurityTrustUrl(image && image.dataUrl);
    console.log(image);
  }
  async alertChangeDataUserLogin(i: number){
      if (i == 1) {
        const alert = await this.alertController.create({
            header: "Do yo change your User Name?",
            inputs: [
              {
                name: 'name',
                type: 'text',
                placeholder: "Enter the new user"
              }
            ],
            buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (alertData) => {
                    return true;
                  }
                }, 
                {
                  text: 'Change',
                  role: 'confirm',
                  cssClass: 'primary',
                  handler: (alertData) => { //takes the data 
                    console.log("Alert data -> ", alertData);
                    //this.handlerMessage =  alertData.name1;
                    if(alertData.name.length != 0) {
                      this.userLogin.userName = alertData.name;
                      this.storage.set("user",this.userLogin);
                      return true;
                    } 
                    else {
                      alert.message = "Come on man!! Insert your new username"
                      return false;
                    }
                  }
                }
            ],
            backdropDismiss: false
        });
        await alert.present();
      }
      if (i == 2) {
        const alert = await this.alertController.create({
            header: "Do yo change your Email?",
            inputs: [
              {
                name: 'email',
                type: 'text',
                placeholder: "Enter the new email"
              }
            ],
            buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (alertData) => {
                    return true;
                  }
                }, 
                {
                  text: 'Change',
                  role: 'confirm',
                  cssClass: 'primary',
                  handler: (alertData) => { //takes the data 
                    console.log("Alert data -> ", alertData);
                    if(alertData.email.length != 0) {
                      this.userLogin.email = alertData.email;
                      this.storage.set("user",this.userLogin);
                      return true;
                    } 
                    else {
                      alert.message = "Come on man!! Insert your new email"
                      return false;
                    }
                  }
                }
            ],
            backdropDismiss: false
        });
        await alert.present();
      }
      if (i == 3) {
        const alert = await this.alertController.create({
            header: "Do yo change your Password?",
            inputs: [
              {
                name: 'pass1',
                type: 'password',
                placeholder: "Enter the new password"
              },
              {
                name: 'pass2',
                type: 'password',
                placeholder: "Confirm your password"
              }
            ],
            buttons: [
                {
                  text: 'Cancel',
                  role: 'cancel',
                  cssClass: 'secondary',
                  handler: (alertData) => {
                    return true;
                  }
                }, 
                {
                  text: 'Change',
                  role: 'confirm',
                  cssClass: 'primary',
                  handler: (alertData) => { //takes the data 
                    console.log("Alert data -> ", alertData);
                    if(alertData.pass1.length != 0 && alertData.pass2.length != 0) {
                      if (alertData.pass1.length == alertData.pass2.length) {
                        this.userLogin.password = alertData.pass1;
                        this.userLogin.password2 = alertData.pass2;
                        this.storage.set("user",this.userLogin);
                        return true;
                      } 
                      else {
                        alert.message = "Come on man!! Passwords do not match"
                        return false;
                      }
                    } 
                    else {
                      alert.message = "Come on man!! Insert your new password or insert password confirmation"
                      return false;
                    }
                  }
                }
            ],
            backdropDismiss: false
        });
        await alert.present();
      }
  }
}
