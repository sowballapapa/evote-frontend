import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const adminAuthGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  if(user){

    return true
  }else{
    router.navigateByUrl('admin/login')
    return false
  }

};
export const adminAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const noLoggin= route.data[0].noLoggin;

  if(user || noLoggin === true){

    return true
  }else{
    router.navigateByUrl('admin/login')
    return false
  }



};

export const adminLoginGuard: CanActivateFn = (route, state) => {

const router = inject(Router)
const user = localStorage.getItem('user')
const token = localStorage.getItem('token')

  if(!user && !token){

    return true
  }else{
    router.navigateByUrl('admin')
    return false
  }
};
