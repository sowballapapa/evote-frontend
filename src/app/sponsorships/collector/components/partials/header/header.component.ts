import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
  selector: 'app-header',
  standalone: true,
    imports: [
        NavbarComponent,
        NgIf
    ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  isLoggin = localStorage.getItem('collector');

}
