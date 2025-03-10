import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-elections-details-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-elections-details-base.component.html',
  styleUrl: './admin-elections-details-base.component.css'
})
export class AdminElectionsDetailsBaseComponent {

}
