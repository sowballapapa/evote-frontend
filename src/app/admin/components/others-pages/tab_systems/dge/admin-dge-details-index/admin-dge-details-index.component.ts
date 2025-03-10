import { Component } from '@angular/core';
import {DgeInfosService} from '../../../../../services/dge-infos.service';
import {RouterLink} from '@angular/router';

@Component({
    selector: 'app-admin-dge-details-index',
  imports: [
    RouterLink
  ],
    templateUrl: './admin-dge-details-index.component.html',
    styleUrl: './admin-dge-details-index.component.css'
})
export class AdminDgeDetailsIndexComponent {
  constructor(private dge: DgeInfosService) {}
dgeInfos!:any

  ngOnInit() {
    this.dgeInfos = this.dge.view().subscribe((res:any) => {
      this.dgeInfos = res.data;
      console.log(this.dgeInfos);
    })
  }
}
