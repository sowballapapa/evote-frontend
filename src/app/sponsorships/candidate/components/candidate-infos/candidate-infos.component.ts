import { Component } from '@angular/core';
import {CandidateService} from '../../services/candidate.service';
import {environment} from '../../../../../environments/environment.development';

@Component({
    selector: 'app-candidate-infos',
  imports: [
  ],
    templateUrl: './candidate-infos.component.html',
    styleUrl: './candidate-infos.component.css'
})
export class CandidateInfosComponent {

  candidate!:any
  party!:any
  storageUrl = environment.storageUrl;
  constructor(private service: CandidateService) {
  }

  ngOnInit() {
    this.service.getInfos().subscribe((res:any)=>{
      console.log(res);
      this.candidate = res.data.candidate;
      this.party = res.data.party;
    })
  }
}
