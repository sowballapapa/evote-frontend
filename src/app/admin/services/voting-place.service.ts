import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class VotingPlaceService {

  constructor(private http:HttpClient) { }

  getAll(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'voting-places?page='+page)

  }

  getOne(id: any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'voting-places/'+id);
  }

  delete(id: any) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'voting-places/'+id);
  }

  edit(id: number, data:any) {
    return this.http.put(environment.apiUrl+environment.adminSegment+'voting-places/'+id,data);
  }

  create(data:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'voting-places',data)
  }
}
