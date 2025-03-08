import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavBarComponent } from '../partials/nav-bar/nav-bar.component';
import { FooterComponent } from '../partials/footer/footer.component';

@Component({
  selector: 'app-guest-base',
  standalone: true,
  imports: [RouterOutlet, NavBarComponent, FooterComponent],
  templateUrl: './guest-base.component.html',
  styleUrl: './guest-base.component.css'
})
export class GuestBaseComponent {

}
