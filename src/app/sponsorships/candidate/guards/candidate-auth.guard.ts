import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';


export const candidateAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const candidate = localStorage.getItem('candidate')
  const token = localStorage.getItem('token')

  if(token && candidate){

    return true
  }else{
    router.navigateByUrl('/parrainages-interface/candidat/connection')
    return false
  }



};

export const candidateLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const candidate = localStorage.getItem('candidate')
  const token = localStorage.getItem('token')

  if(!candidate){


    return true
  }else{
    router.navigateByUrl('/parrainages-interface/candidat')
    return false
  }
};
