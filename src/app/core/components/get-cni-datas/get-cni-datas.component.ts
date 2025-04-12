import { Component } from '@angular/core';
import {AccountService} from '../../services/account.service';
import {NgIf} from '@angular/common';
import {environment} from '../../../../environments/environment.development';

@Component({
  selector: 'app-get-cni-datas',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './get-cni-datas.component.html',
  styleUrl: './get-cni-datas.component.css'
})
export class GetCniDatasComponent {
   elector!:any
  storageurl = environment.storageUrl;

  constructor(private accountService:AccountService) {  }

  ngOnInit() {
     this.accountService.getElectorDatas().subscribe((res:any) => {
       this.elector = res.data;
     })
  }
}
