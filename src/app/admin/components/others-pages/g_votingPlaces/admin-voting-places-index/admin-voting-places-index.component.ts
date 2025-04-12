import {Component, ViewChild} from '@angular/core';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {VotingPlaceService} from '../../../../services/voting-place.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-voting-places-index',
  standalone: true,
  imports: [
    PaginateTableComponent,
  ],
  templateUrl: './admin-voting-places-index.component.html',
  styleUrl: './admin-voting-places-index.component.css'
})
export class AdminVotingPlacesIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>;
  constructor(private votingPlaceService: VotingPlaceService) {
    this._unsubscribeAll = new Subject();
  }
  allVP:any= []
  fetchTitle = "Liste des Lieux de votes"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total!: number;
  itemsPerPage!: number;
  authorizedError!: string;


  fetch(page:number){
    this.isLoading = true;
    this.votingPlaceService.getAll(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe({
        next:(res:any) =>{
          console.log(res.data);
          this.isLoading = false;
          res.data.data.map((v:any) => {
            if (v.id){
              let temp: any = {}
              temp.id = v.id
              temp.name = v.name
              temp.district = v.district.name
              temp.totalPllSt = v.polling_station.length
              this.allVP.push(temp)
            }
          })
          this.lastPage = res.data.last_page;
          this.itemsPerPage = res.data.per_page;
          this.total = res.data.total
          this.currentPage = res.data.current_page;
          this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
            return i + 1;
          });
        },
        error: err => {
          if (err.status === 403) {
            this.isLoading = false;
            this.authorizedError = err.message;
          }
        }
      })
  }
  ngOnInit() {
    // this.fetch(this.page)
    this.isLoading = true;
    this.currentPage = 1
  }

  ngAfterViewInit(){
    this.paginator.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe((paginator)=>{
      this.currentPage = paginator.page;
      this.allVP = []
      this.fetch(paginator.page);
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(undefined)
    this._unsubscribeAll.complete()
  }


}

