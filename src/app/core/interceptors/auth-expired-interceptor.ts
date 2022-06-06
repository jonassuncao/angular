import {
  HttpErrorResponse,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

const STATUS_UNAUTHORIZED = 401;

@Injectable({ providedIn: 'root' })
export class AuthExpiredInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}

  public intercept(req: HttpRequest<any>, next: HttpHandler) {
    return next.handle(req).pipe(
      catchError((error) => {
        if (error instanceof HttpErrorResponse) {
          if (error.status === STATUS_UNAUTHORIZED) {
            // TODO Implementar ação se a requisição retornar erro 401
          }
        }
        return throwError(() => error);
      })
    );
  }
}
