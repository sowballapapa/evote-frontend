import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';

@Component({
  selector: 'app-admin-parties-base',
  standalone: true,
  imports: [
    RouterOutlet
  ],
  templateUrl: './admin-parties-base.component.html',
  styleUrl: './admin-parties-base.component.css'
})
export class AdminPartiesBaseComponent {

}
