import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-voting-places-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-voting-places-base.component.html',
  styleUrl: './admin-voting-places-base.component.css'
})
export class AdminVotingPlacesBaseComponent {

}
