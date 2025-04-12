import {Component, ViewChild} from '@angular/core';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {CandidateService} from '../../../../services/candidate.service';
import {environment} from '../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-candidates-index',
    imports: [
        PaginateTableComponent
    ],
    templateUrl: './admin-candidates-index.component.html',
    styleUrl: './admin-candidates-index.component.css'
})
export class AdminCandidatesIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>;
  constructor(private candidateService: CandidateService) {
    this._unsubscribeAll = new Subject();
  }
  allCandidates:any[] = []
  fetchTitle = "Liste des Candidats"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total!: number;
  itemsPerPage!: number;


  fetch(page:number){
    this.isLoading = true;
    this.allCandidates = []
    this.candidateService.getAllCandidates(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        this.isLoading = false;
        res.data.data.map((c:any)=>{
            let tempId = c.id
            c.id = c.elector_id
            c.elector_id = tempId
            this.allCandidates.push(c)
        });
        console.log(this.allCandidates);
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


  protected readonly environment = environment;
}
