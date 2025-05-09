import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';
import {environment} from '../../../../environments/environment.development';

@Component({
    selector: 'app-sponsorships',
    imports: [
        NgIf,
        DatePipe,
        TitleCasePipe
    ],
    templateUrl: './sponsorships.component.html',
    styleUrl: './sponsorships.component.css'
})
export class SponsorshipsComponent {

      public title!: string
      public description!: string
      public text2!: string
      public startingDate!: Date
      public endingDate!: Date
      public banner!: string
      strorageUrl = environment.storageUrl
      constructor(private guestServie: GuestDetailsService){}

      ngOnInit(): void {
        this.guestServie.getSponsorshipsDetails().subscribe(
          (res:any)=>{
            this.title = res.data.title
            this.description = res.data.description
            this.startingDate = res.data.startingDate
            this.endingDate = res.data.endingDate
            this.text2 = res.data.alternativeText
            this.banner = res.data.banner_spons
            console.log(res.data)
          }
        )

      }

}
