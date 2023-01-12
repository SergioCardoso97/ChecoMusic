import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import swal from 'sweetalert2';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private authServices: AuthService,
              private router: Router,
              private storage: Storage) { 
                
      this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
   }

  async ngOnInit() {
    await this.storage.create();    
    this.storage.set('isUserLoggedIn', false);
  }

  loginUser(loginForm: any){
    console.log("credenciales ->", loginForm);
    this.authServices.loginUser(loginForm).then(res => {
      //swal.fire('Login successful!!', "hola", 'success');
      this.loginForm = this.formBuilder.group({
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
      this.storage.set('isUserLoggedIn', true);
      this.router.navigateByUrl("/menu/home")
    }).catch(res => {
      alert("User not found!!");
      //swal.fire('User not found!!', "hola", 'error');
      this.storage.set('isUserLoggedIn', false);
    });
    
  }
  goToRegister(){
    this.router.navigateByUrl("/register")
  }

}
