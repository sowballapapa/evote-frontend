import { Component } from '@angular/core';
import {SponsorshipsService} from '../../../../services/sponsorships.service';
import {NgClass, NgForOf, PercentPipe} from '@angular/common';
import {PartyService} from '../../../../services/party.service';
import {environment} from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-g-sponsorships-results-candidates',
  standalone: true,
  imports: [
    NgForOf,
    NgClass,
    PercentPipe
  ],
  templateUrl: './admin-g-sponsorships-results-candidates.component.html',
  styleUrl: './admin-g-sponsorships-results-candidates.component.css'
})
export class AdminGSponsorshipsResultsCandidatesComponent {
  parties!:any
  minSponsors!:any
  candidatesResults!:any
  rate!:any
  participations!:any
  isLoading = false;
  tableTitle?: string ="Les résultats aux parrainages"

  constructor(private sponsorshipsService:SponsorshipsService, private partyService:PartyService) {
  }


  ngOnInit() {

    this.sponsorshipsService.getSponsorshipsInfos().subscribe((res:any) => {
      this.minSponsors = res.data.min_electors_sign;
    })


    this.partyService.getAll().subscribe((res:any) => {
      // console.log(res);
      this.parties = res.data;
    })

    this.sponsorshipsService.getAllSponsorshipsresults().subscribe((res:any) => {
      console.log(res)
      this.candidatesResults = res.data.results;
      this.rate = res.data.rate;
      this.participations = res.data.overall;
    })
  }

  protected readonly environment = environment;
}
