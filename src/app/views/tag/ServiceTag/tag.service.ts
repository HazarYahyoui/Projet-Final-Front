import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
  baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }
  
 
  getAllTag(){
    return this.http.get(`${this.baseUrl}/AllTag`);
  }

  getTag(Id:string){
    return this.http.get(`${this.baseUrl}/:Id`);
  }
  createTag(body:any){
    return this.http.post(`${this.baseUrl}/createTag`, body);
  }

  updateTag(Id: string, body:any){
    return this.http.put(`${this.baseUrl}/updateTag/:Id`, body);
  }

  deleteTag(Id: string){
    return this.http.delete(`${this.baseUrl}/deleteTag/:Id`);
  }
}
