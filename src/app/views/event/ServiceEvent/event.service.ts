import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

 
  constructor( private http: HttpClient) { }
  
 
  getAllEvent(){
    return this.http.get(`http://localhost:3000/AllEvent`);
  }

  getEvent(Id:string){
    return this.http.get(`http://localhost:3000/Event/${Id}`);
  }
  createEvent(body:any){
    return this.http.post(`http://localhost:3000/createEvent`, body);
  }

  updateEvent(Id: string, body:any){
    return this.http.put(`http://localhost:3000/updateEvent/${Id}`, body);
  }

  deleteEvent(Id: string){
    return this.http.delete(`http://localhost:3000/deleteEvent/${Id}`);
  }
}

