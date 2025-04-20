import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {AccountService} from '../../services/account.service';

@Component({
  selector: 'app-forgot-password',
  standalone: true,
  imports: [
    FormsModule,
    NgIf,
    ReactiveFormsModule,
    RouterLink,
    NgClass,
  ],
  templateUrl: './forgot-password.component.html',
  styleUrl: './forgot-password.component.css'
})
export class ForgotPasswordComponent {
  form = new FormGroup({
    email: new FormControl(null, [Validators.required, Validators.email])
  });
  errors!:any
  error2!:any
  msg!:any
  isLoading = false;

  constructor(private accountService: AccountService) { }

  onSubmit() {
    this.isLoading = true;
    this.msg=''
    this.error2 = ''
    this.errors = ''
    this.accountService.forgotPassword(this.form.value).subscribe({
      next:(res:any) => {
        this.isLoading =false
        console.log(res);
        if (res.status === 1) {
          this.msg = "Un lien de réinitilisation a été envoyé sur votre mail."
        }
        if(res.status === 0){
          this.error2 = "Le lien de réinitialisation ne peut pas être envoyé.";
        }
      },
      error: (err:any) => {
        this.isLoading =false
        console.log(err)
        if(err.status === 422){
          this.errors = "Le mail n'est pas valide."
        }
      }
    })
  }
}
