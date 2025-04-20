import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {environment} from '../../../../../environments/environment.development';
import {AuthCandidateService} from '../../../../sponsorships/candidate/services/auth-candidate.service';
import {AccountService} from '../../../../core/services/account.service';

@Component({
  selector: 'app-poll-navbar',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink
  ],
  templateUrl: './poll-navbar.component.html',
  styleUrl: './poll-navbar.component.css'
})
export class PollNavbarComponent {
  user!:any
  storageUrl = environment.storageUrl;
  constructor(private auth: AuthCandidateService,private accountService:AccountService ) {
  }

  ngOnInit() {
    this.accountService.getUserDatas().subscribe((res:any)=>{
      this.user = res.data;
    })
  }

  logout() {
    this.auth.logout().subscribe(
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
