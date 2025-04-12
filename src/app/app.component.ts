import {Component, inject} from '@angular/core';
import {ActivatedRoute, RouterOutlet} from '@angular/router';
import {AlertModalComponent} from './core/components/modals/alert-modal/alert-modal.component';
import {ConfirmModalComponent} from './core/components/modals/confirm-modal/confirm-modal.component';
import {ModalService} from './core/services/modal.service';

@Component({
    selector: 'app-root',
  imports: [RouterOutlet, AlertModalComponent, ConfirmModalComponent],
    templateUrl: './app.component.html',
    styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'evote-front-end';
  modalService = inject(ModalService)

  constructor(private route: ActivatedRoute) {}
  saveSomething() {
    this.modalService.show('success', 'Données sauvegardées avec succès !');
  }

  handleError() {
    this.modalService.show('danger', 'Une erreur est survenue.', false);
  }

}
