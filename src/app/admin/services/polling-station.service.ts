import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PollingStationService {

  constructor(private http: HttpClient) { }

  delete(id: number) {
    return this.http.delete(environment.apiUrl+environment.adminSegment+'polling-stations/'+id)
  }

  create(data:any) {
    return this.http.post(environment.apiUrl+environment.adminSegment+'polling-stations',data)
  }
}
