import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import { NgFor, NgForOf } from '@angular/common';
import { Party } from '../../interfaces/party';

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

    constructor(private guestServie: GuestDetailsService){}

    ngOnInit(): void {
      this.guestServie.getCandidatures().subscribe(
        (res:any)=>{
          this.parties = res.data
          console.log(res)
        }
      )

    }
}
