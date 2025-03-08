import {Component} from '@angular/core';
import {ElectorService} from '../../services/elector.service';
import {NgForOf, NgIf} from '@angular/common';
import {CandidateCardComponent} from '../partials/candidate-card/candidate-card.component';

@Component({
  selector: 'app-elector-home',
  standalone: true,
  imports: [
    NgForOf,
    CandidateCardComponent,
    NgIf
  ],
  templateUrl: './elector-home.component.html',
  styleUrl: './elector-home.component.css'
})
export class ElectorHomeComponent {
  candidatures!:any
  constructor(private electorService: ElectorService) {

  }

  fecthCandidatures(){
    this.electorService.getAllCandidatures().subscribe((res: any) => {
      this.candidatures = res.data;
      // this.candidatures.map().set('disactiveHidden', false)
      console.log(this.candidatures);
    })

  }

  onChecked(){

  }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.fecthCandidatures()
  }

}
