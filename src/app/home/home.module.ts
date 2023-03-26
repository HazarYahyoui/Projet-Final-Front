import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { FooterComponent } from './footer/footer.component';
import { TicketComponent } from './ticket/ticket.component';
import { EventsComponent } from './events/events.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomePageComponent } from './home-page/home-page.component';
import { CardEventComponent } from './events/card-event/card-event.component';
import { ReservationEventComponent } from './events/reservation-event/reservation-event.component';
import { DetailsEventComponent } from './events/details-event/details-event.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormModule } from '@coreui/angular';


@NgModule({
  declarations: [
    HomeComponent,
    NavbarComponent,
    FooterComponent,
    TicketComponent,
    EventsComponent,
    AboutComponent,
    ContactComponent,
    HomePageComponent,
    CardEventComponent,
    ReservationEventComponent,
    DetailsEventComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormModule
  ]
})
export class HomeModule { }
