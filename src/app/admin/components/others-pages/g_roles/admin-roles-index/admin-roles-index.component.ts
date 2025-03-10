import {Component, ViewChild} from '@angular/core';
import {PaginateTableComponent} from '../../../reusable/paginate-table/paginate-table.component';
import {Subject, takeUntil} from 'rxjs';
import {ElectorService} from '../../../../services/elector.service';
import {formatDate} from '@angular/common';
import {RoleService} from '../../../../services/role.service';

@Component({
  selector: 'app-admin-roles-index',
  standalone: true,
  imports: [
    PaginateTableComponent
  ],
  templateUrl: './admin-roles-index.component.html',
  styleUrl: './admin-roles-index.component.css'
})
export class AdminRolesIndexComponent {
  @ViewChild(PaginateTableComponent, {static: true}) paginator!: PaginateTableComponent;
  private _unsubscribeAll: Subject<any>
  isLoading: boolean = false;
  fetchTitle = "Liste des électeurs Enregistrés sur la plateforme"
  page = 1
  lastPage = 1
  currentPage = 1
  pageSize = [1]
  roles: any
  total!: number
  itemsPerPage: number | undefined;

  constructor(private roleService:RoleService) {
    this._unsubscribeAll = new Subject();
  }

  fetchRoles(page:number): void {
    this.isLoading = true;
    this.roleService.getAll(page)
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((res:any) =>{
        console.log(res);
        this.isLoading =false;
        this.roles = res.data.data;
        this.total = res.data.total
        this.itemsPerPage = res.data.per_page
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
      this.fetchRoles(paginator.page);
    })
  }

  ngOnDestroy() {
    this._unsubscribeAll.next(undefined)
    this._unsubscribeAll.complete()
  }
}
