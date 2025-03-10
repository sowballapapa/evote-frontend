import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import { DatePipe, NgIf, TitleCasePipe } from '@angular/common';

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

      constructor(private guestServie: GuestDetailsService){}

      ngOnInit(): void {
        this.guestServie.getElectionsDetails().subscribe(
          (res:any)=>{
            this.title = res.data.title
            this.description = res.data.description
            this.startingDate = res.data.startingDate
            this.endingDate = res.data.endingDate
            this.text2 = res.data.alternativeText
            console.log(res.data)
          }
        )

      }

}
