import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ElectorService} from '../../../services/elector.service';
import {Router, RouterLink} from '@angular/router';

@Component({
    selector: 'app-candidate-card',
  imports: [
    FormsModule,
    NgClass,
    RouterLink
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

  sponsored(id:number){
    this.router.navigateByUrl('parrainages-interface/electeur/parrainer/'+id)

  }

}
