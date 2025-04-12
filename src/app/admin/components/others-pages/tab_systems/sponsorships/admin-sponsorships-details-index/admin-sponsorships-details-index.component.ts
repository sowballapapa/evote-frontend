import { Component } from '@angular/core';
import {RouterLink} from "@angular/router";
import {SponsorshipsService} from '../../../../../services/sponsorships.service';
import {environment} from '../../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-sponsorships-details-index',
    imports: [
        RouterLink
    ],
    templateUrl: './admin-sponsorships-details-index.component.html',
    styleUrl: './admin-sponsorships-details-index.component.css'
})
export class AdminSponsorshipsDetailsIndexComponent {

  sponsorshipsInfos:any
  storageUrl = environment.storageUrl;

  constructor(private sponsorshipsService: SponsorshipsService) {}

  ngOnInit() {
    this.sponsorshipsInfos = this.sponsorshipsService.getSponsorshipsInfos().subscribe((res:any)=>{
      console.log(res);
      this.sponsorshipsInfos = res.data;
    })
  }
}
