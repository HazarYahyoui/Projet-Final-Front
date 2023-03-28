import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { HomeService } from '../../Service-Home/home.service';

@Component({
  selector: 'app-reservation-event',
  templateUrl: './reservation-event.component.html',
  styleUrls: ['./reservation-event.component.scss']
})
export class ReservationEventComponent implements OnInit{

  reservationForm?:  FormGroup;
  submitted= false;

  constructor (private homeservise: HomeService, private router: Router, private fb: FormBuilder) {
    // this.reservationForm = fb.group ({
    //   firstName :[],
    //   lastName : [],
    //   email : [],
    //   ticket: fb.array([])
    //  });
   }
  ngOnInit(): void {
 this.reservationForm = new FormGroup ({
      FirstName : new FormControl ('', [Validators.required]),
      LastName : new FormControl('', [Validators.required]),
      Email : new FormControl ('', [Validators.required]),
      Ticket: new FormArray([])
     });
  }

  get getTickets(): FormArray{
    return this.reservationForm?.get('tickets') as FormArray
  }

  addNewTicketGroup() {
    this.getTickets.push(new FormGroup({
      reservedFName : new FormControl ('', [Validators.required]),
      reservedLName : new FormControl('', [Validators.required]),
      reservedEmail : new FormControl ('', [Validators.required]),
    }))
    // this.getTickets.push (
    //   this.fb.group({
    //     FisrtName: [],
    //     LastName: [],
    //     Email: [],
    //   })
    // );
  }

  deleteTicketsGroup(index: number) {
    this.getTickets.removeAt(index);
  }

  deleteEmpty() {
    let indexToRemove: number[] = [];
    let fromArray = this.reservationForm?.get('ticket') as FormArray;

    fromArray.controls.forEach((control, index) => {
      if (!control.value.street) {
        indexToRemove.push(index);
      }
    });
    indexToRemove.reverse().forEach((index) => {
      fromArray.removeAt(index);
    });
  }

  reserve(){
    this.submitted = true;
       if(this.reservationForm?.invalid){
         return;
       }
       console.log(this.reservationForm?.value);
       
       this.homeservise.createReservation(this.reservationForm?.value).subscribe((response:any)=>{
         console.log(response);
       },(error)=>{console.log(error);
       })
     }
}


