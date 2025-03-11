import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';


export const electorAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const elector = localStorage.getItem('elector')
  const token = localStorage.getItem('token')
  // const noLoggin= route.data[0].noLoggin;

  if(elector && token){

    return true
  }else{
    router.navigateByUrl('/parrainages-interface/electeur/connection')
    return false
  }



};

export const electorLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const elector = localStorage.getItem('elector')

  if(!elector){

    return true
  }else{
    router.navigateByUrl('/parrainages-interface/electeur')
    return false
  }
};
