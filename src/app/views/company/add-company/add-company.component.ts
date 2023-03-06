import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CompanyService } from '../ServiceCompany/company.service';

@Component({
  selector: 'app-add-company',
  templateUrl: './add-company.component.html',
  styleUrls: ['./add-company.component.scss']
})
export class AddCompanyComponent implements OnInit {
  submitted = false;
  addcompanyForm?:FormGroup;
  
  constructor(private companyservice: CompanyService, private router: Router){ }
  ngOnInit(): void {
    this.addcompanyForm = new FormGroup({
      companyName: new FormControl('',[Validators.required]),
      companyDescription: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      // role: new FormControl('',[Validators.required]),
      // photo: new FormControl('',[Validators.required]),
      events: new FormControl('',[Validators.required])
    })
  }

  addCompany(){
    this.submitted= true;
    if (this.addcompanyForm?.invalid){
      return;
    }
    console.log(this.addcompanyForm?.value);
    this.companyservice.createCompany(this.addcompanyForm?.value).subscribe((response)=>{
      console.log(response);
      this.router.navigateByUrl('/company/list-company');
    },(error)=>{console.log(error);
    })
    alert('Company account was cresated successfully')
   
  }
}
