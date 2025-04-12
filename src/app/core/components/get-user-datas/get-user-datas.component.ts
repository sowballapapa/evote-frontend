import { Component } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';
import {environment} from '../../../../environments/environment.development';

@Component({
  selector: 'app-get-user-datas',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgIf
  ],
  templateUrl: './get-user-datas.component.html',
  styleUrl: './get-user-datas.component.css'
})
export class GetUserDatasComponent {
  user!:any

  constructor(private accountService: AccountService) { }

  ngOnInit() {
    this.accountService.getUserDatas().subscribe((res:any) => {
      console.log(res);
      this.user = res.data;
    })
  }

  protected readonly environment = environment;
}
