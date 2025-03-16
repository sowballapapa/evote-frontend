import {Component, ViewChild} from '@angular/core';
import {DgeUserService} from '../../../../services/dge-user.service';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';

@Component({
    selector: 'app-admin-dge-users-index',
    imports: [
        PaginateTableComponent
    ],
    templateUrl: './admin-dge-users-index.component.html',
    styleUrl: './admin-dge-users-index.component.css'
})
export class AdminDgeUsersIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>;
  constructor(private adminService: DgeUserService) {
    this._unsubscribeAll = new Subject();
  }
  allDgeUsers:any[] = []
  fetchTitle = "Liste des Membres de la DGE"
  isLoading = false;
  page = 1
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  itemsPerPage =1
  total = 1


  fetch(page:number){
    this.isLoading = true;
    this.adminService.getAllDgeUsers(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        this.isLoading = false;
        this.allDgeUsers = []
        res.data.data.forEach((item:any)=>{
          let tempId = item.id;
          item.id = item.elector_id;
          item.elector_id = tempId;
          this.allDgeUsers.push(item);
        })
        console.log(this.allDgeUsers)
          this.lastPage = res.data.last_page;
        this.currentPage = res.data.current_page;
        this.itemsPerPage = res.data.per_page;
        this.total = res.data.total;
        this.pageSize = Array(this.lastPage).fill(1).map((_, i) => {
          return i + 1;
        });
    })
  }
  ngOnInit() {
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
