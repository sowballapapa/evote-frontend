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


}
