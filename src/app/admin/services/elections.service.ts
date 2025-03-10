import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ElectionsService {

  constructor(private http: HttpClient) { }

  getElectionsInfos(){
    return this.http.get(environment.apiUrl+environment.adminSegment+'elections-details')
  }
}
