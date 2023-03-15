import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

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
    console.log(this.loginForm?.value);
    
    this.authservice.login(this.loginForm?.value).subscribe((response:any)=>{
      console.log(response);
      
      this.router.navigateByUrl('/company/add-company');

    },(error)=>{console.log(error);
    })
  }
}

