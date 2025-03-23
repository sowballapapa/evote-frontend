import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {

  constructor(private http: HttpClient) { }

  getCandidatureInfos() {
    return this.http.get(`${environment.apiUrl}/collector/our-candidature`)

  }

  getOurElectors(page:number) {
    return this.http.get(`${environment.apiUrl}/collector/our-electors?page=${page}`)

  }

  searchElector(elector:object){
    return this.http.post(`${environment.apiUrl}/collector/search-elector`, elector )
  }

  sponsoring(collect_f: FormData) {

    return this.http.post(`${environment.apiUrl}/collector/sponsoring`, collect_f)
  }
}
