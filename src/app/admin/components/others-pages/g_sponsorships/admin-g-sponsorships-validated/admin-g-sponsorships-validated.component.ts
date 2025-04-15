import { Component } from '@angular/core';
import {SponsorshipsService} from '../../../../services/sponsorships.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {RouterLink} from '@angular/router';
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';
import {environment} from '../../../../../../environments/environment.development';

@Component({
  selector: 'app-admin-g-sponsorships-validated',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    NgClass,
    NgForOf,
    NgIf
  ],
  templateUrl: './admin-g-sponsorships-validated.component.html',
  styleUrl: './admin-g-sponsorships-validated.component.css'
})
export class AdminGSponsorshipsValidatedComponent {

  validatedSp!:any

  private _unsubscribeAll: Subject<any>;

  isLoading = false;
  error?: string;
  total: number = 0;
  pageItemsCount: number = 0;
  tableTitle?: string= "Liste des parrainages validés";
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

  constructor(private sponsorshipsService:SponsorshipsService) {
    this._unsubscribeAll = new Subject();
  }

  fetch(page:number) {
    this.isLoading = true;
    this.sponsorshipsService.getValidatedSponsorships(page).subscribe((res:any) => {
      console.log(res)
      this.validatedSp = res.data.data;
      this.lastPage = res.data.last_page;
      this.pageItemsCount = res.data.per_page;
      this.total = res.data.total
      this.pageIndex = res.data.current_page;
      this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
        return i + 1;
      });
      this.isLoading = false;
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

  protected readonly environment = environment;
}
