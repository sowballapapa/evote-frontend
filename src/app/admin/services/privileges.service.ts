import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PrivilegesService {

  constructor(private http:HttpClient) { }

  getAll() {
    return this.http.get(environment.apiUrl+environment.adminSegment+'privileges')
  }

  getAdminPrivileges(id:any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'privileges-authorizations/'+id)
  }

  removeAdminPrivilege(id:any, data:any) {
    return this.http.request('delete',`${environment.apiUrl+environment.adminSegment+'privileges-authorizations'}/${id}`, {
      body: data
    });
  }

  addAdminPrivilege(data:any) {
    return this.http.post(`${environment.apiUrl+environment.adminSegment+'privileges-authorizations'}`, data)
  }
}
