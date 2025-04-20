import { Component } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {PollingStationService} from '../../services/polling-station.service';
import {environment} from '../../../../environments/environment.development';

@Component({
    selector: 'app-vote',
  imports: [
    ReactiveFormsModule,
    NgForOf,
    NgIf
  ],
    templateUrl: './vote.component.html',
    styleUrl: './vote.component.css'
})
export class VoteComponent {

  protected readonly environment = environment;
  voted = false
  candidatures!:any
  id!:any

  constructor(private pollService:PollingStationService, private route:ActivatedRoute) {
  }

  ngOnInit() {
    this.pollService.getParties().subscribe((res:any) => {
      this.candidatures = res.data
    })
  }

  vote(partyId: any) {
    this.id = this.route.snapshot.paramMap.get('id');
    this.pollService.vote(partyId, this.id).subscribe((res:any)=>{
      if (res.status == 1){
        this.voted = true;
      }
    })
  }

}
