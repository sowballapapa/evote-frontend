import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-g-elections-base',
  standalone: true,
  imports: [
    RouterLink,
    RouterOutlet
  ],
  templateUrl: './admin-g-elections-base.component.html',
  styleUrl: './admin-g-elections-base.component.css'
})
export class AdminGElectionsBaseComponent {

}
