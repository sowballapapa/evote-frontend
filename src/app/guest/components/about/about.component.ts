import { Component } from '@angular/core';
import { GuestDetailsService } from '../../services/guest-details.service';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [],
  templateUrl: './about.component.html',
  styleUrl: './about.component.css'
})
export class AboutComponent {

  public about!: string
  public name!: string
  constructor(private guestServie: GuestDetailsService){}

  ngOnInit(): void {
    this.guestServie.getDgeSysDetails().subscribe(
      (res:any)=>{
        this.name = res.data.name
        this.about = res.data.about
        console.log(res.data)
      }
    )

  }
}
