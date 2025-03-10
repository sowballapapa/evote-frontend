import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-roles-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-roles-base.component.html',
  styleUrl: './admin-roles-base.component.css'
})
export class AdminRolesBaseComponent {

}
