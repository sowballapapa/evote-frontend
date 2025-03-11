import { inject } from '@angular/core';
import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';

export const adminAuthGuardGuard: CanActivateFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const admin = localStorage.getItem('admin')
  if(user && admin){

    return true
  }else{
    router.navigateByUrl('admin/login')
    return false
  }

};
export const adminAuthChildGuard: CanActivateChildFn = (route, state) => {

  const router = inject(Router)
  const user = localStorage.getItem('user')
  const admin = localStorage.getItem('admin')
  const token = localStorage.getItem('token')
  // const noLoggin= route.data[0].noLoggin;

  if(user && admin && token){

    return true
  }else{
    router.navigateByUrl('admin/login')
    return false
  }



};

export const adminLoginGuard: CanActivateFn = (route, state) => {

const router = inject(Router)
  const admin = localStorage.getItem('admin')
  const token = localStorage.getItem('token')

  if(!admin || !token){

    return true
  }else{
    router.navigateByUrl('admin')
    return false
  }
};
