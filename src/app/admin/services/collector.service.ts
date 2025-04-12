import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CollectorService {
  constructor(private http: HttpClient) { }


  searchElector(elector:object){
    return this.http.post(`${environment.apiUrl}/collector/search-elector`, elector )
  }


  getAll(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'collectors?page='+page)
  }

  getOne(id: any) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'collectors/'+id);
  }

  create(data:any) {
    return this.http.post(environment.apiUrl + environment.adminSegment + 'collectors', data)
  }

  edit(id: any, data: any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'collectors/'+id, data)
  }
}
