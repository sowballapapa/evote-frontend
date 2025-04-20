import {Component, ViewChild} from '@angular/core';
import {Subject, takeUntil} from 'rxjs';
import {PollingStationService} from '../../services/polling-station.service';
import {PaginateTableComponent} from '../reusables/paginate-table/paginate-table.component';

@Component({
  selector: 'app-list-electors-voted',
  standalone: true,
  imports: [
    PaginateTableComponent
  ],
  templateUrl: './list-electors-voted.component.html',
  styleUrl: './list-electors-voted.component.css'
})
export class ListElectorsVotedComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>;
  constructor(private service: PollingStationService) {
    this._unsubscribeAll = new Subject();
  }
  allElectors:any[] = []
  fetchTitle = "Liste des électeurs ayant voté"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total!: number;
  itemsPerPage!: number;


  fetch(page:number){
    this.isLoading = true;
    this.allElectors = []
    this.service.getVotedelectors(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        this.isLoading = false;
        res.data.data.map((c:any)=>{
          let tempId = c.id
          c.id = c.elector_id
          c.elector_id = tempId
          this.allElectors.push(c)
        });
        console.log(this.allElectors);
        this.lastPage = res.data.last_page;
        this.itemsPerPage = res.data.per_page;
        this.total = res.data.total
        this.currentPage = res.data.current_page;
        this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
          return i + 1;
        });
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
      this.fetch(paginator.page);
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(undefined)
    this._unsubscribeAll.complete()
  }


}
