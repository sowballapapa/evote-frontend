import { Component } from '@angular/core';
import {environment} from '../../../../../../environments/environment.development';
import {ActivatedRoute, Router} from '@angular/router';
import {ElectorService} from '../../../../services/elector.service';
import {ModalService} from '../../../../../core/services/modal.service';

@Component({
    selector: 'app-admin-electors-view',
  imports: [
  ],
    templateUrl: './admin-electors-view.component.html',
    styleUrl: './admin-electors-view.component.css'
})
export class AdminElectorsViewComponent {

  protected readonly environment = environment;
  titleElement!: string;
  elector:any;
  votingPlace:any;
  polling:any;

  constructor(private route:ActivatedRoute,private electorServ:ElectorService, private router:Router, private modalService:ModalService) {}

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/'+id], {relativeTo: this.route});

  }

  onDelete(id: any) {

    this.modalService.open(
      'Supprimer cet électeur ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.electorServ.destroy(id).subscribe({
          next: () => {
            this.modalService.show('success', 'Suppression réussie!');
            this.router.navigate(['../../'], {relativeTo: this.route});
          },
          error: (err) => {
            // alert(err)
            this.modalService.show('danger', 'Une erreur est survenue.', false);
          }
        })
      } else {
        console.log('Annulé');
      }
    });

    // if (confirm('Voulez vous vraiment supprimer?')){
    //   this.electorServ.destroy(id).subscribe({
    //     next: () => {
    //       alert('Suppression réussi')
    //       this.router.navigate(['../../'], {relativeTo: this.route});
    //     },
    //     error: (err) => {
    //       alert(err)
    //     }
    //   })
    // }
  }

  ngOnInit(){

    let id = this.route.snapshot.params['id'];
    this.electorServ.getElector(id).subscribe((res:any)=>{
      console.log(res);
      this.elector = res.data.elector;
      this.polling = res.data.elector_ps;
      this.votingPlace = res.data.elector_vp;

      this.titleElement = "L'électeur avec le CNI Numéro: "+ res.data.cniNumber


    })
  }

}
