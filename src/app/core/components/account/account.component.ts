import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import {GetUserDatasComponent} from '../get-user-datas/get-user-datas.component';
import {SetUserDatasComponent} from '../set-user-datas/set-user-datas.component';
import {SetPasswordComponent} from '../set-password/set-password.component';

@Component({
  selector: 'app-account',
  standalone: true,
  imports: [
    NgIf,
    GetUserDatasComponent,
    SetUserDatasComponent,
    SetPasswordComponent
  ],
  templateUrl: './account.component.html',
  styleUrl: './account.component.css'
})
export class AccountComponent {
  editDatas = false
  editPass = false
  viewDatas = true

  viewData(){
    this.viewDatas = true;
    this.editPass = false;
    this.editDatas = false;
  }

  editData() {
    this.editDatas = true;
    this.viewDatas = false;
    this.editPass = false;
  }

  editPassword() {
    this.editPass = true;
    this.viewDatas = false;
    this.editDatas =false;

  }
}
