import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CompanyRoutingModule } from './company-routing.module';
import { CompanyComponent } from './company.component';
import { AddCompanyComponent } from './add-company/add-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule, CardModule, FormModule, GridModule } from '@coreui/angular';
import { DocsComponentsModule } from '@docs-components/docs-components.module';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    CompanyComponent,
    AddCompanyComponent,
    ListCompanyComponent,
    EditCompanyComponent
  ],
  imports: [
    CommonModule,
    CompanyRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    CardModule,
    FormModule,
    GridModule,
    ButtonModule,
    DocsComponentsModule,
    HttpClientModule,
  
    
  ]
})
export class CompanyModule { }
