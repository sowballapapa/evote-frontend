import {CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const authElectionsGuard: CanActivateFn = (route, state) => {
  const router = inject(Router)
  const polling_station = localStorage.getItem('polling_station')

  if(!polling_station){

    return true
  }else{
    router.navigateByUrl('/elections-interface')
    return false
  }
};
