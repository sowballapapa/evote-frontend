import {Component} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {PartyService} from '../../../../services/party.service';
import {environment} from '../../../../../../environments/environment.development';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
    selector: 'app-admin-parties-view',
  imports: [
  ],
    templateUrl: './admin-parties-view.component.html',
    styleUrl: './admin-parties-view.component.css'
})
export class AdminPartiesViewComponent {
  party!:any
  title?: string;
  url?: any;

  constructor(private route:ActivatedRoute,
              private partyService:PartyService,
              private router:Router,
              private domSanitizer: DomSanitizer) {}



  ngOnInit(){
    let id = this.route.snapshot.params['id'];

    this.partyService.getParty(id).subscribe((res:any)=>{
    console.log(res);
      this.title = "Parti ou Coalition avec l'id: "+ res.data.id
      this.party = res.data;
      this.url = this.domSanitizer.bypassSecurityTrustResourceUrl(this.environment.storageUrl+res.data.campaignProgram);
    })

  }

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/'+id], {relativeTo: this.route});

  }

  onDelete(id: any) {
    if (confirm('Voulez vous vraiment supprimer?')){
      this.partyService.destroy(id).subscribe({
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


  protected readonly environment = environment;
}
