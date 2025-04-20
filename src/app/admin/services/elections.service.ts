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

  edit(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'elections-details/1', data);
  }

  restarted(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'elections-restart', data)

  }

  started(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'elections-start', data)

  }
  stoped(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'elections-stop', data)

  }

  getCandidatesResults() {
    return this.http.get(environment.apiUrl+'/get-elections-résults')
  }
}
