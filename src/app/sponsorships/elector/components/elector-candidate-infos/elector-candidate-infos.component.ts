import { Component } from '@angular/core';
import {ElectorService} from '../../services/elector.service';
import {environment} from '../../../../../environments/environment.development';

@Component({
    selector: 'app-elector-candidate-infos',
    imports: [],
    templateUrl: './elector-candidate-infos.component.html',
    styleUrl: './elector-candidate-infos.component.css'
})
export class ElectorCandidateInfosComponent {
  candidate:any
  party:any
  supportMessage:any
  noCandidateMessage:any = null
  storageUrl = environment.storageUrl
  constructor(private electorService: ElectorService) { }

  ngOnInit() {
    this.electorService.getMyCandidate().subscribe((res:any)=>{
      if(res.status == 0){
        this.noCandidateMessage=res.message;
      }
      if(res.status == 1){
        console.log(res)
        this.candidate=res.data.candidate;
        this.party=res.data.party;
        this.supportMessage=res.data.supportMessage;
      }
    })
  }
}
