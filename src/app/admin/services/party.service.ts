import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get(environment.apiUrl + environment.adminSegment+'get-all-parties')
  }

  getAllParties(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'parties-or-coalitions?page='+page)
  }

  getParty(id:any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'parties-or-coalitions/'+id);
  }

  create(party:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'parties-or-coalitions', party)
  }

  edit(id:any, party:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'parties-or-coalitions/'+id,party)
  }

  destroy(id:any) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'parties-or-coalitions/'+id);
  }

}
