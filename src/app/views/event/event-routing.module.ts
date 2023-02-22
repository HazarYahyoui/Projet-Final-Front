import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddEventComponent } from './add-event/add-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';
import { EventComponent } from './event.component';
import { ListEventComponent } from './list-event/list-event.component';

const routes: Routes = [
 
  { path: '', 
  data: {
    title: 'Events'
  },
  children:[
    {
      path: '',
      pathMatch: 'full',
      redirectTo: 'add-event'
    },
    {
      path: 'add-event',
      component: AddEventComponent,
      data: {
        title: 'Add Event'
      }
    },
    {
      path: 'edit-event',
      component: EditEventComponent,
      data: {
        title: 'Edit Event'
      }
    },
    {
      path: 'list-event',
      component: ListEventComponent,
      data: {
        title: 'List Event'
      }
    },
  ]
}

];;

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EventRoutingModule { }
