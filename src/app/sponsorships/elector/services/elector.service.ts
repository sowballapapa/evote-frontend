import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ElectorService {

  constructor(private http: HttpClient) { }

  getElector(){
    return this.http.get(`${environment.apiUrl}/elector/elector-infos`)
  }

  getMyCandidate(){
    return this.http.get(`${environment.apiUrl}/elector/my-candidate`)
  }

  getAllCandidatures(){
    return this.http.get(`${environment.apiUrl}/elector/all-candidatures`)
  }

  getCandidature(candidate:any){
    return this.http.get(`${environment.apiUrl}/elector/candidature/${candidate}`)
  }

  sponsored(sponsoring:any){
    return this.http.post(`${environment.apiUrl}/elector/sponsored`, sponsoring)
  }
}
