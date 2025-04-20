import {Component, inject, Input} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {NgClass, NgForOf, NgIf} from "@angular/common";
import {RouterLink} from "@angular/router";
import {BehaviorSubject} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import {ModalService} from '../../../../core/services/modal.service';
import {environment} from '../../../../../environments/environment.development';
import {UserService} from '../../../services/user.service';

@Component({
  selector: 'app-acc-paginate-table',
  standalone: true,
    imports: [
        FormsModule,
        NgForOf,
        NgIf,
        ReactiveFormsModule,
        RouterLink,
      NgClass
    ],
  templateUrl: './acc-paginate-table.component.html',
  styleUrl: './acc-paginate-table.component.css'
})
export class AccPaginateTableComponent {
  @Input() isLoading = false;
  @Input() error?: string;
  @Input() total!: number;
  @Input() pageItemsCount!: number;
  @Input() tableTitle?: string;
  @Input() columns?: string []
  @Input() dataColumns?: string []
  @Input() rows?: any[]
  @Input() pageIndex: number = 1;
  @Input() lastPage: number = 10;
  @Input() pageSize:number[] = Array(this.lastPage).fill(1).map((_, i) => {
    return i + 1;
  })
  @Input() privilege?: boolean = false;

  paginate = new BehaviorSubject({
    page: 1,
  });

  rowTrackBy = (index:any,row:any)=>{
    return row.userId
  }
  http = inject(HttpClient)
  @Input() url!: string;

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

  modalService = inject(ModalService)
  @Input() deleteField(id:number) {
    this.modalService.open(
      'Supprimer cet élément ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.http.delete(this.url + id, {}).subscribe({
          next: () => {
            this.modalService.show('success', 'Suppression réussie!');
            setTimeout(() => {

              window.location.reload()
            }, 2000)
          },
          error: (err) => {
            // alert(err)
            this.modalService.show('danger', 'Une erreur est survenue.', false);
          }
        })
      } else {
        console.log('Annulé');
      }
    });

  }

  protected readonly environment = environment;

  userService = inject(UserService)
  resetPasswordFiled(id:any) {
    let idRequest= {
      id: id
    }
    this.userService.resetUserPassword(idRequest).subscribe((res:any)=>{
      this.modalService.show("success", "Mail de réinitialisation envoyé avec succès!")
    })
  }
}
