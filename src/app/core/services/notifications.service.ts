import { Injectable } from '@angular/core';
import {ToastrService} from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class NotificationsService {


  constructor(private toastr: ToastrService) {}

  showSuccess(message: string, title: string = 'Succès'): void {
    this.toastr.success(message, title);
  }

  showError(message: string, title: string = 'Erreur'): void {
    this.toastr.error(message, title, {
      timeOut: 7000,
      progressBar: true,
      closeButton: true,
      enableHtml: true});
  }

  showInfo(message: string, title: string = 'Info'): void {
    this.toastr.info(message, title);
  }

  showWarning(message: string, title: string = 'Attention'): void {
    this.toastr.warning(message, title);
  }

}
