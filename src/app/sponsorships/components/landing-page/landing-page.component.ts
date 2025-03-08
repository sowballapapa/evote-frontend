import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(private router: Router) {
  }

  connexionElector(){
    this.router.navigateByUrl('/evote-parrainages/electeur/connection');
  }
  registerElector(){
    this.router.navigateByUrl('/evote-parrainages/electeur/inscription');
  }
  connexionCandidate(){
    this.router.navigateByUrl('/evote-parrainages/candidat/connection');
  }


}
