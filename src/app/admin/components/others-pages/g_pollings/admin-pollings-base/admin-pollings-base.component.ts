import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-pollings-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-pollings-base.component.html',
  styleUrl: './admin-pollings-base.component.css'
})
export class AdminPollingsBaseComponent {

}
