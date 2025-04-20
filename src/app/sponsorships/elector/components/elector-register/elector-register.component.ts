import { Component } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from '@angular/forms';
import {NgClass, NgIf} from '@angular/common';
import {Router, RouterLink} from '@angular/router';
import {AuthElectorService} from '../../services/auth-elector.service';
import {ModalService} from '../../../../core/services/modal.service';

@Component({
    selector: 'app-elector-register',
  imports: [
    FormsModule,
    NgIf,
    RouterLink,
    ReactiveFormsModule,
    NgClass,
  ],
    templateUrl: './elector-register.component.html',
    styleUrl: './elector-register.component.css'
})
export class ElectorRegisterComponent {
  constructor(private auth: AuthElectorService, private router: Router, private modalService:ModalService) {}
  errors!: any
  errorUserExist!:any
  register = false
  passwordType: string = 'password';
  eyeType:boolean = false;
  c_passwordType: string = 'password';
  c_eyeType:boolean = false;
  elector!:any

  searchForm = new FormGroup({
    cniNumber: new FormControl('', [Validators.required]),
  })


  registerForm = new FormGroup({
    cniNumber: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    username: new FormControl('', [ Validators.minLength(5)]),
    phone: new FormControl('', [Validators.pattern(/^[0-9]{8,15}$/)]), // ex: 8 à 15 chiffres
    image: new FormControl(''),
    password: new FormControl('', [Validators.required, Validators.minLength(6)]),
    password_confirmation: new FormControl('', [Validators.required]),
  }, { validators: this.passwordsMatchValidator });

  passwordsMatchValidator(form: AbstractControl): { [key: string]: boolean } | null {
    const password = form.get('password')?.value;
    const confirmPassword = form.get('password_confirmation')?.value;
    if (password !== confirmPassword) {
      return { passwordsMismatch: true };
    }
    return null;
  }


  onSearchElector(){

    this.errors=''
    this.errorUserExist=''
    this.register = false
    this.auth.registerSearchElector(this.searchForm.value).subscribe({
      next: (res: any) => {
        if(res.status == 0){
          this.errorUserExist = "Vous avez déjà un compte utilisateur."
        }
        if(res.status == 1){
          this.register = true
          this.elector = res.data;
          this.registerForm.patchValue({
            cniNumber: this.elector.cniNumber
          })
        }
      },
      error: (error: any) => {
        console.log(error)
        this.errors = "Le numéro n'existe pas."
      }
    })
  }

  onRegister(){
    let formData = new FormData
    let formValue:any = this.registerForm.value;
    for ( const key of Object.keys(formValue) ) {
      const value = formValue[key];
      formData.append(key, value);
    }
  this.auth.register(formData).subscribe({
    next: (res:any) => {
      console.log(res)
      this.modalService.show("success", "Bienvenu sur E-vote! Votre Compte a été créé avec succés. ", true, 10000)
      localStorage.setItem('token', res.data.token)
      localStorage.setItem('elector', res.data.elector.id)
      localStorage.setItem('user', res.data.user.id)
      this.router.navigateByUrl('../')
    }
  })
  }



  ngOnInit() {

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
