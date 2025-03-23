import { Component } from '@angular/core';
import {NgClass, NgForOf} from "@angular/common";
import {BehaviorSubject, Subject, takeUntil} from 'rxjs';
import {CollectorService} from '../../services/collector.service';

@Component({
  selector: 'app-collector-electors',
  standalone: true,
  imports: [
    NgForOf,
    NgClass
  ],
  templateUrl: './collector-electors.component.html',
  styleUrl: './collector-electors.component.css'
})
export class CollectorElectorsComponent {
  private _unsubscribeAll: Subject<any>;

  allElectors:any
  fetchTitle = "Liste des parrains de notre commune"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total!: number;
  itemsPerPage!: number;
  pageIndex!: number;


  paginate = new BehaviorSubject({
    page: 1,
  });

  constructor(private service: CollectorService) {
    this._unsubscribeAll = new Subject();
  }


  fetch(page:number){
    this.isLoading = true;
    this.service.getOurElectors(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        console.log(res.data);
        this.isLoading = false;
        this.allElectors = res.data.data;
        this.lastPage = res.data.last_page;
        this.itemsPerPage = res.data.to - res.data.from +1;
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
    this.currentPage = this.pageIndex = 1
  }

  ngAfterViewInit(){
    this.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe((paginator)=>{
      this.currentPage = paginator.page;
      this.fetch(paginator.page);
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(undefined)
    this._unsubscribeAll.complete()
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


}
