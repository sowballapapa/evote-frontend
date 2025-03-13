import {CanActivateChildFn, CanActivateFn, Router} from '@angular/router';
import {inject} from '@angular/core';


export const collectorAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const collector = localStorage.getItem('collector')
  const token = localStorage.getItem('token')

  if(token && collector){

    return true
  }else{
    router.navigateByUrl('/parrainages-interface/collecteur/connection')
    return false
  }



};

export const collectorLoginGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const collector = localStorage.getItem('collector')
  const token = localStorage.getItem('token')

  if(!collector){


    return true
  }else{
    router.navigateByUrl('/parrainages-interface/collecteur')
    return false
  }
};
