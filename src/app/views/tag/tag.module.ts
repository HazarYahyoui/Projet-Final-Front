import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TagRoutingModule } from './tag-routing.module';
import { TagComponent } from './tag.component';
import { AddTagComponent } from './add-tag/add-tag.component';
import { EditTagComponent } from './edit-tag/edit-tag.component';
import { ListTagComponent } from './list-tag/list-tag.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    TagComponent,
    AddTagComponent,
    EditTagComponent,
    ListTagComponent
  ],
  imports: [
    CommonModule,
    TagRoutingModule,
    ReactiveFormsModule,
    FormsModule
  ]
})
export class TagModule { }
