import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {AuthElectorService} from '../../../services/auth-elector.service';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-navbar',
    imports: [
        FormsModule,
        RouterLink
    ],
    templateUrl: './navbar.component.html',
    styleUrl: './navbar.component.css'
})
export class NavbarComponent {

  constructor(private auth: AuthElectorService) {
  }
  logout() {
    this.auth.logout();
    localStorage.removeItem('token')
    localStorage.removeItem('user');
    localStorage.removeItem('elector')
    if (localStorage.getItem('admin')) {
      localStorage.removeItem('admin')
    }
    if (localStorage.getItem('candidate')) {
      localStorage.removeItem('candidate')
    }
    window.location.reload();
  }
}
