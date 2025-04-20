import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PollingStationService {

  constructor(private http: HttpClient) { }

  getParties(){
    return this.http.get(environment.apiUrl+'/polling-station/all-parties');
  }

  searchElector(searchElector: any) {
    return this.http.post(environment.apiUrl+'/polling-station/elector-search', searchElector)
  }

  authorizeVote(cniNumber: any) {
    const data = {
      cniNumber: cniNumber
    }
    return this.http.put(environment.apiUrl+'/polling-station/set-vote-authorization', data)

  }

  getAllElectors(page: any) {
    return this.http.get(environment.apiUrl+'/polling-station/get-all-electors?page='+page)

  }

  getVotedelectors(page:any){
    return this.http.get(environment.apiUrl+'/polling-station/get-voted-electors?page='+page)

  }
  getUnvotedElectors(page:any){
    return this.http.get(environment.apiUrl+'/polling-station/get-unvoted-electors?page='+page)

  }
  getResults(){
    return this.http.get(environment.apiUrl+'/polling-station/get-results')

  }

  getStats() {
    return this.http.get(environment.apiUrl+'/polling-station/get-stats')

  }

  vote(partyId: any, id: any) {
    const data = {
      party_or_coalition_id:  partyId,
      cniNumber: id
    }
    return this.http.post(environment.apiUrl+'/polling-station/vote', data)
  }
}
