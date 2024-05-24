import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Provider } from '@angular/core';

// Injection token for the Http Interceptors multi-provider
import { HTTP_INTERCEPTORS } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
class LogInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler):
    Observable<HttpEvent<any>> {
    console.log(`${req.url} is requested`)
    return next.handle(req);
  }
}

/** Provider for the Noop Interceptor. */
export const LogInterceptorProvider: Provider =
  { provide: HTTP_INTERCEPTORS, useClass: LogInterceptor, multi: true };


