import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';
import {environment} from '../../../../environments/environment.development';

@Component({
    selector: 'app-elections',
    imports: [
        TitleCasePipe,
        DatePipe,
        NgIf
    ],
    templateUrl: './elections.component.html',
    styleUrl: './elections.component.css'
})
export class ElectionsComponent {

      public title!: string
      public description!: string
      public text2!: string
      public startingDate!: Date
  public endingDate!: Date
  public banner!: string
  public storageUrl= environment.storageUrl;

      constructor(private guestServie: GuestDetailsService){}

      ngOnInit(): void {
        this.guestServie.getElectionsDetails().subscribe(
          (res:any)=>{
            this.title = res.data.title
            this.description = res.data.description
            this.startingDate = res.data.startingDate
            this.endingDate = res.data.endingDate
            this.text2 = res.data.alternativeText
            this.banner = res.data.banner_elect
            console.log(res.data)
          }
        )

      }

}
