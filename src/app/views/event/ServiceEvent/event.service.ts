import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }
  
 
  getAllEvent(){
    return this.http.get(`${this.baseUrl}/AllEvent`);
  }

  getEvent(Id:string){
    return this.http.get(`${this.baseUrl}/:Id`);
  }
  createEvent(body:any){
    return this.http.post(`${this.baseUrl}/createEvent`, body);
  }

  updateEvent(Id: string, body:any){
    return this.http.put(`${this.baseUrl}/updateEvent/:Id`, body);
  }

  deleteEvent(Id: string){
    return this.http.delete(`${this.baseUrl}/deleteEvent/:Id`);
  }
}

