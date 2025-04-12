import { Component } from '@angular/core';
import {Alert, ModalService} from '../../../services/modal.service';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-alert-modal',
  standalone: true,
  imports: [
    NgIf
  ],
  templateUrl: './alert-modal.component.html',
  styleUrl: './alert-modal.component.css'
})
export class AlertModalComponent {
  alert: Alert | null = null;
  timeoutId: any;

  constructor(private modalService:ModalService) {
  }

  ngOnInit() {
    this.modalService.alert$.subscribe((alert) => {
      this.alert = alert;
      if (alert?.autoClose) {
        clearTimeout(this.timeoutId);
        this.timeoutId = setTimeout(() => this.alert = null, alert.duration || 3000);
      }
    });
  }

  close() {
    this.alert = null;
  }
}
