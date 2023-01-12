import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) 
  {
    this.storage.create();
    // this.storage.set("user", 0)
  }

  async loginUser(credential: any){
    var dataUserRegister: any = await this.storage.get("user");
    return new Promise((accept, reject) => {
      if (
        credential.email == dataUserRegister.email &&
        credential.password == dataUserRegister.password
      ) {
        accept("Login Correcto")
      } else {
        reject("Login Incorrecto")
      }
    })
  }
  registerUser(registerForm: any){
    return this.storage.set("user", registerForm)
  }
}
