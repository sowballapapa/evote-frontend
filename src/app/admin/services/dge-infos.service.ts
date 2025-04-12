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

  edit(id:any, data: any){
    return this.http.post(`${environment.apiUrl}/admin/dge-details/${id}`, data)
  }
}
