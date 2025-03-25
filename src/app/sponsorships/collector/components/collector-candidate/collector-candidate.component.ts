import { Component } from '@angular/core';
import {CollectorService} from '../../services/collector.service';
import {environment} from '../../../../../environments/environment.development';

@Component({
  selector: 'app-collector-candidate',
  standalone: true,
  imports: [
  ],
  templateUrl: './collector-candidate.component.html',
  styleUrl: './collector-candidate.component.css'
})
export class CollectorCandidateComponent {

  candidate!:any
  party!:any
  storageUrl = environment.storageUrl;
  constructor(private service: CollectorService) {
  }

  ngOnInit() {
    this.service.getCandidatureInfos().subscribe((res:any)=>{
      console.log(res);
      this.candidate = res.data.candidate;
      this.party = res.data.party;
    })
  }
}
