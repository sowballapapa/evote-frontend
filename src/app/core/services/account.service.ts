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
}
