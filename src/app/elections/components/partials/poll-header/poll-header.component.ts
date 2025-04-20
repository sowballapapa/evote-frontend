import { Component } from '@angular/core';
import {NgIf} from "@angular/common";
import {PollNavbarComponent} from '../poll-navbar/poll-navbar.component';

@Component({
  selector: 'app-poll-header',
  standalone: true,
  imports: [
    NgIf,
    PollNavbarComponent
  ],
  templateUrl: './poll-header.component.html',
  styleUrl: './poll-header.component.css'
})
export class PollHeaderComponent {
  isLoggin = localStorage.getItem('polling_station');

}
