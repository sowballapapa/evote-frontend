import {Component, ViewChild} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { Subject, takeUntil} from 'rxjs';
import {CollectorService} from '../../../../services/collector.service';
import {CandidateService} from '../../../../services/candidate.service';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import { environment } from '../../../../../../environments/environment.development';
@Component({
  selector: 'app-admin-collectors-index',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
    PaginateTableComponent,
  ],
  templateUrl: './admin-collectors-index.component.html',
  styleUrl: './admin-collectors-index.component.css'
})
export class AdminCollectorsIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>;

  constructor(private collectorService: CollectorService,private candidateService: CandidateService) {
    this._unsubscribeAll = new Subject();
  }

  selectedCanidateId!:any
  candidates!:any
  allCollectors:any[] = []
  fetchTitle = "Liste des Collecteurs"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total!: number;
  itemsPerPage!: number;


  fetch(page:number){
    this.isLoading = true;
    this.allCollectors = []
    this.collectorService.getAll(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        this.isLoading = false;
        res.data.data.map((c:any)=>{
          let tempId = c.id
          c.id = c.elector_id
          c.elector_id = tempId
          this.allCollectors.push(c)
        });
        console.log(this.allCollectors);
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
    this.candidateService.getAll().subscribe((res:any)=>{
      this.candidates = res.data;
    })
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

  selectCandidate(id:any) {
      this.selectedCanidateId = id
  }
}
