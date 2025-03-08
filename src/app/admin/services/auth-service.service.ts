import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';
import {AuthResponse} from '../interfaces/auth-response';



@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }


  login(loginData:object){
     return this.http.post<AuthResponse>(`${environment.apiUrl}/admin/login`,loginData)
  }

  logout(){
  return this.http.post(`${environment.apiUrl}/admin/logout`, {})
  }


}
