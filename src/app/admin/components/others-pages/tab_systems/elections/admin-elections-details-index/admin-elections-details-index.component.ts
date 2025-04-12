import { Component } from '@angular/core';
import {RouterLink} from '@angular/router';
import {ElectionsService} from '../../../../../services/elections.service';
import {environment} from '../../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-elections-details-index',
  imports: [
    RouterLink
  ],
    templateUrl: './admin-elections-details-index.component.html',
    styleUrl: './admin-elections-details-index.component.css'
})
export class AdminElectionsDetailsIndexComponent {

  electionsInfos:any
  storageUrl = environment.storageUrl;

  constructor(private electionsService: ElectionsService) {}

  ngOnInit() {
    this.electionsInfos = this.electionsService.getElectionsInfos().subscribe((res:any)=>{
      console.log(res);
      this.electionsInfos = res.data;
    })
  }
}
