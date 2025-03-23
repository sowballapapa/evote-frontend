import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {Router, RouterLink} from "@angular/router";
import {CollectorAuthService} from '../../services/collector-auth.service';

@Component({
  selector: 'app-collector-login',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    NgClass
  ],
  templateUrl: './collector-login.component.html',
  styleUrl: './collector-login.component.css'
})
export class CollectorLoginComponent {
  constructor(private auth: CollectorAuthService, private router: Router) {}


  errors!: any[]
  loginName!: string
  password!: string
  passwordType: string = 'password';
  eyeType:boolean = false;


  onSubmit() {
    var loginData = {
      login: this.loginName,
      password: this.password
    }

    this.auth.login(loginData).subscribe(
      (res: any) => {
        if (res.status === 0) {
          console.log(res.message)
          this.errors = res.message
        } else {
          console.log(res)
          localStorage.setItem("user", res.data.user.id)
          localStorage.setItem("collector", res.data.collector.id)
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
