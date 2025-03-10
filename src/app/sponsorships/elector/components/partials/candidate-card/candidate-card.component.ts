import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ElectorService} from '../../../services/elector.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-candidate-card',
    imports: [
        FormsModule,
        NgClass
    ],
    templateUrl: './candidate-card.component.html',
    styleUrl: './candidate-card.component.css'
})
export class CandidateCardComponent {
  @Input() urlImg!: string;
  @Input() candidate!: string;
  @Input() party!: string;
  @Input() partyId!: number;
  @Input() checked?: boolean =false;
  @Input() disactiveHidden?: boolean =false;
  @Input() supportMessage!: null;

  constructor(private sponsoringService:ElectorService, private router: Router) {}

  sponsored(){
  var  sponsoring = {
    party_or_coalition_id: this.partyId,
      supportMessage: this.supportMessage,
  }
    this.sponsoringService.sponsored(sponsoring).subscribe((res:any)=>{
      if(res.status === 0){
        console.log(res.message);
      }else if(res.status === 1){
        console.log(res);
        this.router.navigateByUrl('/parrainages-interface/electeur/mon_candidat');
      }
    })
    console.log(sponsoring);

  }

}
