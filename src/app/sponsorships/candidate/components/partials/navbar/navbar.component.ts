import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {RouterLink} from '@angular/router';
import {AuthCandidateService} from '../../../services/auth-candidate.service';

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

  constructor(private auth: AuthCandidateService) {
  }
  logout() {
    this.auth.logout();
    localStorage.removeItem('token')
    localStorage.removeItem('user')
    localStorage.removeItem('candidate')
    localStorage.removeItem('elector')
    window.location.reload();
  }
}
