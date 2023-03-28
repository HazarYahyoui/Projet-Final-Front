import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private http: HttpClient) { }

  Contact(body:any){
    return this.http.post(`http://localhost:3000/contact`, body);
  }

  createReservation(body:any){
    return this.http.post(`http://localhost:3000/contact`, body);
  }
}
