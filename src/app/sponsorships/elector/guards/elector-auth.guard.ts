import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';


export const electorAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const noLoggin= route.data[0].noLoggin;

  if(user || noLoggin === true){

    return true
  }else{
    router.navigateByUrl('/evote-parrainages/electeur/connection')
    return false
  }



};

export const electorLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const token = localStorage.getItem('token')

  if(!user && !token){

    return true
  }else{
    router.navigateByUrl('/evote-parrainages/electeur')
    return false
  }
};
