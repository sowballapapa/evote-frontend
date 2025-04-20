import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {NgClass, NgIf} from "@angular/common";
import {ActivatedRoute, RouterLink} from "@angular/router";
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-reset-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass
  ],
  templateUrl: './reset-password.component.html',
  styleUrl: './reset-password.component.css'
})
export class ResetPasswordComponent {
  form = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    token: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)]),
    password_confirmation: new FormControl('', [Validators.required, Validators.minLength(8)]),

  });
  errors!:any
  error2!:any
  msg!:any
  passwordType: string = 'password';
  eyeType:boolean = false;
  c_passwordType: string = 'password';
  c_eyeType:boolean = false;


  constructor(private accountService: AccountService, private route:ActivatedRoute) { }

  ngOnInit() {
    this.form.patchValue({
      token: this.route.snapshot.queryParamMap.get('token'),
        email: this.route.snapshot.queryParamMap.get('email')
    })
  }

  onSubmit() {
    this.accountService.resetPasswordToken(this.form.value).subscribe({
      next:(res:any) => {
        console.log(res);
        if (res.status === 1) {
          this.msg = "Mot de passe réinitialisé avec succés."
        }
      },
      error: (err:any) => {
        console.log(err)
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

  c_passwordView() {
    if (this.c_passwordType == 'password') {
      this.c_passwordType = 'text';
      this.c_eyeType = true
    } else if (this.c_passwordType == 'text') {
      this.c_passwordType = 'password';
      this.c_eyeType = false
    }
  }
}
