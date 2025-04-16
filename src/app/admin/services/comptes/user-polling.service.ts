import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UserPollingService {

  constructor(private http: HttpClient) { }


  getAll(page:number){
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-polling-stations?page='+page)
  }

  getNoAccountsUser() {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/no-polling-acc');
  }

  getOne(id: any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'users/acc-polling-stations/'+id);

  }
}
