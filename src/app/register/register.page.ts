import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../services/auth/auth.service';
import { Storage } from '@ionic/storage-angular';
import swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  registerForm: FormGroup;
  constructor(private formBuilder: FormBuilder, 
              private authServices: AuthService,
              private router: Router,
              private storage: Storage) { 
                this.registerForm = this.formBuilder.group({
                  name: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+')
                  ])),
                  name2: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+')
                  ])),
                  email: new FormControl(null, Validators.compose([
                    Validators.required,
                    Validators.email,
                  ])),
                  password: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                  ])),
                  password2: new FormControl('', Validators.compose([
                    Validators.required,
                    Validators.minLength(5)
                  ])),
                });
   }

  async ngOnInit() {
  }

  registerUser(registerForm: any){
    if (registerForm.password == registerForm.password2) {
      console.log("credenciales ->", registerForm);
      this.authServices.registerUser(registerForm).then(res => {
        //swal.fire('Login successful!!', "hola", 'success');
        this.resetForm();
        this.router.navigateByUrl("/login")
      }).catch(res => {
        alert("User invalid");
        //swal.fire('User not found!!', "hola", 'error');
      });
    } 
    else {
      alert("Passwords do not match");
    }    
  }
  backToLogin(){
    this.router.navigateByUrl("/login")
  }
  resetForm(){
    this.registerForm = this.formBuilder.group({
      name: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+')
      ])),
      name2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('[a-zA-zÑñáéíóúüÁÉÍÓÚÜ\s]+')
      ])),
      email: new FormControl(null, Validators.compose([
        Validators.required,
        Validators.email,
      ])),
      password: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
      password2: new FormControl('', Validators.compose([
        Validators.required,
        Validators.minLength(5)
      ])),
    });
  }
}
