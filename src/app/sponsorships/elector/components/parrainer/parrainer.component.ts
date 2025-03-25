import { Component } from '@angular/core';
import {ElectorService} from '../../services/elector.service';
import {ActivatedRoute, Router} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {environment} from '../../../../../environments/environment.development';

@Component({
  selector: 'app-parrainer',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './parrainer.component.html',
  styleUrl: './parrainer.component.css'
})
export class ParrainerComponent {
  party: any;
  partyId: any
  candidate: any;
  supportMessage: any;
  storageUrl = environment.storageUrl;

  constructor(private electorService:ElectorService, private router: Router, private route:ActivatedRoute) {
  }
  ngOnInit() {
    let candidature = this.route.snapshot.params['id'];
    this.electorService.getCandidature(candidature).subscribe((res:any)=>{
      this.candidate = res.candidateDatas;
      this.party = res.partyOrCoalitionDatas;
      console.log(res)
    })
  }
  sponsoring(id:number){
    var  sponsoring = {
      party_or_coalition_id: id,
      supportMessage: this.supportMessage,
    }
    this.electorService.sponsored(sponsoring).subscribe((res:any)=>{
      if(res.status === 0){
        console.log(res);
      }else if(res.status === 1){
        console.log(res);
        this.router.navigateByUrl('/parrainages-interface/electeur/mon_candidat');
      }
    })
  }
}
