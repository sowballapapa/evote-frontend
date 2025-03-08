import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UserService
  ]
})
export class CoreModule { }
