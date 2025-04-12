import {Component, inject, Input} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {NgForOf} from '@angular/common';
import {HttpClient} from '@angular/common/http';
import {ModalService} from '../../../../core/services/modal.service';



export interface Field{
  title: string;
  value: string;
}


@Component({
  selector: 'app-view-element',
  standalone: true,
  imports: [
    NgForOf
  ],
  templateUrl: './view-element.component.html',
  styleUrl: './view-element.component.css'
})
export class ViewElementComponent {
  @Input() titleElement?: string;
  @Input() url!: string;

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

    this.modalService.open(
      'Supprimer cet élément ?',
      'Cette action est irréversible.'
    );

    this.modalService.confirmResult$.subscribe((confirmed) => {
      if (confirmed) {
        this.http.delete(this.url + id, {}).subscribe({
          next: () => {
            this.modalService.show('success', 'Suppression réussie!');
              this.router.navigate(['../../'], {relativeTo: this.route});
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
}
