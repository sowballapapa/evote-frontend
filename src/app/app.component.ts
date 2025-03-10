import { Component } from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import { GuestBaseComponent } from './guest/components/guest-base/guest-base.component';

@Component({
    selector: 'app-root',
    imports: [RouterOutlet],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evote-front-end';

  constructor(private route: ActivatedRoute) {}

}
