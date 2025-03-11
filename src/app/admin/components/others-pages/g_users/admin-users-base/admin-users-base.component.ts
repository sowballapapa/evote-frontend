import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-users-base',
  standalone: true,
    imports: [
        RouterOutlet,
        RouterLink
    ],
  templateUrl: './admin-users-base.component.html',
  styleUrl: './admin-users-base.component.css'
})
export class AdminUsersBaseComponent {

}
