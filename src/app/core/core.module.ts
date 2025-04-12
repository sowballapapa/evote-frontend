import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {UserService} from './services/user.service';
import {PaginateTableComponent} from './components/paginate-table/paginate-table.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ToastrModule} from 'ngx-toastr';
import {HTTP_INTERCEPTORS} from '@angular/common/http';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({
      positionClass: 'toast-center-center',
      toastClass: 'ngx-toastr custom-toast',
      preventDuplicates: true,
      timeOut: 7000,
      progressBar: true,
      closeButton: true,
      enableHtml: true,
    })
  ],
  exports: [
    UserService,
    PaginateTableComponent,
  ],/*
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpErrorInterceptor,
      multi: true
    }
  ]*/
})
export class CoreModule { }
