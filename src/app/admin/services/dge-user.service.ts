import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DgeUserService {

  constructor(private http: HttpClient) { }

  getAllDgeUsers(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'dge-users?page='+page)
  }

  getDgeUser(id:any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'dge-users/'+id)
  }

  createDgeUser(data:any){
    return this.http.post(environment.apiUrl+environment.adminSegment+'dge-users',data)
  }

  editDgeUser(id:number, data:any) {
    return this.http.put(environment.apiUrl+environment.adminSegment+'dge-users/' + id, data)
  }

  deleteDgeUser(id:number) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'dge-users/' + id)
  }
}
