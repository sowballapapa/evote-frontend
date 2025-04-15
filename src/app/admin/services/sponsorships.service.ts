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

  started(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'sponsorships-start', data)
  }

  stoped(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'sponsorships-stop', data)
  }

  restarted(data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'sponsorships-restart', data)
  }

  getNoValidatedSponsorships(page:number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'sponsorships-no-validated-list?page='+page)
  }

  getValidatedSponsorships(page:any){
    return this.http.get(environment.apiUrl+environment.adminSegment+'sponsorships-validated-list?page='+page)
  }

  getParticipationsList(page: any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'candidates?page='+page)
  }

  setParticipation(id:any,data:any){
    return this.http.put(environment.apiUrl+environment.adminSegment+'sponsorships-set-participation/'+id,data)
  }

  getAllSponsorshipsresults(){
    return this.http.get(environment.apiUrl+'/results/sponsorships-candidates-results')
  }
}
