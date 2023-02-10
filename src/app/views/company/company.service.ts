import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
 baseUrl: string = environment.baseUrl;
  constructor( private http: HttpClient) { }
  
 
  getAllCompany(){
    return this.http.get(`${this.baseUrl}/AllCompany`);
  }

  getCompany(Id:string){
    return this.http.get(`${this.baseUrl}/:Id`);
  }
  createCompany(body:any){
    return this.http.post(`${this.baseUrl}/createCompany`, body);
  }

  updateCompany(Id: string, body:any){
    return this.http.put(`${this.baseUrl}/updateCompany/:Id`, body);
  }

  deleteCompany(Id: string, body:any){
    return this.http.delete(`${this.baseUrl}/deleteCompany/:Id`, body);
  }
}
