import { Component } from '@angular/core';
import {LoginHeaderComponent} from '../login-header/login-header.component';
import {MenuComponent} from '../menu/menu.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from '../../../services/auth-service.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-base-header',
    imports: [
        FormsModule,
        ReactiveFormsModule
    ],
    templateUrl: './base-header.component.html',
    styleUrl: './base-header.component.css'
})
export class BaseHeaderComponent {

  constructor(private authService: AuthService, private router: Router) {
  }
  logout() {
    this.authService.logout().subscribe(
      (res: any)=>{
        if (res.status === 1){
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('admin');
          localStorage.removeItem('elector');
          window.location.reload();
        }
      }
    );
  }
}
