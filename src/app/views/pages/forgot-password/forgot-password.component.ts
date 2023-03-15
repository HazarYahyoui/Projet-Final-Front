import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {
 
  forgotpasswordForm?: FormGroup;
  submitted = false;
 constructor( private authservice :AuthService , private router: Router){ }
  ngOnInit(): void {
   this.forgotpasswordForm = new FormGroup({
    email : new FormControl ('', [Validators.required]),
   });
  }

  forgotPass(){
    this.submitted = true;
    if(this.forgotpasswordForm?.invalid){
      return;
    }
    console.log(this.forgotpasswordForm?.value);
    
    this.authservice.forgotPassword(this.forgotpasswordForm?.value).subscribe((response:any)=>{
      console.log(response);
      this.router.navigateByUrl('/pages/login');
    },(error)=>{console.log(error);
    })
  
  }
}
