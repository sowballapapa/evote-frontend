import { Component } from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-systeme-home',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './admin-systeme-home.component.html',
  styleUrl: './admin-systeme-home.component.css'
})
export class AdminSystemeHomeComponent {

}
