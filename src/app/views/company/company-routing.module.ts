import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddCompanyComponent } from './add-company/add-company.component';
import { CompanyComponent } from './company.component';
import { EditCompanyComponent } from './edit-company/edit-company.component';
import { ListCompanyComponent } from './list-company/list-company.component';

const routes: Routes = [
 
  { path: '', 
  data: {
    title: 'Companys'
  },
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'add-company'
    },
    {
      path: 'add-company',
      component: AddCompanyComponent,
      data: {
        title: 'Add Company'
      }
    },
    {
      path: 'edit-company',
      component: EditCompanyComponent,
      data: {
        title: 'Edit Company'
      }
    },
    {
      path: 'list-company',
      component: ListCompanyComponent,
      data: {
        title: 'List Company'
      }
    },
  ]
}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CompanyRoutingModule { }

