import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http: HttpClient) { }


  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-admins?page='+page)
  }

  getOne(id: any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-admins/'+id)
  }

  getNoAccountsUser() {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/no-admins-acc')
  }

  create(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'users/acc-admins', data)
  }
}
