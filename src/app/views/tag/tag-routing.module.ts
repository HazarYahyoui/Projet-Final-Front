import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddTagComponent } from './add-tag/add-tag.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { ListTagComponent } from './list-tag/list-tag.component';
import { TagComponent } from './tag.component';

const routes: Routes = [
 
  { path: '', 
  data: {
    title: 'Tags'
  },
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'add-tag'
    },
    {
      path: 'add-tag',
      component: AddTagComponent,
      data: {
        title: 'Add Tag'
      }
    },
    {
      path: 'edit-tag',
      component: EditTagComponent,
      data: {
        title: 'Edit Tag'
      }
    },
    {
      path: 'list-tag',
      component: ListTagComponent,
      data: {
        title: 'List Tag'
      }
    },
  ]
}

];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TagRoutingModule { }
