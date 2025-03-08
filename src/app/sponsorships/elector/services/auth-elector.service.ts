import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AuthElectorService {

  constructor(private http: HttpClient) { }


  login(loginData:object){
    return this.http.post(`${environment.apiUrl}/elector/login`,loginData)
  }

  register(registerData:object){
    return this.http.post(`${environment.apiUrl}/elector/register`,registerData)
  }

  logout(){
    return this.http.post(`${environment.apiUrl}/elector/logout`, {})
  }

}
