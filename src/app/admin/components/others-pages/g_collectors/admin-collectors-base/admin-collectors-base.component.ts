import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-collectors-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-collectors-base.component.html',
  styleUrl: './admin-collectors-base.component.css'
})
export class AdminCollectorsBaseComponent {

}
