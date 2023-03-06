import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CompanyService } from '../ServiceCompany/company.service';

@Component({
  selector: 'app-edit-company',
  templateUrl: './edit-company.component.html',
  styleUrls: ['./edit-company.component.scss']
})
export class EditCompanyComponent implements OnInit {
  submitted = false;
  editcompanyForm:FormGroup = new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required]),
    password: new FormControl('',[Validators.required]),
    role: new FormControl('',[Validators.required]),
    photo: new FormControl('',[Validators.required]),
    events: new FormControl('',[Validators.required])
  });
  
  constructor(private companyservice: CompanyService, private router: Router, private route: ActivatedRoute){ }
  company: any;
  companyId: any;
  
  ngOnInit(): void {
    this.companyId= this.route.snapshot.params['id']
    this.company = this.companyservice.getCompany(this.companyId)
    this.editcompanyForm = new FormGroup({
      companyName: new FormControl('',[Validators.required]),
      companyDescription: new FormControl('',[Validators.required]),
      email: new FormControl('',[Validators.required]),
      password: new FormControl('',[Validators.required]),
      role: new FormControl('',[Validators.required]),
      photo: new FormControl('',[Validators.required]),
      events: new FormControl('',[Validators.required])
    });

    this.editcompanyForm.patchValue(this.company);
  }

  editCompany(){
    this.submitted = true;
    if(this.editcompanyForm.invalid){
      return;
    }
    this.companyservice.updateCompany(this.editcompanyForm.value, this.companyId);
    this.router.navigateByUrl('/list-company');
   
  }
}
