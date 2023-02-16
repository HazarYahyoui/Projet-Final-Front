import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EventService } from '../ServiceEvent/event.service';


@Component({
  selector: 'app-list-event',
  templateUrl: './list-event.component.html',
  styleUrls: ['./list-event.component.scss']
})
export class ListEventComponent implements OnInit {

  events:any;

  constructor(private eventservice: EventService, private router: Router){ }

  ngOnInit(): void {
    this.events=this.eventservice.getAllEvent()

  };

  delete(i:any){
    this.eventservice.deleteEvent(i)
    this.ngOnInit
    location.reload();
  }

}
