import {Component, Input} from '@angular/core';
import {NgClass, NgForOf, NgIf, NgStyle} from '@angular/common';
import {BehaviorSubject} from 'rxjs';

@Component({
  selector: 'app-paginate-table',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
    NgClass,
    NgStyle
  ],
  templateUrl: './paginate-table.component.html',
  styleUrl: './paginate-table.component.css'
})
export class PaginateTableComponent {
  @Input() isLoading = false;
  @Input() error?: string;
  @Input() total?: number;
  @Input() pageItemsCount?: number;
  @Input() tableTitle?: string;
  @Input() columns?: string []
  @Input() dataColumns?: string []
  @Input() rows?: any[]
  @Input() pageIndex: number = 1;
  @Input() lastPage: number = 10;
  @Input() pageSize:number[] = Array(this.lastPage).fill(1).map((_, i) => {
    return i + 1;
  })

  paginate = new BehaviorSubject({
    page: 1,
  });


  ngAfterViewInit() {
    const newState = this.paginate.value
    newState.page = this.pageIndex = 1;
    this.paginate.next(newState);
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
