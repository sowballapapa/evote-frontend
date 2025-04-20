import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ElectorService {

  constructor(private http: HttpClient) { }

  getAllElectors(page:number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'electors?page='+page)
  }

  getElector(id:number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'electors/'+id);
  }

  createElector(elector:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'electors', elector)
  }

  editElector(id:number, elector:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'electors/'+id, elector);
  }

  destroy(id: any) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'electors/'+id);
  }
}
