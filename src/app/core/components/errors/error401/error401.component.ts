import { Component } from '@angular/core';

@Component({
  selector: 'app-error401',
  standalone: true,
  imports: [],
  templateUrl: './error401.component.html',
  styleUrl: './error401.component.css'
})
export class Error401Component {

  ngOnInit() {
    localStorage.clear()
  }
}
