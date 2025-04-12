import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RoleService {

  constructor(private http: HttpClient  ) { }

  getAllRoles(){
    return this.http.get(environment.apiUrl+environment.adminSegment+'get-all-roles')
  }
  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'roles?page='+page)
  }


  getOne(id:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'roles/'+id)
  }

  create(role:any){
    return this.http.post(environment.apiUrl+environment.adminSegment+'roles', role)
  }

  edit(id:number, role:any){
    return this.http.put(environment.apiUrl+environment.adminSegment+'roles/'+id,role)
  }

}
