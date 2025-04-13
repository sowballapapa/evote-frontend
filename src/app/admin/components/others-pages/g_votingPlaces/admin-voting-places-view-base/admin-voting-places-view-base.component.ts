import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-voting-places-view-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-voting-places-view-base.component.html',
  styleUrl: './admin-voting-places-view-base.component.css'
})
export class AdminVotingPlacesViewBaseComponent {

}
