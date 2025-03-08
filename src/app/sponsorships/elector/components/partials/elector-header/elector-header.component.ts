import { Component } from '@angular/core';
import {NavbarComponent} from '../navbar/navbar.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-elector-header',
  standalone: true,
  imports: [
    NavbarComponent,
    NgIf
  ],
  templateUrl: './elector-header.component.html',
  styleUrl: './elector-header.component.css'
})
export class ElectorHeaderComponent {
  isLoggin = localStorage.getItem('user');

}
