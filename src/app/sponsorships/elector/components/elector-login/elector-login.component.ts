import { Component } from '@angular/core';
import {AuthElectorService} from '../../services/auth-elector.service';
import {Router, RouterLink} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-elector-login',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    NgIf,
    RouterLink
  ],
  templateUrl: './elector-login.component.html',
  styleUrl: './elector-login.component.css'
})
export class ElectorLoginComponent {

  constructor(private auth: AuthElectorService, private router: Router) {}

  errors!: any[]
  loginName!: string
  password!: string

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
          localStorage.setItem("token", res.data.token)
          window.location.reload();

        }
      })

  }


}
