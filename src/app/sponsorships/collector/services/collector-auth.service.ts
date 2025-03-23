import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectorAuthService {

  constructor(private  http:HttpClient) { }

  logout() {
    return this.http.post(`${environment.apiUrl}/collector/logout`, {})

  }

  login(loginData: { login: string; password: string }) {
    return this.http.post(`${environment.apiUrl}/collector/login`,loginData)
  }
}
