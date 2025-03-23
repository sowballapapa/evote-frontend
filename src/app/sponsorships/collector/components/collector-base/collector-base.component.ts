import { Component } from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {HeaderComponent} from '../partials/header/header.component';
import {FooterComponent} from '../partials/footer/footer.component';

@Component({
  selector: 'app-collector-base',
  standalone: true,
  imports: [
    RouterOutlet,
    HeaderComponent,
    FooterComponent
  ],
  templateUrl: './collector-base.component.html',
  styleUrl: './collector-base.component.css'
})
export class CollectorBaseComponent {

}
