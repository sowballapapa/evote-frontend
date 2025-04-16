import {Component, inject, Input} from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';
import {ActivatedRoute, Router} from '@angular/router';
import {HttpClient} from '@angular/common/http';
import {ModalService} from '../../../../core/services/modal.service';
import {Field} from '../view-element/view-element.component';
import {environment} from '../../../../../environments/environment.development';

@Component({
  selector: 'app-acc-view-element',
  standalone: true,
  imports: [
    NgForOf,
    NgIf,
  ],
  templateUrl: './acc-view-element.component.html',
  styleUrl: './acc-view-element.component.css'
})
export class AccViewElementComponent {

  @Input() titleElement?: string;
  @Input() url!: string;
  @Input() privilege?: boolean = false;

  router = inject(Router)
  route = inject(ActivatedRoute)
  http = inject(HttpClient)
  modalService = inject(ModalService)

  id = this.route.snapshot.params['id'];
  @Input() fields?: Field[] = []

  ngOnInit() {
  }

  goBack() {
    return this.router.navigate(['../../'], {relativeTo: this.route});
  }

  onEdit(id: any) {
    return this.router.navigate(['../../modifier/' + id], {relativeTo: this.route});

  }

  onDelete(id: any) {
    // if (confirm('Voulez vous vraiment supprimer?')){
    //   this.http.delete(this.url+id,{}).subscribe({
    //     next: () => {
    //       alert('Suppression réussi')
    //       this.router.navigate(['../../'], {relativeTo: this.route});
    //     },
    //     error: (err) => {
    //       alert(err)
    //     }
    //   })
    // }
    // }

  }

  protected readonly environment = environment;

  resetPassword(id: any) {
    return this.router.navigate(['../../reinitialisation-de-mot-de-passe/' + id], {relativeTo: this.route});

  }

  privileges(id: any) {
    return this.router.navigate(['../../privileges/' + id], {relativeTo: this.route});

  }
}
