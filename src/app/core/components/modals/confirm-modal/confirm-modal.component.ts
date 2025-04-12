import {Component, EventEmitter, Input, Output} from '@angular/core';
import Modal from 'bootstrap/js/dist/modal';

@Component({
  selector: 'app-confirm-modal',
  standalone: true,
  imports: [],
  templateUrl: './confirm-modal.component.html',
  styleUrl: './confirm-modal.component.css'
})
export class ConfirmModalComponent {
  @Input() title = 'Confirmation';
  @Input() message = 'Êtes-vous sûr ?';
  @Output() confirm = new EventEmitter<boolean>();

  handleConfirm(result: boolean) {
    this.confirm.emit(result);
    this.close();
  }

  close() {
    const modalElement = document.getElementById('confirmModal');
    if (modalElement) {
      const modalInstance = Modal.getInstance(modalElement);
      modalInstance?.hide();
    }
  }
}
