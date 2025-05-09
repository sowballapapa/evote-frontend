import {Component, ViewChild} from '@angular/core';
import {ElectorService} from '../../../../services/elector.service';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {formatDate} from '@angular/common';
import {environment} from '../../../../../../environments/environment.development';

@Component({
    selector: 'app-admin-electors-index',
    imports: [
        PaginateTableComponent
    ],
    templateUrl: './admin-electors-index.component.html',
    styleUrl: './admin-electors-index.component.css'
})
export class AdminElectorsIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>
  isLoading: boolean = false;
  fetchTitle = "Liste des électeurs Enregistrés sur la plateforme"
  page = 1
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  allElectors: any
  total!: number
  itemsPerPage!: number;

  constructor(private electorService:ElectorService) {
    this._unsubscribeAll = new Subject();
  }

  fetchAllElectors(page:number): void {
    this.isLoading = true;
    this.electorService.getAllElectors(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
      console.log(res);
      this.isLoading =false;
      this.allElectors = res.data.data;
      this.allElectors.map((el:any)=>{
        if(el.sex ==0){
          el.sex = "Féminin"
        }else {
          el.sex = "Masculin"
        }
        if (el.birthDate){

          el.birthDate = formatDate(el.birthDate, 'dd MMMM YYYY', 'en')
        }


      })
        this.total = res.data.total
        this.itemsPerPage = res.data.to - res.data.from +1
      this.lastPage = res.data.last_page;
      this.currentPage = res.data.current_page;
      this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
        return i + 1;
      });
    })
  }


  ngOnInit() {
    // this.fetchAllElectors(this.page)
    this.isLoading = true;
    this.currentPage = 1
  }

  ngAfterViewInit() {
    this.paginator.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe((paginator)=>{
      this.currentPage = paginator.page;
      this.fetchAllElectors(paginator.page);
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(undefined)
    this._unsubscribeAll.complete()
  }

  protected readonly environment = environment;
}
