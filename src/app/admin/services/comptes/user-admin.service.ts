import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserAdminService {

  constructor(private http: HttpClient) { }


  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/admins?page='+page)
  }
}
