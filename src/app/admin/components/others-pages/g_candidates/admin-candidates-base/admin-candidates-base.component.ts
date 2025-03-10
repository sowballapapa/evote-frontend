import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-candidates-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-candidates-base.component.html',
  styleUrl: './admin-candidates-base.component.css'
})
export class AdminCandidatesBaseComponent {

}
