import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PartyService {

  constructor(private http: HttpClient) { }


  getAllParties(page: number) {
    return this.http.get(environment.apiUrl+environment.adminSegment+'parties-or-coalitions?page='+page)
  }
}
