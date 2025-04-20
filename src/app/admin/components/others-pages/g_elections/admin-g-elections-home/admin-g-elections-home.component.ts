import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';
import {SponsorshipsService} from '../../../../services/sponsorships.service';
import {ModalService} from '../../../../../core/services/modal.service';
import {Router} from '@angular/router';
import {environment} from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-g-elections-home',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass
  ],
  templateUrl: './admin-g-elections-home.component.html',
  styleUrl: './admin-g-elections-home.component.css'
})
export class AdminGElectionsHomeComponent {

  minSponsors!:any
  candidates!:any
  candidatesResults!:any
  private _unsubscribeAll: Subject<any>;

  isLoading = false;
  error?: string;
  total: number = 0;
  pageItemsCount: number = 0;
  tableTitle?: string ="Liste des Candidats et leur statut de participation aux élections"
  columns?: string []
  dataColumns?: string []
  rows?: any[]
  pageIndex: number = 1;
  lastPage: number = 0;
  pageSize:number[] = Array(this.lastPage).fill(1).map((_, i) => {
    return i + 1;
  })


  paginate = new BehaviorSubject({
    page: 1,
  });

  constructor(private sponsorshipsService:SponsorshipsService, private modalService:ModalService, private router:Router) {
    this._unsubscribeAll = new Subject();
  }

  fetch(page:number) {
    this.isLoading = true;
    this.candidates = []
    this.sponsorshipsService.getParticipationsList(page).subscribe((res:any) => {
      this.isLoading = false;
      res.data.data.map((c:any)=>{
        let tempId = c.id
        c.id = c.elector_id
        c.elector_id = tempId
        this.candidates.push(c)
      });
      console.log(this.candidates);
      this.lastPage = res.data.last_page;
      this.pageItemsCount = res.data.per_page;
      this.total = res.data.total
      this.pageIndex = res.data.current_page;
      this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
        return i + 1;
      });
    })

    this.sponsorshipsService.getSponsorshipsInfos().subscribe((res:any) => {
      this.minSponsors = res.data.min_electors_sign;
    })

    this.sponsorshipsService.getAllSponsorshipsresults().subscribe((res:any) => {
      console.log(res)
      this.candidatesResults = res.data.results;
    })
  }

  ngOnInit() {
    // this.fetch(this.page)
    this.isLoading = true;
    this.pageIndex = 1
  }

  ngAfterViewInit() {
    const newState = this.paginate.value
    newState.page = this.pageIndex = 1;
    this.paginate.next(newState);
    this.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe((paginator)=>{
      this.pageIndex = paginator.page;
      this.fetch(this.pageIndex);
    })
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


  setParticipation(id:any, vp:any) {
    this.modalService.open(
      'Voulez vous vraiment modifier la participation?',
      ''
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        const validated_participation = {
          validated_participation:vp
        }
        this.sponsorshipsService.setParticipation(id,validated_participation).subscribe({
          // console.log(res)

          next: () => {
            this.modalService.show('success', 'Modification de la participation réussie!');
            window.location.reload();
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


  protected readonly environment = environment;
}
