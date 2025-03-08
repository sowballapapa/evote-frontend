import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class GuestDetailsService {

  private urlSegment = "/guest/details/";



  constructor(private httpClient: HttpClient) { }

getDgeSysDetails(): Observable<any>{
  return this.httpClient.get(`${environment.apiUrl}${this.urlSegment}dge-sys-infos`)
}

getSponsorshipsDetails():Observable<any>{
  return this.httpClient.get(environment.apiUrl+this.urlSegment+'sponsorships-sys-infos')
}

getElectionsDetails():Observable<any>{
  return this.httpClient.get(environment.apiUrl+this.urlSegment+"elections-sys-infos")
}


getCandidatures(){
  return this.httpClient.get(environment.apiUrl+this.urlSegment+"candidatures-infos")
}

}
