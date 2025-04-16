import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {RouterLink} from "@angular/router";
import {CollectorAuthService} from '../../../services/collector-auth.service';
import {NgIf} from "@angular/common";
import {environment} from '../../../../../../environments/environment.development';
import {AuthCandidateService} from '../../../../candidate/services/auth-candidate.service';
import {AccountService} from '../../../../../core/services/account.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
    imports: [
        FormsModule,
        RouterLink,
        NgIf
    ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  user!:any
  elector!:any
  storageUrl = environment.storageUrl;
  constructor(private auth: CollectorAuthService,private accountService:AccountService ) {
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
