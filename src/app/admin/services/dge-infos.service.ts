import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class DgeInfosService {

  constructor(private http: HttpClient) { }

  view(){
    return this.http.get(`${environment.apiUrl}/admin/dge-details`)
  }
  //
  // edit(id, data: object){
  //   return this.http.put(`${environment.apiUrl}/admin/dge-details/${id}`, data)
  // }
}
