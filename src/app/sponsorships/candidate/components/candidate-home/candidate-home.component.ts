import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CandidateService} from '../../services/candidate.service';
import {NgIf} from '@angular/common';

@Component({
    selector: 'app-candidate-home',
  imports: [
    FormsModule,
    NgIf
  ],
    templateUrl: './candidate-home.component.html',
    styleUrl: './candidate-home.component.css'
})
export class CandidateHomeComponent {
  stats:any
  message:any

  constructor(private service: CandidateService) { }

  ngOnInit() {
    this.service.getCandidateStats().subscribe((res:any)=>{
      if(res.status == 0){
        this.message = "Pas encore de résultats"
      }
      if(res.status == 1){
        this.stats = res.data;
      }
    })
  }
}
