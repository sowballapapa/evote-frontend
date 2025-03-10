import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';
import {FontAwesomeModule} from '@fortawesome/angular-fontawesome';
// import { faSolid, faPhone,  } from '@fortawesome/free-solid-svg-icons';


@Component({
    selector: 'app-contacts',
    imports: [FontAwesomeModule],
    templateUrl: './contacts.component.html',
    styleUrl: './contacts.component.css'
})
export class ContactsComponent {

    public phone1!: number
    public phone2!: number
    public email!: string
    public address!: string
    // faSolid = faSolid;
  // faPhone = faPhone

    constructor(private guestServie: GuestDetailsService){}


    ngOnInit(): void {
      this.guestServie.getDgeSysDetails().subscribe(
        (res:any)=>{
          this.phone1 = res.data.phone1
          this.phone2 = res.data.phone2
          this.email = res.data.email
          this.address = res.data.address
          console.log(res.data)
        }
      )

    }
}
