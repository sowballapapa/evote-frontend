import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SponsorshipsService {

  constructor(private http: HttpClient) { }

  getSponsorshipsInfos() {
    return this.http.get(environment.apiUrl+environment.adminSegment+'sponsorships-details')
  }

  edit( data:any){
    return this.http.post(environment.apiUrl+environment.adminSegment+'sponsorships-details/1', data)
  }
}
