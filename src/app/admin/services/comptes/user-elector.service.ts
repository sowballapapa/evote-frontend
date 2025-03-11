import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserElectorService {

  constructor(private http: HttpClient) { }


  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/electors?page='+page)
  }
}
