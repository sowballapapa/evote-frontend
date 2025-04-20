import { Component } from '@angular/core';

@Component({
  selector: 'app-collectorhelp',
  standalone: true,
  imports: [],
  templateUrl: './collectorhelp.component.html',
  styleUrl: './collectorhelp.component.css'
})
export class CollectorhelpComponent {
  currentYear= new Date().getFullYear();

}
