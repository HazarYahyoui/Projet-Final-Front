import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';


@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule
  ]
})
export class CompanyModule { }
