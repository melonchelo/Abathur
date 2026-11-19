import { HttpInterceptorFn } from '@angular/common/http';
import { TimeoutError, catchError, throwError, timeout } from 'rxjs';

import { crearErrorApi } from './models/error-api';

/** Si el backend no responde, la pantalla muestra error en vez de quedar colgada. */
export const HTTP_TIMEOUT_MS = 8000;

export const httpTimeoutInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    timeout({ first: HTTP_TIMEOUT_MS }),
    catchError((error: unknown) => {
      if (error instanceof TimeoutError) {
        return throwError(() =>
          crearErrorApi(
            'TIMEOUT',
            'El servidor no respondió a tiempo. Revisá que Abathur-back esté levantado.',
          ),
        );
      }
      return throwError(() => error);
    }),
  );
};
