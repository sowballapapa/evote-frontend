import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class MunicipalityService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.apiUrl+'/admin/municipalities')
  }
}
