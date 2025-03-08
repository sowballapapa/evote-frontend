import { Component } from '@angular/core';
import {ElectorService} from '../../services/elector.service';
import {RouterLink, RouterOutlet} from '@angular/router';
import {DatasComponent} from '../infos/datas/datas.component';
import {DatasUpdateComponent} from '../infos/datas-update/datas-update.component';
import {PasswordResetComponent} from '../infos/password-reset/password-reset.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-elector-infos',
  standalone: true,
  imports: [
    RouterOutlet,
    RouterLink,
    DatasComponent,
    DatasUpdateComponent,
    PasswordResetComponent,
    NgIf
  ],
  templateUrl: './elector-infos.component.html',
  styleUrl: './elector-infos.component.css'
})
export class ElectorInfosComponent {
  elector!:any
  editDatas = false
  editPass = false
  viewDatas = true
  constructor(private electorService: ElectorService) {
  }

  ngOnInit() {
    this.electorService.getElector().subscribe((response:any) => {
      // console.log(response)
      this.viewData()
      this.elector = response.data;

    })

  }

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
