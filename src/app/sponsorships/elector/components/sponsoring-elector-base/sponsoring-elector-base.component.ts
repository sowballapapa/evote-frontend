import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {AuthElectorService} from '../../services/auth-elector.service';
import {ElectorFooterComponent} from '../partials/elector-footer/elector-footer.component';
import {ElectorHeaderComponent} from '../partials/elector-header/elector-header.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-sponsoring-elector-base',
  standalone: true,
  imports: [
    RouterOutlet,
    ElectorFooterComponent,
    ElectorHeaderComponent,
    NgIf
  ],
  templateUrl: './sponsoring-elector-base.component.html',
  styleUrl: './sponsoring-elector-base.component.css'
})
export class SponsoringElectorBaseComponent {
  isLoggedIn = localStorage.getItem('user');
  constructor(private auth: AuthElectorService) {}


}
