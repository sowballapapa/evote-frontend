import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserCandidateService {

  constructor(private http: HttpClient) { }


  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-candidates?page='+page)
  }

  getNoAccountsUser(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/no-candidates-acc?page='+page)
  }
}
