import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-g-sponsorships-base',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './admin-g-sponsorships-base.component.html',
  styleUrl: './admin-g-sponsorships-base.component.css'
})
export class AdminGSponsorshipsBaseComponent {

}
