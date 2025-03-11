import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthCandidateService} from '../../services/auth-candidate.service';

@Component({
    selector: 'app-login-candidate',
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    NgClass
  ],
    templateUrl: './login-candidate.component.html',
    styleUrl: './login-candidate.component.css'
})
export class LoginCandidateComponent {
  constructor(private auth: AuthCandidateService, private router: Router) {}

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
          localStorage.setItem("candidate", res.data.candidate.id)
          localStorage.setItem("elector", res.data.elector.id)
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
