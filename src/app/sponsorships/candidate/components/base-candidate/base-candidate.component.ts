import { Component } from '@angular/core';
import {CandidateFooterComponent} from '../partials/candidate-footer/candidate-footer.component';
import {CandidateHeaderComponent} from '../partials/candidate-header/candidate-header.component';
import {RouterOutlet} from '@angular/router';

@Component({
    selector: 'app-base-candidate',
  imports: [
    CandidateFooterComponent,
    CandidateHeaderComponent,
    RouterOutlet
  ],
    templateUrl: './base-candidate.component.html',
    styleUrl: './base-candidate.component.css'
})
export class BaseCandidateComponent {

}
