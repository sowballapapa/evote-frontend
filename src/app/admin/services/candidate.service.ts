import { Injectable } from '@angular/core';
import {environment} from '../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CandidateService {

  constructor(private http: HttpClient) { }

  getAll(){
    return this.http.get(environment.apiUrl +environment.adminSegment+'get-all-candidates')
  }

  getAllCandidates(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'candidates?page='+page)
  }

  getCandidate(id:number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'candidates/'+id)
  }

  createCandidate(candidate:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'candidates',candidate)
  }

  editCandidate(id:number, candidate:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'candidates/'+id,candidate)
  }
  deleteCandidate(id:number) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'candidates/'+id)
  }
}
