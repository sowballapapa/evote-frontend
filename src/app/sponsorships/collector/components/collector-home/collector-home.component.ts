import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-collector-home',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './collector-home.component.html',
  styleUrl: './collector-home.component.css'
})
export class CollectorHomeComponent {
  cniNumber!: number

  onSearch() {
    var cniNumber = this.cniNumber;
  }
}
