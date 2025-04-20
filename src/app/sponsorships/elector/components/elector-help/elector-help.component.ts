import { Component } from '@angular/core';

@Component({
  selector: 'app-elector-help',
  standalone: true,
  imports: [],
  templateUrl: './elector-help.component.html',
  styleUrl: './elector-help.component.css'
})
export class ElectorHelpComponent {
  currentYear = new Date().getFullYear();

}
