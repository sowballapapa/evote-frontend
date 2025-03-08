import { Component } from '@angular/core';
import {DgeInfosService} from '../../../../../services/dge-infos.service';

@Component({
  selector: 'app-admin-dge-details-index',
  standalone: true,
  imports: [],
  templateUrl: './admin-dge-details-index.component.html',
  styleUrl: './admin-dge-details-index.component.css'
})
export class AdminDgeDetailsIndexComponent {
  constructor(private dge: DgeInfosService) {}
dgeInfos!:any

  ngOnInit() {
    this.dgeInfos = this.dge.view().subscribe((res:any) => {
      // console.log(res);
      this.dgeInfos = res.data;
    })
  }
}
