import {Component } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
@Component({
  selector: 'app-admin-collectors-index',
  standalone: true,
  imports: [
    FormsModule,
    ReactiveFormsModule,
  ],
  templateUrl: './admin-collectors-index.component.html',
  styleUrl: './admin-collectors-index.component.css'
})
export class AdminCollectorsIndexComponent {
  // allCollectors:any
  // fetchTitle = "Liste des Collecteurs pour le candidat: "
  // isLoading = false;
  // lastPage = 1
  // currentPage = 1
  // total!: number;
  // itemsPerPage!: number;
  // pageSize:number[] = Array(this.lastPage).fill(1).map((_, i) => {
  //   return i + 1;
  // })
  //
  //
  // paginate = new BehaviorSubject({
  //   page: 1,
  // });
  // private _unsubscribeAll: Subject<any>;
  //
  // constructor(private  service:CollectorService,) {
  //   this._unsubscribeAll = new Subject();
  // }
  // candidates !:any
  // columns: any;
  // pageItemsCount: number;
  // pageIndex: string;
  // tableTitle: string;
  //
  // fetch(page: number) {
  //
  //
  //   this.isLoading = true;
  //   this.service.getAll(page)
  //     .pipe(takeUntil(this._unsubscribeAll))
  //     .subscribe((res:any) =>{
  //       console.log(res.data);
  //       this.isLoading = false;
  //       this.allCollectors = res.data.data;
  //       this.lastPage = res.data.last_page;
  //       this.itemsPerPage = res.data.per_page;
  //       this.total = res.data.total
  //       this.currentPage = res.data.current_page;
  //       this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
  //         return i + 1;
  //       });
  //     })
  // }
  // ngOnInit() {
  //   // this.fetch(this.page)
  //   this.isLoading = true;
  //   this.currentPage = 1
  // }
  //
  // ngAfterViewInit(){
  //   this.paginator.paginate.pipe(takeUntil(this._unsubscribeAll)).subscribe((paginator)=>{
  //     this.currentPage = paginator.page;
  //     this.fetch(paginator.page);
  //   })
  // }
  //
  // ngOnDestroy() {
  //   this._unsubscribeAll.next(undefined)
  //   this._unsubscribeAll.complete()
  // }
  //
  // protected readonly error = error;
  // rows: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
  // dataColumns: (NgIterable<unknown> & NgIterable<any>) | undefined | null;
  //
  // deleteField(id) {
  //
  // }
  //
  // prevPage() {
  //   const newState = this.paginate.value
  //   newState.page = this.pageIndex = this.pageIndex - 1;
  //   this.paginate.next(newState);
  // }
  //
  // nextPage() {
  //   const newState = this.paginate.value
  //   newState.page = this.pageIndex = this.pageIndex + 1;
  //   this.paginate.next(newState);
  // }
  //
  // selectPage(page: number) {
  //   const newState = this.paginate.value
  //   newState.page = this.pageIndex = page;
  //   this.paginate.next(newState);
  // }

}
