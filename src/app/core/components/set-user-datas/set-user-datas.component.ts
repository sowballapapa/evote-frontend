import { Component } from '@angular/core';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators} from "@angular/forms";
import {AccountService} from '../../services/account.service';
import {environment} from '../../../../environments/environment.development';
import {NgClass, NgIf} from '@angular/common';

@Component({
  selector: 'app-set-user-datas',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf,
    NgClass
  ],
  templateUrl: './set-user-datas.component.html',
  styleUrl: './set-user-datas.component.css'
})
export class SetUserDatasComponent {
  old_image!:any
  image!:any

  form = new FormGroup({
    username: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl('', [Validators.required]),
    image: new FormControl(''),
  })

  onImageChange(event:any) {
    this.image = event.target.files[0];
  }

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getUserDatas().subscribe((res:any) => {
      console.log(res);
      this.old_image = res.data.image;
      this.form.patchValue({
        email:res.data.email,
        phone:res.data.phone,
        username:res.data.username,
      })
    })
  }

  updateDatas() {

  }

  protected readonly environment = environment;
}
