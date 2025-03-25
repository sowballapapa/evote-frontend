import { Component } from '@angular/core';
import {ElectorService} from '../../services/elector.service';
import {ActivatedRoute, RouterLink} from '@angular/router';
import {environment} from '../../../../../environments/environment.development';

@Component({
  selector: 'app-candidature',
  standalone: true,
  imports: [
    RouterLink
  ],
  templateUrl: './candidature.component.html',
  styleUrl: './candidature.component.css'
})
export class CandidatureComponent {
  candidate!:any
  party!:any
  storageUrl = environment.storageUrl;

  constructor(private electorService:ElectorService, private route:ActivatedRoute) {}


  ngOnInit() {
    let candidature = this.route.snapshot.params['id'];
    this.electorService.getCandidature(candidature).subscribe((res:any)=>{
      this.candidate = res.candidateDatas;
      this.party = res.partyOrCoalitionDatas;
      console.log(res)
    })
  }

}
