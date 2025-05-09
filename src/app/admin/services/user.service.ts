import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  resetUserPassword(data:any){
    return this.http.post(environment.apiUrl+environment.adminSegment+'users/reset-acc-password',data)
  }


  getAllUsers(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users?page='+page)
  }


  getUser(user:any){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/users/'+user)
  }

}
