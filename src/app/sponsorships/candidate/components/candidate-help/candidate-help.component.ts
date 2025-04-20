import { Component } from '@angular/core';

@Component({
  selector: 'app-candidate-help',
  standalone: true,
  imports: [],
  templateUrl: './candidate-help.component.html',
  styleUrl: './candidate-help.component.css'
})
export class CandidateHelpComponent {
  currentYear = new Date().getFullYear();

}
