import { Component } from '@angular/core';
import {MenuComponent} from '../partials/menu/menu.component';
import {RouterLink, RouterOutlet} from '@angular/router';
import {FooterComponent} from '../partials/footer/footer.component';
import {LoginHeaderComponent} from '../partials/login-header/login-header.component';
import {AuthService} from '../../services/auth-service.service';
import { BaseHeaderComponent } from '../partials/base-header/base-header.component';

@Component({
    selector: 'app-admin-base',
    imports: [
        MenuComponent,
        RouterOutlet,
        FooterComponent,
        LoginHeaderComponent,
        BaseHeaderComponent,
        RouterLink
    ],
    templateUrl: './admin-base.component.html',
    styleUrl: './admin-base.component.css'
})
export class AdminBaseComponent {
  year = new Date().getFullYear();

  isLogin = localStorage.getItem("admin")
  constructor() {}
    ngOnInit(){

    }

}
