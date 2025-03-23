import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CollectorAuthService} from '../../../services/collector-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  constructor(private auth:CollectorAuthService) {
  }

  logout() {
    this.auth.logout();
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('collector')
    localStorage.removeItem('elector')
    window.location.reload();
  }

}
