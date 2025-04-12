import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AuthService} from '../../../services/auth-service.service';
import {Router, RouterLink} from '@angular/router';
import {AccountService} from '../../../../core/services/account.service';
import {environment} from '../../../../../environments/environment.development';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-base-header',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
    templateUrl: './base-header.component.html',
    styleUrl: './base-header.component.css'
})
export class BaseHeaderComponent {
  user!:any
  elector!:any
  storageUrl = environment.storageUrl;
  constructor(private authService: AuthService,private accountService:AccountService ) {
  }

  ngOnInit() {
    this.accountService.getUserDatas().subscribe((res:any)=>{
      this.user = res.data;
    })
    this.accountService.getElectorDatas().subscribe((res:any)=>{
      this.elector = res.data;
    })
  }

  logout() {
    this.authService.logout().subscribe(
      (res: any)=>{
        if (res.status === 1){
          localStorage.removeItem('token');
          localStorage.removeItem('user');
          localStorage.removeItem('admin');
          localStorage.removeItem('elector');
          if (localStorage.getItem('collector')){
            localStorage.removeItem('collector');
          }
          if (localStorage.getItem('candidate')){
            localStorage.removeItem('candidate');
          }
          if (localStorage.getItem('polling_station')){
            localStorage.removeItem('polling_station');
          }
          window.location.reload();
        }
      }
    );
  }
}
