import {Component, ViewChild} from '@angular/core';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {DgeUserService} from '../../../../services/dge-user.service';
import {CandidateService} from '../../../../services/candidate.service';

@Component({
  selector: 'app-admin-candidates-index',
  standalone: true,
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
  allCandidates:any
  fetchTitle = "Liste des Candidats"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]


  fetch(page:number){
    this.isLoading = true;
    this.candidateService.getAllCandidates(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        console.log(res.data);
        this.isLoading = false;
        this.allCandidates = res.data.data;
        this.lastPage = res.data.last_page;
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
