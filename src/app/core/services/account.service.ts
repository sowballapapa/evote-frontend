import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AccountService {

  constructor(private http: HttpClient) { }

  getUserDatas(){
    return this.http.get(`${environment.apiUrl}/get-user-datas`)
  }

  getElectorDatas(){
    return this.http.get<any>(`${environment.apiUrl}/get-elector-datas`);
  }

  checkPassword(user:any){
    return this.http.post(`${environment.apiUrl}/check-password`, user)
  }

  resetPassword(user:any){
    return this.http.post(`${environment.apiUrl}/set-user-password`, user)
  }

  forgotPassword(user:any){
    return this.http.post(`${environment.apiUrl}/forgot-password`, user)
  }

  resetPasswordToken(user:any){
    return this.http.post(`${environment.apiUrl}/reset-password`, user)
  }
}
