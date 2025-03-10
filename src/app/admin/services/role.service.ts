import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient  ) { }

  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'roles?page='+page)
  }


  getOne(id:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'roles/'+id)
  }

}
