import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-sponsorships-base',
    imports: [
        RouterOutlet
    ],
    templateUrl: './sponsorships-base.component.html',
    styleUrl: './sponsorships-base.component.css'
})
export class SponsorshipsBaseComponent {
}
