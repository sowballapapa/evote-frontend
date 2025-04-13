import {Component, inject, Input, ViewChild} from '@angular/core';
import {Field, ViewElementComponent} from "../../../reusable/view-element/view-element.component";
import {ActivatedRoute, Router, RouterLink} from '@angular/router';
import {VotingPlaceService} from '../../../../services/voting-place.service';
import { environment } from '../../../../../../environments/environment.development';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {NgForOf, NgIf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ModalService} from '../../../../../core/services/modal.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PollingStationService} from '../../../../services/polling-station.service';

@Component({
  selector: 'app-admin-voting-places-view',
  standalone: true,
  imports: [
    NgForOf,
    FormsModule,
    ReactiveFormsModule,
    RouterLink,
    NgIf
  ],
  templateUrl: './admin-voting-places-view.component.html',
  styleUrl: './admin-voting-places-view.component.css'
})
export class AdminVotingPlacesViewComponent {

  router = inject(Router)
  route = inject(ActivatedRoute)
  http = inject(HttpClient)
  modalService = inject(ModalService)
  vpService = inject(VotingPlaceService)
  pollStService = inject(PollingStationService)

  id = this.route.snapshot.params['id'];
  votingPlace!:any
  pollingStations!:any
  pollCount!:any;

  ngOnInit() {
    this.vpService.getOne(this.id).subscribe((res:any)=>{
      // console.log(res);
      this.votingPlace = res.data;
      this.pollingStations = res.data.polling_station;
      this.pollCount = this.pollingStations.length;
    })
  }

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/' + id], {relativeTo: this.route});

  }

  onDelete(id: any) {
    // if (confirm('Voulez vous vraiment supprimer?')){
    //   this.http.delete(this.url+id,{}).subscribe({
    //     next: () => {
    //       alert('Suppression réussi')
    //       this.router.navigate(['../../'], {relativeTo: this.route});
    //     },
    //     error: (err) => {
    //       alert(err)
    //     }
    //   })
    // }
    // }

    this.modalService.open(
      'Supprimer cet élément ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.vpService.delete(id).subscribe({
          next: () => {
            this.modalService.show('success', 'Suppression du lieu réussie!');
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

  }


  onPollDelete(id: any) {
    // if (confirm('Voulez vous vraiment supprimer?')){
    //   this.http.delete(this.url+id,{}).subscribe({
    //     next: () => {
    //       alert('Suppression réussi')
    //       this.router.navigate(['../../'], {relativeTo: this.route});
    //     },
    //     error: (err) => {
    //       alert(err)
    //     }
    //   })
    // }
    // }

    this.modalService.open(
      'Supprimer cet élément ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.pollStService.delete(id).subscribe({
          next: () => {
            this.modalService.show('success', 'Suppression du bureau réussie!');
            window.location.reload()
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

  }
}
