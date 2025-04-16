import { Injectable } from '@angular/core';
import {environment} from '../../../../environments/environment.development';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserCollectorService {

  constructor(private http:HttpClient) { }

  getAll(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-collectors?page='+page)

  }

  getNoAccountsUser(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/no-collectors-acc?page='+page)

  }
}
