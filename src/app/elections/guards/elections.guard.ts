import {CanActivateChildFn, Router} from '@angular/router';
import {inject} from '@angular/core';

export const electionsGuard: CanActivateChildFn = (childRoute, state) => {
  const router = inject(Router)
  const polling_station = localStorage.getItem('polling_station')
  const token = localStorage.getItem('token')
  // const noLoggin= route.data[0].noLoggin;

  if(polling_station && token){

    return true
  }else{
    router.navigateByUrl('/elections-interface/login')
    return false
  }

};
