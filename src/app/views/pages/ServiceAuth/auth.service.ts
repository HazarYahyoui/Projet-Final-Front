import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 

  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post(`http://localhost:3000/register`, body);
  }

  login(body: any){
    return this.http.post(`http://localhost:3000/login`, body);

  }

  forgotPassword(body: any){
    return this.http.post(`http://localhost:3000/forgotPass`, body);

  }

  resetPassword(body: any){
    return this.http.put(`http://localhost:3000/resetPass`, body);

  }
}
