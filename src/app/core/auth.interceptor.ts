import { HttpInterceptorFn } from '@angular/common/http';

/** Clave de `localStorage` del JWT. El ingreso la escribe; el interceptor la lee. */
export const ACCESS_TOKEN_STORAGE_KEY = 'abathur.access_token';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const token = localStorage.getItem(ACCESS_TOKEN_STORAGE_KEY);
  if (token === null || token === '') {
    return next(req);
  }

  return next(
    req.clone({
      setHeaders: { Authorization: `Bearer ${token}` },
    }),
  );
};
