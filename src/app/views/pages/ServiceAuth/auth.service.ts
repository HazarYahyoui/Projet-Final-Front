import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  register(body:any){
    return this.http.post(`${this.baseUrl}/register`, body);
  }

  login(body: any){
    return this.http.post(`${this.baseUrl}/login`, body);

  }
}
