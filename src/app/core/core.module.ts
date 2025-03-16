import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {PaginateTableComponent} from './components/paginate-table/paginate-table.component';



@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ],
  exports: [
    UserService,
    PaginateTableComponent
  ]
})
export class CoreModule { }
