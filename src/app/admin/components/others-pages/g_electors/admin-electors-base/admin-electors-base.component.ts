import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-electors-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-electors-base.component.html',
  styleUrl: './admin-electors-base.component.css'
})
export class AdminElectorsBaseComponent {

}
