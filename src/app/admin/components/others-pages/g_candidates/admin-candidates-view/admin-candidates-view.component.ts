import { Component } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {ElectorService} from '../../../../services/elector.service';
import {CandidateService} from '../../../../services/candidate.service';
import { environment } from '../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-candidates-view',
    imports: [],
    templateUrl: './admin-candidates-view.component.html',
    styleUrl: './admin-candidates-view.component.css'
})
export class AdminCandidatesViewComponent {

  protected readonly environment = environment;
  titleElement!: string;
  candidate:any;
  votingPlace:any;
  polling:any;

  constructor(private route:ActivatedRoute,private serv:CandidateService, private router:Router) {}

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/'+id], {relativeTo: this.route});

  }

  onDelete(id: any) {
    if (confirm('Voulez vous vraiment supprimer?')){
      this.serv.deleteCandidate(id).subscribe({
        next: () => {
          alert('Suppression réussi')
          this.router.navigate(['../../'], {relativeTo: this.route});
        },
        error: (err) => {
          alert(err)
        }
      })
    }
  }

  ngOnInit(){

    let id = this.route.snapshot.params['id'];
    this.serv.getCandidate(id).subscribe((res:any)=>{
      console.log(res);
      this.candidate = res.data.candidate;
      this.titleElement = "Le Candidat: "+ res.data.elector.firstname +" "+ res.data.elector.lastname+" du party "+res.data.partyOrCoalition.name;


    })
  }

}
