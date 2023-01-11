import { Injectable } from '@angular/core';
import { testUserAgent } from '@ionic/core/dist/types/utils/platform';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  loginUser(credential: any){
    return new Promise((accept, reject) => {
      if (
        credential.email == "test@test.com" &&
        credential.password == "12345"
      ) {
        accept("Login Correcto")
      } else {
        reject("Login Incorrecto")
      }
    })
  }
}
