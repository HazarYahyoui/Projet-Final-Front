import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  loginForm?: FormGroup;
  submitted = false;
 constructor( private authservice :AuthService , private router: Router){ }
  ngOnInit(): void {
   this.loginForm = new FormGroup({
    email : new FormControl ('', [Validators.required]),
    password : new FormControl ('', [Validators.required]),
   });
  }

  addlog(){
    this.submitted = true;
    if(this.loginForm?.invalid){
      return;
    }
    this.authservice.login
    this.router.navigateByUrl('/add-company');
  }
}

