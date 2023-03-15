import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../ServiceAuth/auth.service';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {
 
  resetpasswordForm?: FormGroup;
  submitted = false;
  generateToken : any;

 constructor( private authservice :AuthService , private router: Router, private activatedRoute: ActivatedRoute){ }
  ngOnInit(): void {
   this.resetpasswordForm = new FormGroup({
    password : new FormControl ('', [Validators.required]),
    // password : new FormControl ('', [Validators.required]),
   });
   this.activatedRoute.params.subscribe(params => {
    this.generateToken = params['generateToken']
  });
  }

  resetPass(){
    this.submitted = true;
    if(this.resetpasswordForm?.invalid){
      return;
    }
    console.log(this.resetpasswordForm?.value);
    
    this.authservice.resetPassword(this.resetpasswordForm?.value, this.generateToken).subscribe((response:any)=>{
      console.log(response);
      console.log(this.generateToken);
      
      this.router.navigateByUrl('/pages/login');
    },(error)=>{console.log(error);
    })
    
  }
}
