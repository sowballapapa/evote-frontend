import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FilterLocationsService {

  constructor(private http: HttpClient) { }

  getLocations(){
    return this.http.get(`${environment.apiUrl}/admin/all-locations`)
  }
}
