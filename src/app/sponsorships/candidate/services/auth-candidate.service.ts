import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthCandidateService {

  constructor(private  http:HttpClient) { }

  logout() {
    return this.http.post(`${environment.apiUrl}/candidate/logout`, {})

  }

  login(loginData: { login: string; password: string }) {
    return this.http.post(`${environment.apiUrl}/candidate/login`,loginData)
  }
}
