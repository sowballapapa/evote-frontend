import { Component } from '@angular/core';
import {NgForOf, NgIf, PercentPipe} from "@angular/common";
import {PollingStationService} from '../../services/polling-station.service';
import {environment} from '../../../../environments/environment.development';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [
    NgForOf,
    PercentPipe
  ],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css'
})
export class ResultsComponent {
    isLoading: boolean =false;
    results!:any
    parties!:any
    participationRate!:any

    constructor(private service: PollingStationService) {
    }

    ngOnInit() {
      this.service.getResults().subscribe({
        next:(res:any)=>{
          console.log(res);
          this.results =res.data.results;
          this.parties = res.data.party_or_coalitions;
          this.participationRate =res.data.participationRate;
        }
      })
    }

  protected readonly environment = environment;
}
