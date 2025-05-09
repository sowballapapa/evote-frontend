import {Component, ViewChild} from '@angular/core';
import {UserAdminService} from '../../../../../services/comptes/user-admin.service';
import {Subject, takeUntil} from 'rxjs';
import {
  NoAccUsersPaginateTableComponent
} from '../../../../reusable/no-acc-users-paginate-table/no-acc-users-paginate-table.component';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-admin-admin-create',
  standalone: true,
  imports: [
    NoAccUsersPaginateTableComponent,
    NgIf
  ],
  templateUrl: './admin-admin-create.component.html',
  styleUrl: './admin-admin-create.component.css'
})
export class AdminAdminCreateComponent {


  @ViewChild(NoAccUsersPaginateTableComponent, {static: true}) paginator!: NoAccUsersPaginateTableComponent;
  private _unsubscribeAll: Subject<any>;

  constructor(private adminUserService: UserAdminService) {
    this._unsubscribeAll = new Subject();
  }

  allUsers:any
  fetchTitle = "Liste des utilisateurs de la DGE sans compte"
  isLoading = false;
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  total = 1
  itemsPerPage = 1


  fetch(page:number){
    this.isLoading = true;

    this.adminUserService.getNoAccountsUser(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        this.isLoading = false;
        this.allUsers = res.data.data;
        /*this.allUsers.map((user:any)=>{
          if (user.user_type == "App\\Models\\PollingStation"){
            user.user_type = "Bureau de Vote";
          }else{
            user.user_type = "Electeur";
          }
        })*/

        console.log(this.allUsers);
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
    // this.fetch(this.page)
    this.allUsers=[]
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
