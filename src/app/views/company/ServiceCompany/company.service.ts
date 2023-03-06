import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 
  constructor( private http: HttpClient) { }
  
 
  getAllCompany(){
    return this.http.get(`http://localhost:3000/AllCompany`);
  }

  getCompany(Id:string){
    return this.http.get(`http://localhost:3000/${Id}`);
  }
  createCompany(body:any){
    return this.http.post(`http://localhost:3000/createCompany`, body);
  }

  updateCompany(Id: string, body:any){
    return this.http.put(`http://localhost:3000/updateCompany/${Id}`, body);
  }

  deleteCompany(Id: string){
    return this.http.delete(`http://localhost:3000/deleteCompany/${Id}`);
  }
}
