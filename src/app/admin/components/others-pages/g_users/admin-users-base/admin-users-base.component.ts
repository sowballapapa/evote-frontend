import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-users-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-users-base.component.html',
  styleUrl: './admin-users-base.component.css'
})
export class AdminUsersBaseComponent {

}
