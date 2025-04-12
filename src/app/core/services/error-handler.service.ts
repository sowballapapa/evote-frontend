import { Injectable } from '@angular/core';
import { HttpErrorResponse} from '@angular/common/http';
import {throwError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ErrorHandlerService {

  constructor() { }

  errorHandler(error: HttpErrorResponse) {
    let errorMessage = '<div class="alert alert-danger p-5 fs-3">Une erreur est survenue</div>';

    if (error.error instanceof ErrorEvent) {
      // Erreur côté client (ex: réseau, navigateur)
      errorMessage = `<div class="alert alert-danger p-5 fs-3">Erreur client : ${error.error.message}</div>`;
    } else {
      // Erreur côté serveur
      errorMessage = `<div class="alert alert-danger p-5 fs-3">Erreur serveur (${error.status}) : ${error.message}</div>`;
    }
    // Affichage ou log (ex: toaster, console, monitoring)
    console.error(errorMessage);
    // Tu peux aussi utiliser un service de notification ici
    return throwError(() => new Error(errorMessage));
  }
}
