import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import {  NgForOf } from '@angular/common';
import {environment} from '../../../../environments/environment.development';

@Component({
    selector: 'app-home',
    imports: [
        NgForOf
    ],
    templateUrl: './home.component.html',
    styleUrl: './home.component.css'
})
export class HomeComponent {

    public parties!: any
  public dgInfos:any
  storageUrl = environment.storageUrl;

    constructor(private guestServie: GuestDetailsService){}

    ngOnInit(): void {
      this.guestServie.getCandidatures().subscribe(
        (res:any)=>{
          this.parties = res.data
        }
      )
      this.guestServie.getDgeSysDetails().subscribe(
        (res:any)=>{
          this.dgInfos = res.data
        }
      )
    }
}
