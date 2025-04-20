import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthPollingStationService {

  constructor(private http:HttpClient) { }

  login(loginData: { login: string; password: string }) {
    return this.http.post(`${environment.apiUrl}/polling-station/login`,loginData)
  }
}
