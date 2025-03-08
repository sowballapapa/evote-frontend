import { HttpInterceptorFn } from '@angular/common/http';

export const adminTokenInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem('token')
  const clonereq = req.clone({
    setHeaders:{
      Authorization: `Bearer ${token}`
    }
  })

  return next(clonereq)

};
