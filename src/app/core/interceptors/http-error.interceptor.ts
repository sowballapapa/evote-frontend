import {HttpErrorResponse,  HttpHandlerFn, HttpInterceptorFn, HttpRequest} from '@angular/common/http';
import {catchError, throwError} from 'rxjs';
import {inject} from '@angular/core';
import {Router} from '@angular/router';
import {ModalService} from '../services/modal.service';


export const httpErrorInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn)=> {

   const router = inject(Router)
  const notificationService = inject(ModalService); // Injection du service


  return next(req).pipe(
      catchError((err: HttpErrorResponse) => {
      let message = 'Une erreur est survenue.'

  if (err.error instanceof ErrorEvent) {
    //Erreur côté client
    message = 'Erreur client: ' + err.error.message
  } else {
    //Erreur Serveur
    message = `Erreur ${err.status} : ${err.message}`
  if (err.status === 401) {
    message = 'Erreur 401 - Session expirée. Vueillez vous reconnecter.'
    router.navigateByUrl('/')
  }

  if (err.status === 403) {
    message = 'Erreur 403 - Accès Refusé. Vous n\'avez pas les droits.'
    // router.navigateByUrl('unauthorized')
  }

  if (err.status === 404) {
    message = 'Erreur 404 - Ressource non trouvé.'
    // router.navigateByUrl('notfound')
  }

  if (err.status >= 500) {
    message = 'Erreur Serveur. Réessayez plus tard.'
  }

  if (err.status === 422) {
    return throwError(()=>err)
  }
}

  notificationService.show('danger',message,false);
  return throwError(() => new Error(message))
})
);

}


