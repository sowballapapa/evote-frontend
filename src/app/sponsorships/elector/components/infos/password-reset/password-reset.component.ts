import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-password-reset',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './password-reset.component.html',
  styleUrl: './password-reset.component.css'
})
export class PasswordResetComponent {
  currentPassword: any;
  newPassword: any;
  c_newPassword: any;

  changePassword() {
    
  }
}
