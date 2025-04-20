import {Component, inject, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {BehaviorSubject} from 'rxjs';
import {Router, RouterLink, RouterLinkWithHref, RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {ModalService} from '../../../../core/services/modal.service';
import {PollingStationService} from '../../../services/polling-station.service';


@Component({
    selector: 'app-paginate-table',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    RouterModule,
    FormsModule,
  ],
    templateUrl: './paginate-table.component.html',
    styleUrl: './paginate-table.component.css'
})
export class PaginateTableComponent {
  @Input() isLoading = false;
  @Input() error?: string;
  @Input() total!: number;
  @Input() pageItemsCount!: number;
  @Input() tableTitle?: string;
  @Input() columns?: string []
  @Input() dataColumns?: string []
  @Input() rows?: any[]
  @Input() pageIndex: number = 1;
  @Input() lastPage: number = 10;
  @Input() pageSize:number[] = Array(this.lastPage).fill(1).map((_, i) => {
    return i + 1;
  })


  paginate = new BehaviorSubject({
    page: 1,
  });

  rowTrackBy = (index:any,row:any)=>{
    return row.id
  }
  http = inject(HttpClient)
  @Input() url!: string;

  ngAfterViewInit() {
    const newState = this.paginate.value
    newState.page = this.pageIndex = 1;
    this.paginate.next(newState);
  }

  prevPage() {
    const newState = this.paginate.value
    newState.page = this.pageIndex = this.pageIndex - 1;
    this.paginate.next(newState);
  }

  nextPage() {
    const newState = this.paginate.value
    newState.page = this.pageIndex = this.pageIndex + 1;
    this.paginate.next(newState);
  }

  selectPage(page: number) {
    const newState = this.paginate.value
    newState.page = this.pageIndex = page;
    this.paginate.next(newState);
  }

  modalService = inject(ModalService)
  @Input() options = false
  @Input() deleteField(id:number) {
    this.modalService.open(
      'Supprimer cet élément ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.http.delete(this.url+id, {}).subscribe({
              next: () => {
                this.modalService.show('success', 'Suppression réussie!');
                setTimeout(()=>{

                  window.location.reload()
                }, 2000)
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
    //   this.http.delete(this.url+id, {}).subscribe({
    //     next: () => {
    //       alert('Suppression réussi')
    //       window.location.reload()
    //     },
    //     error: (err) => {
    //       alert(err)
    //     }
    //   })
    // }


  }

  pollingService = inject(PollingStationService)
  router = inject(Router)

  authorizeViote(cniNumber: any) {
    this.pollingService.authorizeVote(cniNumber).subscribe((res) => {
      console.log(res);
      this.modalService.show("success", "Electeur autorisé à voté! Peut maintenat rejoindre l'urne.", true, 10000)
      const urne_url = this.router.serializeUrl(
        this.router.createUrlTree(['elections-interface/urne/'+cniNumber])
      );
      window.open(urne_url, '_blank');
    });
  }
}
