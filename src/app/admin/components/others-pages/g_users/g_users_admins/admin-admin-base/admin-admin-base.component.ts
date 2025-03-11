import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-admin-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-admin-base.component.html',
  styleUrl: './admin-admin-base.component.css'
})
export class AdminAdminBaseComponent {

}
