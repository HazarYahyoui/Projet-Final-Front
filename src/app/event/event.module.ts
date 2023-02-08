import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EventRoutingModule } from './event-routing.module';
import { EventComponent } from './event.component';
import { AddEventComponent } from './add-event/add-event.component';
import { ListEventComponent } from './list-event/list-event.component';
import { EditEventComponent } from './edit-event/edit-event.component';


@NgModule({
  declarations: [
    EventComponent,
    AddEventComponent,
    ListEventComponent,
    EditEventComponent
  ],
  imports: [
    CommonModule,
    EventRoutingModule
  ]
})
export class EventModule { }
