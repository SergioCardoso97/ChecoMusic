import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth/auth.service';
import swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  loginForm: FormGroup;
  errorMessage: string = '';
  constructor(private formBuilder: FormBuilder, 
              private authServices: AuthService,
              private navControles: NavController) { 
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

  ngOnInit() {
  }

  loginUser(loginForm: any){
    console.log("credenciales ->", loginForm);
    this.authServices.loginUser(loginForm).then(res => {
      swal.fire('Login successful!!', "hola", 'success');
      this.navControles.navigateForward("/home")
    }).catch(res => {
      this.errorMessage = "User not found!!";
      swal.fire('User not found!!', "hola", 'error');
    });
    
  }

}
