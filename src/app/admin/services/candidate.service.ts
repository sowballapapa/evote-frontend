import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }


  getAllCandidates(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'candidates?page='+page)
  }
}
