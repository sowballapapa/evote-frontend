import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  constructor(private http: HttpClient) { }


  getAllCandidates() {
    return this.http.get(environment.apiUrl+environment.adminSegment+'collectors/get-all-candidates')
  }

  getAll(page: number, candidate:object) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'collectors/get-all-collectors?page='+page, candidate)
  }

}
