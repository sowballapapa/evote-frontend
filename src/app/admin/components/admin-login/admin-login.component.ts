import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';
import {FormGroup, FormsModule} from '@angular/forms';
import {AuthService} from '../../services/auth-service.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-login',
  standalone: true,
  imports: [
    RouterLink,
    FormsModule,
    NgIf
  ],
  templateUrl: './admin-login.component.html',
  styleUrl: './admin-login.component.css'
})
export class AdminLoginComponent {

  errors!: any[]
  loginName!: string
  password!: string


  constructor(private loginservice: AuthService, private  router:Router) {}

  ngOnInit(){

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

}
