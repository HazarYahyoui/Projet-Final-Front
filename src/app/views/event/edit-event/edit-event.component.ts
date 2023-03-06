import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EventService } from '../ServiceEvent/event.service';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {
  submitted = false;
  editeventForm:FormGroup =new FormGroup({
    name: new FormControl('',[Validators.required]),
    description: new FormControl('',[Validators.required]),
    startDateTime: new FormControl('',[Validators.required]),
    endDateTime: new FormControl('',[Validators.required]),
    photo: new FormControl('',[Validators.required]),
    price: new FormControl('',[Validators.required]),
    ticketNumber: new FormControl('',[Validators.required]),
    eventType: new FormControl('',[Validators.required]),
    location: new FormControl('',[Validators.required]),
    tags: new FormControl('',[Validators.required]),
  })
  eventId: any;
  event: any;
  
  constructor(private eventservice: EventService, private router: Router, private route: ActivatedRoute){ }
  ngOnInit(): void {
    this.eventId= this.route.snapshot.params['id']
    this.event = this.eventservice.getEvent(this.eventId)
    this.editeventForm = new FormGroup({
      name: new FormControl('',[Validators.required]),
      description: new FormControl('',[Validators.required]),
      startDate: new FormControl('',[Validators.required]),
      endDate: new FormControl('',[Validators.required]),
      photo: new FormControl('',[Validators.required]),
      price: new FormControl('',[Validators.required]),
      ticketNumber: new FormControl('',[Validators.required]),
      eventType: new FormControl('',[Validators.required]),
      location: new FormControl('',[Validators.required]),
      tags: new FormControl('',[Validators.required]),
    });

    this.editeventForm.patchValue(this.event);

  }
 
  editEvent(){
    this.submitted = true;
    if(this.editeventForm.invalid){
      return;
    }
    this.eventservice.updateEvent(this.editeventForm.value, this.eventId);
    this.router.navigateByUrl('/event/list-event');
   
  }
}
