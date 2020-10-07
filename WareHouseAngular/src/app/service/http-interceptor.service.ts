import { HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (sessionStorage.getItem('username') && sessionStorage.getIten('token')) {
            req = req.clone({
                setHeaders : {
                    Authorization: sessionStorage.getItem('token')
                }
            })
                }
            return next.handle(req);
    }
}
