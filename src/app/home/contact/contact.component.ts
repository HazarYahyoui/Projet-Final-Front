import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from "../Service-Home/home.service";

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  contactForm?: FormGroup;
  submitted = false;
  constructor(private homeservice: HomeService, private router : Router) {}
  ngOnInit(): void {
    this.contactForm = new FormGroup({
      name : new FormControl ('', [Validators.required]),
      email : new FormControl ('', [Validators.required]),
      subject : new FormControl ('', [Validators.required]),
      message : new FormControl ('', [Validators.required]),
     });
  }
  contact(){
    this.submitted = true;
    if(this.contactForm?.invalid){
      return;
    }
    console.log(this.contactForm?.value);
    
    this.homeservice.Contact(this.contactForm?.value).subscribe((response:any)=>{
      console.log(response);
      // this.router.navigateByUrl('/home/home-page');
    },(error)=>{console.log(error);
    })

}
}
