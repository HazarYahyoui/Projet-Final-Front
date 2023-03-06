import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { CompanyService } from "src/app/views/company/ServiceCompany/company.service";

@Component({
  selector: 'app-list-company',
  templateUrl: './list-company.component.html',
  styleUrls: ['./list-company.component.scss']
})
export class ListCompanyComponent implements OnInit{
  
  companys:any;

  constructor(private companyservice:CompanyService, private router: Router){ }
  ngOnInit(): void {
    this.companyservice.getAllCompany().subscribe((response)=>{
      this.companys= response
    },(error)=>{console.log(error);
    })
  }
  delete(i:any){
    this.companyservice.deleteCompany(i)
    this.ngOnInit
    location.reload();
  }
}
