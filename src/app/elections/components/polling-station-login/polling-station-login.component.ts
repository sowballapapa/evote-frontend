import { Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthPollingStationService} from '../../services/auth-polling-station.service';

@Component({
    selector: 'app-polling-station-login',
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
    templateUrl: './polling-station-login.component.html',
    styleUrl: './polling-station-login.component.css'
})
export class PollingStationLoginComponent {

  constructor(private auth: AuthPollingStationService, private router: Router) {}

  errors!: any[]
  loginName!: string
  password!: string
  passwordType: string = 'password';
  eyeType:boolean = false;


  onSubmit(){
    var loginData= {
      login: this.loginName,
      password: this.password
    }

    this.auth.login(loginData).subscribe(
      (res:any)=>{
        if(res.status === 0){
          console.log(res.message)
          this.errors = res.message
        }else{
          console.log(res)
          localStorage.setItem("user", res.data.user.id)
          localStorage.setItem("polling_station", res.data.pollingStation.id)
          localStorage.setItem("token", res.data.token)
          window.location.reload();

        }
      })

  }


  passwordView() {
    if(this.passwordType == 'password'){
      this.passwordType = 'text';
      this.eyeType = true
    }else if(this.passwordType == 'text'){
      this.passwordType = 'password';
      this.eyeType = false
    }
  }

  ngOnInit() {
    this.eyeType = false;
    this.passwordType = 'password';
  }

}
