import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 
  resetpasswordForm?: FormGroup;
  submitted = false;
 constructor( private authservice :AuthService , private router: Router){ }
  ngOnInit(): void {
   this.resetpasswordForm = new FormGroup({
    password : new FormControl ('', [Validators.required]),
    newPassword : new FormControl ('', [Validators.required]),
   });
  }

  resetPass(){
    this.submitted = true;
    if(this.resetpasswordForm?.invalid){
      return;
    }
    this.authservice.resetPassword(this.resetpasswordForm?.value)
    this.router.navigateByUrl('/login');
  }
}
