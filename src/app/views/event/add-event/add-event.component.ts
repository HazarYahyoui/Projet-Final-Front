import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EventService } from "../ServiceEvent/event.service";

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit {
  submitted = false;
  addeventForm?:FormGroup;
  
  constructor(private eventservice: EventService, private router: Router){ }
  ngOnInit(): void {
    this.addeventForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      photo: new FormControl('',[Validators.required]),
      ticketNumber: new FormControl('',[Validators.required, Validators.min(1), Validators.max(10)]),
      eventType: new FormControl('',[Validators.required]),
      price: new FormControl('',[]),
      location: new FormControl('',[Validators.required]),
      tags: new FormControl('',[]),
    })
  }

  addEvent(){
    this.submitted= true;
    if (this.addeventForm?.invalid){
      return;
    }
    console.log(this.addeventForm?.value);
    this.eventservice.createEvent(this.addeventForm?.value)
    this.router.navigateByUrl('/list-event');
  }
}
