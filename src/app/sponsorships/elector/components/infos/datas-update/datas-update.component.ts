import { Component } from '@angular/core';
import {FormsModule} from "@angular/forms";

@Component({
    selector: 'app-datas-update',
    imports: [
        FormsModule
    ],
    templateUrl: './datas-update.component.html',
    styleUrl: './datas-update.component.css'
})
export class DatasUpdateComponent {
  email: any;
  phone: any;
  username: any;

  updateDatas() {

  }
}
