import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from "../ServiceAuth/auth.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  registerForm?: FormGroup;
  submitted = false;
  
  constructor(private authservice:AuthService , private router: Router) { }
  ngOnInit(): void {
    this.registerForm = new FormGroup({
     name : new FormControl ('', [Validators.required]),
     description: new FormControl('',[Validators.required]),
     email: new FormControl('',[Validators.required]),
     password: new FormControl('',[Validators.required]),
     role: new FormControl('',[Validators.required]),
    });
   };

   addregister(){
    this.submitted = true;
    if(this.registerForm?.invalid){
      return;
    }
    console.log(this.registerForm?.value);
   this.authservice.register(this.registerForm?.value);
   this.router.navigateByUrl('/login');
   
  }
}
