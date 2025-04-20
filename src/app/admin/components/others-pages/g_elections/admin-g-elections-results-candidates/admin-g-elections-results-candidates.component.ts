import { Component } from '@angular/core';
import {ElectionsService} from '../../../../services/elections.service';
import {NgForOf, NgIf, PercentPipe} from '@angular/common';
import {environment} from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-g-elections-results-candidates',
  standalone: true,
  imports: [
    NgForOf,
    PercentPipe
  ],
  templateUrl: './admin-g-elections-results-candidates.component.html',
  styleUrl: './admin-g-elections-results-candidates.component.css'
})
export class AdminGElectionsResultsCandidatesComponent {
  results!:any
  isLoading = false;
  participations!:any
  participationRate!:any

  constructor(private electionsService:ElectionsService) {
  }

  ngOnInit() {
    this.isLoading = true;
    this.electionsService.getCandidatesResults().subscribe((res:any)=>{
      console.log(res);

      this.results =res.data.results;
      this.participationRate = res.data.participationRate;
      this.participations = res.data.participation;
      this.isLoading = false;
    })
  }

  protected readonly environment = environment;
}
