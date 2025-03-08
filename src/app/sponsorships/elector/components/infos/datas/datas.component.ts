import { Component } from '@angular/core';
import {UserService} from '../../../../../core/services/user.service';

@Component({
  selector: 'app-datas',
  standalone: true,
  imports: [],
  templateUrl: './datas.component.html',
  styleUrl: './datas.component.css'
})
export class DatasComponent {
  user!:any

  constructor(private userService:UserService) {}

  ngOnInit() {
    this.userService.getUser().subscribe((res:any)=>{
      this.user = res;
    })
  }
}
