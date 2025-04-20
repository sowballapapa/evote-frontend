import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {NgIf} from '@angular/common';
import {PollHeaderComponent} from '../partials/poll-header/poll-header.component';
import {PollFooterComponent} from '../partials/poll-footer/poll-footer.component';

@Component({
    selector: 'app-elections-base',
  imports: [
    RouterOutlet,
    NgIf,
    PollHeaderComponent,
    PollFooterComponent
  ],
    templateUrl: './elections-base.component.html',
    styleUrl: './elections-base.component.css'
})
export class ElectionsBaseComponent {
  isLoggedIn = localStorage.getItem('polling_station');

}
