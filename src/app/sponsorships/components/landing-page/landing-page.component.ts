import { Component } from '@angular/core';
import {Router, RouterLink} from '@angular/router';

@Component({
    selector: 'app-landing-page',
  imports: [
    RouterLink
  ],
    templateUrl: './landing-page.component.html',
    styleUrl: './landing-page.component.css'
})
export class LandingPageComponent {


  constructor(private router: Router) {
  }

  connexionElector(){
    this.router.navigateByUrl('/parrainages-interface/electeur/connection');
  }
  registerElector(){
    this.router.navigateByUrl('');
  }
  connexionCandidate(){
    this.router.navigateByUrl('/parrainages-interface/candidat/connection');
  }


}
