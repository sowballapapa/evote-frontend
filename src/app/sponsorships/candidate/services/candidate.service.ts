import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {
  constructor(private  http:HttpClient) { }

  getAllCollectors(page:number) {
    return this.http.get(`${environment.apiUrl}/candidate/collectors?page=`+page)

  }
  getOurElectors(page:number) {
    return this.http.get(`${environment.apiUrl}/candidate/electors?page=`+page)

  }
  getInfos() {
    return this.http.get(`${environment.apiUrl}/candidate/candidate-infos`);
  }

  getCandidateStats(){
    return this.http.get(`${environment.apiUrl}/candidate/get-candidate-stat`);
  }

}
