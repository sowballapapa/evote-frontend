import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {NavbarComponent} from '../navbar/navbar.component';

@Component({
    selector: 'app-candidate-header',
  imports: [
    NavbarComponent,
    NgIf
  ],
    templateUrl: './candidate-header.component.html',
    styleUrl: './candidate-header.component.css'
})
export class CandidateHeaderComponent {
  isLoggin = localStorage.getItem('candidate');

}
