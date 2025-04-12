import { Injectable } from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';
import Modal from 'bootstrap/js/dist/modal';

export type AlertType = 'success' | 'danger' | 'warning' | 'info';

export interface Alert {
  type: AlertType;
  message: string;
  autoClose?: boolean;
  duration?: number;
}



@Injectable({ providedIn: 'root' })
export class ModalService {
  private confirmResult = new Subject<boolean>();
  confirmResult$ = this.confirmResult.asObservable();

  open(title: string, message: string) {
    const modalElement:any = document.getElementById('confirmModal');
    if (modalElement) {
      const modal = new Modal(modalElement);
      modal.show();

      // Fournir le contenu
      const comp = modalElement['__ngContext__']?.[8]; // dépend de la version d'Angular
      if (comp) {
        comp.title = title;
        comp.message = message;
      }
    }
  }

  confirm(result: boolean) {
    this.confirmResult.next(result);
  }

  private alertSubject = new BehaviorSubject<Alert | null>(null);
  alert$ = this.alertSubject.asObservable();

  show(type: AlertType, message: string, autoClose = true, duration = 3000) {
    this.alertSubject.next({ type, message, autoClose, duration });
  }

  clear() {
    this.alertSubject.next(null);
  }
}
