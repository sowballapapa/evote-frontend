import {Component, inject, Input} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgClass} from '@angular/common';
import {ElectorService} from '../../../services/elector.service';

@Component({
  selector: 'app-candidate-card',
  standalone: true,
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
  @Input() disactiveHidden?: boolean =true;


  sponsingService = inject(ElectorService)
  sponsored(){
    this.sponsingService.sponsored(this.partyId)

  }

}
