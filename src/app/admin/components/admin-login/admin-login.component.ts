import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormGroup, FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service.service';
import {NgClass, NgIf} from '@angular/common';

@Component({
    selector: 'app-admin-login',
  imports: [
    RouterLink,
    FormsModule,
    NgIf,
    NgClass
  ],
    templateUrl: './admin-login.component.html',
    styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  errors!: any[]
  loginName!: string
  password!: string
  passwordType: string = 'password';
  eyeType:boolean = false;


  constructor(private loginservice: AuthService, private  router:Router) {}

  ngOnInit(){
    this.passwordType = 'password';
    this.eyeType = false;

  }

  onSubmit(){
    var loginData= {
      loginName: this.loginName,
      password: this.password
    }

    this.loginservice.login(loginData).subscribe(
      (res:any)=>{
        if(res.status === 0){
          console.log(res, 'response')
          this.errors = res.message
        }else{
            console.log(res)
            localStorage.setItem("user", res.data.user.id)
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
}
