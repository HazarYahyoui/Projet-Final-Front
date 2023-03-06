import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class TagService {
 
  constructor( private http: HttpClient) { }
  
 
  getAllTag(){
    return this.http.get(`http://localhost:3000/tag`);
  }

  getTag(Id:string){
    return this.http.get(`http://localhost:3000/${Id}`);
  }
  createTag(body:any){
    return this.http.post(`http://localhost:3000/createTag`, body);
  }

  updateTag(Id: string, body:any){
    return this.http.put(`http://localhost:3000/updateTag/${Id}`, body);
  }

  deleteTag(Id: string){
    return this.http.delete(`http://localhost:3000/deleteTag/${Id}`);
  }
}
